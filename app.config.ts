export default defineAppConfig({
  myProject: {
    name: 'My amazing Nuxt layer'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myProject?: {
      /** Project name */
      name?: string
    }
  }
}
