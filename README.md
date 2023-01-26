# 🪄 Nuxt Starter Templates

> Quickly get started with a minimal Nuxt starter template!

## Quick start

Head over to [nuxt.new](https://nuxt.new) to get started quickly.

## Usage

You can use `nuxi` CLI to clone latest template to an empty directory:

```sh
$ npx nuxi init [-t,--template=<template>] [<dir>]
```

**Example:** Clone `v3` to `my-app` directory:

```sh
$ npx nuxi init -t v3 nuxt-app
```

## Templates

Name | Description | Local     | Online |
-----|-------------|-----------|--------|
[v3](https://github.com/nuxt/starter/tree/v3) | [Nuxt 3](https://github.com/nuxt/nuxt) | `npx nuxi init nuxt-app` | [Stackblitz](https://stackblitz.com/github/nuxt/starter/tree/v3-stackblitz) / [CodeSandbox](https://codesandbox.io/p/github/nuxt/starter/v3-codesandbox) |
[module](https://github.com/nuxt/starter/tree/module) | Nuxt Module with [Module Builder](https://github.com/nuxt/module-builder) | `npx nuxi init my-module -t module` | - |
[layer](https://github.com/nuxt/starter/tree/layer) | [Nuxt Layer](https://nuxt.com/docs/guide/going-further/layers) Starter with Extends (experimental) | `npx nuxi init  -t layer` | - |
[content](https://github.com/nuxt/starter/tree/content) | [Nuxt Content](https://github.com/nuxt/content) | `npx nuxi init content-app -t content` | [Stackblitz](https://stackblitz.com/github/nuxt/starter/tree/content) / [CodeSandbox](https://codesandbox.io/p/github/nuxt/starter/content) |
[doc-driven](https://github.com/nuxt/starter/tree/doc-driven) | [Document Driven mode](https://content.nuxtjs.org/guide/writing/document-driven) | `npx nuxi init doc-driven-app -t doc-driven` | [Stackblitz](https://stackblitz.com/github/nuxt/starter/tree/doc-driven) / [CodeSandbox](https://codesandbox.io/p/github/nuxt/starter/doc-driven) |
[v2-bridge](https://github.com/nuxt/starter/tree/v2-bridge) | [Nuxt 2](https://github.com/nuxt/nuxt/tree/2.x-dev) + [Bridge](https://github.com/nuxt/bridge) | `npx nuxi init nuxt-bridge-app -t v2-bridge` | [Stackblitz](https://stackblitz.com/github/nuxt/starter/tree/v2-bridge) / [CodeSandbox](https://codesandbox.io/p/github/nuxt/starter/v2-bridge-codesandbox) |
[v2](https://github.com/nuxt/starter/tree/v2) | [Nuxt 2](https://github.com/nuxt/nuxt/tree/2.x-dev) | `npx nuxi init nuxt2-app -t v2` | [Stackblitz](https://stackblitz.com/github/nuxt/starter/tree/v2-stackblitz) / [CodeSandbox](https://codesandbox.io/p/github/nuxt/starter/v2-codesandbox) |

## Contribution

Each template is maintained in a branch (see [all branches](https://github.com/nuxt/starter/branches)).
For improvements, please open a Pull Request to each individual branch.

**Note:** Please avoid commiting lock-files such as `yarn.lock` and `package-lock.json` to template branches!

## License

[MIT](./LICENSE) - Made with 💚
