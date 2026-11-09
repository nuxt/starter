// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  content: {
    v3Composables: false,
  },
  compatibilityDate: '2024-04-03',
})
