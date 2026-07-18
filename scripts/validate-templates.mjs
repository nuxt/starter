import { readFileSync, readdirSync } from 'node:fs'
import { basename, dirname, join, relative, sep } from 'node:path'
import process from 'node:process'

const root = new URL('..', import.meta.url).pathname
const schemaPath = join(root, 'template.schema.json')
const schema = JSON.parse(readFileSync(schemaPath, 'utf8'))
const allowedKeys = new Set(Object.keys(schema.properties))

const errors = []
const names = new Map()

const files = readdirSync(join(root, 'templates'), { recursive: true })
  .filter(f => f.endsWith('.json'))
  .map(f => join('templates', f))

for (const file of files) {
  const fail = message => errors.push(`${file}: ${message}`)

  let template
  try {
    template = JSON.parse(readFileSync(join(root, file), 'utf8'))
  }
  catch (e) {
    fail(`invalid JSON: ${e.message}`)
    continue
  }

  for (const key of Object.keys(template)) {
    if (!allowedKeys.has(key)) {
      fail(`unknown key \`${key}\` (add it to template.schema.json if intentional)`)
    }
  }

  for (const key of schema.required) {
    if (!(key in template)) {
      fail(`missing required key \`${key}\``)
    }
  }

  for (const [key, { pattern }] of Object.entries(schema.properties)) {
    if (pattern && typeof template[key] === 'string' && !new RegExp(pattern).test(template[key])) {
      fail(`\`${key}\` value ${JSON.stringify(template[key])} does not match pattern ${pattern}`)
    }
  }

  for (const key of ['url', 'tar']) {
    if (key in template && !URL.canParse(template[key])) {
      fail(`\`${key}\` is not a valid URL`)
    }
  }

  const segments = relative('templates', file).replace(/\.json$/, '').split(sep)
  if (segments[0] !== 'community' && template.name !== segments.join('-')) {
    fail(`\`name\` ${JSON.stringify(template.name)} does not match filename (expected ${JSON.stringify(segments.join('-'))})`)
  }

  if (typeof template.name === 'string') {
    if (names.has(template.name)) {
      fail(`duplicate \`name\` (also used by ${names.get(template.name)})`)
    }
    names.set(template.name, file)
  }

  if (template.tar && template.repo && template.branch) {
    const expectedTar = `https://codeload.github.com/${template.repo}/tar.gz/refs/heads/${template.branch}`
    if (template.tar !== expectedTar) {
      fail(`\`tar\` does not match \`repo\`/\`branch\` (expected ${expectedTar})`)
    }
  }

  const expectedSchema = `${'../'.repeat(segments.length)}${basename(schemaPath)}`
  if (template.$schema !== expectedSchema) {
    fail(`\`$schema\` should be ${JSON.stringify(expectedSchema)}`)
  }
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`✖ ${error}`)
  }
  process.exit(1)
}

console.log(`✔ ${files.length} templates are valid`)
