# Nuxt Layer Starter

Create Nuxt extendable layer with this GitHub template.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Working on your layer

Your layer is at the root of this repository, it is exactly like a regular Nuxt project, except you can publish it on NPM.

The `.playground` directory should help you on trying your layer during development.

Running `pnpm dev` will prepare and boot `.playground` directory, which imports your layer itself.

## Distributing your layer

Your Nuxt layer is shaped exactly the same as any other Nuxt project, except you can publish it on NPM.

To do so, you only have to check if `files` in `package.json` are valid, then run:

```bash
npm publish --access public
```

Once done, your users will only have to run:

```bash
npm install --save your-layer
```

Then add the dependency to their `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: 'your-layer'
})
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Or statically generate it with:

```bash
pnpm generate
```

Locally preview production build:

```bash
pnpm preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
