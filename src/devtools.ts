import { Nuxt } from 'nuxt/schema'
import { existsSync } from 'fs'
import { Resolver } from '@nuxt/kit'

const DEVTOOLS_UI_ROUTE = '/__my-module'

export function setupDevToolsUI(nuxt: Nuxt, resolver: Resolver) {
  const clientPath = resolver.resolve('./client')

  nuxt.hook('vite:serverCreated', async (server) => {
    // serve UI in production
    if (existsSync(clientPath)) {
      const sirv = await import('sirv').then((r) => r.default || r)
      server.middlewares.use(
        DEVTOOLS_UI_ROUTE,
        sirv(clientPath, { dev: true, single: true }),
      )
    }
  })

  // @ts-expect-error
  nuxt.hook('devtools:customTabs', (tabs) => {
    tabs.push({
      // unique identifier
      name: 'my-module',
      // title to display in the tab
      title: 'My Module',
      // any icon from Iconify, or a URL to an image
      icon: 'carbon:apps',
      // iframe view
      view: {
        type: 'iframe',
        src: DEVTOOLS_UI_ROUTE,
      },
    })
  })
}
