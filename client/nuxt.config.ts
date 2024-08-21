import { resolve } from 'pathe'

export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@nuxt/devtools-ui-kit',
  ],

  nitro: {
    output: {
      publicDir: resolve(__dirname, '../dist/client'),
    },
  },

  app: {
    baseURL: '/__my-module',
  },

  devtools: {
    enabled: false,
  },

  compatibilityDate: '2024-08-21',
})
