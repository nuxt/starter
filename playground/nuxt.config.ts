import { defineNuxtConfig } from 'nuxt'
import MyModule from '..'

export default defineNuxtConfig({
  modules: [
    MyModule
  ],
  imports: {
    autoImport: false
  },
  myModule: {
    addPlugin: true
  }
})
