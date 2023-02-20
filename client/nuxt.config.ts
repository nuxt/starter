import { resolve } from "pathe";

export default defineNuxtConfig({
  ssr: false,
  modules: [
    '../src/module',
    '@nuxt/devtools',
    '@nuxt/ui'
  ],
  nitro: {
    output: {
      publicDir: resolve(__dirname, '../dist/client')
    }
  },
  app: {
    baseURL: '/__my-module',
  },
})
