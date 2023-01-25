# SolidStart

## Todo:

> Put all of this in the GitHub projects section

- [x] mdx
  - [using / styling MDX](https://mdxjs.com/docs/using-mdx/)
    - using the layout component to have default styling for the blog posts
- [x] postgres
  - connection
    - able to get the [.env variables](https://vitejs.dev/guide/env-and-mode.html)
  - defining models with prisma + keep writing api
    - [prisma schema ref](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
  - [db seed.ts w/ Prisma](https://www.prisma.io/docs/guides/database/seed-database)
    - default data for users, prods, ordrs, items
- [] api (rest or trpc?)
  - check what the solid way is
  - make a get request and check the connection with postgres
    - [node-postgres](https://node-postgres.com/)
    - [solid api requests](https://start.solidjs.com/core-concepts/api-routes)
    - [postgres api](https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/)
- [] auth
  - [solid auth](https://github.com/OrJDev/solid-auth)
    - check that this is the way
    - do I need to use a different package
      - e.g. Passport or alt?
- [] testing
  - [Vitest](https://vitest.dev/)
  - [Solid testing library](https://github.com/solidjs/solid-testing-library)
- [x] ssr
  - built-in with Vite and Solid
  - understand how this is working:
    - use localhost:####/\_inspect and dev tools to see

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```bash
# create a new project in the current directory
npm init solid@latest

# create a new project in my-app
npm init solid@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.

## Testing

Tests are written with `vitest`, `@solidjs/testing-library` and `@testing-library/jest-dom` to extend expect with some helpful custom matchers.

To run them, simply start:

```sh
npm test
```
