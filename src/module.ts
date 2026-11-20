import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Leave out the extension: it resolves to the `.ts` source in development and to the built `.js` once published
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
