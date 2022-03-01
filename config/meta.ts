import type { NuxtOptionsHead } from "@nuxt/types/config/head"
import { description } from '../package.json'

const meta: NuxtOptionsHead = {
  title: "Nuxt 3 🎉",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  noscript: [
    {
      innerHTML: 'This application requires JavaScript.',
    },
  ],
}

export { meta }
