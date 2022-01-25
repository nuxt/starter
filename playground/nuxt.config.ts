import { defineNuxtConfig } from 'nuxt3'
import MyModule from '..'

export default defineNuxtConfig({
  buildModules: [
    MyModule
  ],
  myModule: {
    addPlugin: true
  }
})
