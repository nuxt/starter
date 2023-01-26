import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript inteface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Add runtime directory to be transpiled by Nuxt
    // nuxt.options.build.transpile.push(resolve('./runtime'))

    // Do no add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve('./runtime/plugin'))
  }
})
