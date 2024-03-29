# SolidStart E-Commerce

## Project intention

A fast SSR ecommerce store with statically generated MDX pages for a blog and easy deployment.

Tech used:

- SolidStart: full stack framework - fast, modern, small js bundle, great dev experience
- Postgres: database
- Prisma + Zod: models and schema validation
- Vite + Vitest: part of SolidStart but useful for SSR, fast bundling and testing
  - [vite-imagetools](https://www.npmjs.com/package/vite-imagetools) for image optimisation
- Stripe: payments
- Sass: for CSS

## Todo:

> Put all of this in the GitHub projects section

- design:
  - [page structure / layouts similar to next commerce](https://demo.vercel.store/)
  - [esthetic / feel inspiration](https://camdentownbrewery.com/)
    - bold, fun, accessible
    - main design principles:
      - block colours, not too many: black, white, accent
      - Fun SVGs for navigation
      - consistent design language accross the site
    -
- [x] mdx
  - [using / styling MDX](https://mdxjs.com/docs/using-mdx/)
    - using the layout component to have default styling for the blog posts
- [x] postgres
  - connection
    - [example with connection to mongoDb](https://dev.to/alexmercedcoder/creating-a-todo-list-with-solid-start-and-mongodb-1c4)
    - able to get the [.env variables](https://vitejs.dev/guide/env-and-mode.html)
    - [example with connection to postgres and SQL queries](https://dev.to/alexmercedcoder/creating-a-todo-list-with-solid-start-and-mongodb-1c4)
    - able to get the [.env variables](https://vitejs.dev/guide/env-and-mode.html)
  - [] defining models with prisma + keep writing api
    - [prisma schema ref](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
  - [] [zod schema validation](https://zod.dev/)
  - [db seed.ts w/ Prisma](https://www.prisma.io/docs/guides/database/seed-database)
  - [] schema validation with [zod-prisma](https://github.com/CarterGrimmeisen/zod-prisma)
    - default data for users, prods, ordrs, items
- [] api (rest or trpc?)
  - check what the solid way is
    - [api example w/out db connection](https://blog.logrocket.com/getting-started-solidstart-solid-js-framework/#defining-our-business-trips-data)
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
