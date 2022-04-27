# 🪄 Nuxt Starter Templates

> Quickly get started with a minimal Nuxt starter template!

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
[v3](https://github.com/nuxt/starter/tree/v3) | [Nuxt 3](https://github.com/nuxt/framework) | `npx nuxi init -t nuxt/starter#v3` | [Stackblitz](https://stackblitz.com/github/nuxt/starter/tree/v3-stackblitz) / [CodeSandbox](https://codesandbox.io/s/github/nuxt/starter/tree/v3-codesandbox) |
[module](https://github.com/nuxt/starter/tree/module) | Nuxt Module with [Module Builder](https://github.com/nuxt/module-builder) | `npx nuxi init -t nuxt/starter#module my-module` | - |
[v2-bridge](https://github.com/nuxt/starter/tree/v2-bridge) | [Nuxt 2](https://github.com/nuxt/nuxt.js) + [Bridge](https://github.com/nuxt/bridge) | `npx nuxi init -t nuxt/starter#v2-bridge` | [Stackblitz](https://stackblitz.com/github/nuxt/starter/tree/v2-bridge-stackblitz) / [CodeSandbox](https://codesandbox.io/s/github/nuxt/starter/tree/v2-bridge-codesandbox) |
[v2](https://github.com/nuxt/starter/tree/v2) | [Nuxt 2](https://github.com/nuxt/nuxt.js) | `npx nuxi init -t nuxt/starter#v2` | [Stackblitz](https://stackblitz.com/github/nuxt/starter/tree/v2) / [CodeSandbox](https://codesandbox.io/s/github/nuxt/starter/tree/v2) |

## Contribution

Each template is maintained in a branch (see [all branches](https://github.com/nuxt/starter/branches)).
For improvements, please open a Pull Request to each individual branch.

**Note:** Please avoid commiting lock-files such as `yarn.lock` and `package-lock.json` to template branches!

## License

[MIT](./LICENSE) - Made with 💚
