import { defineNuxtConfig } from 'nuxt3'
import MyModule from '../src/module'

export default defineNuxtConfig({
  modules: [
    MyModule
  ],
  myModule: {
    addPlugin: true
  }
})
