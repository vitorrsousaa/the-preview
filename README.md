# Monorepo Starter Template

The purpose of this configuration is to ensure strict coding standards and facilitate coding experience using monorepo.

## Intro

This monorepo consist in these packages:

```bash
└─ monorepo # <- monorepo root package
   ├─ apps
   │  └─ api # <- typescript server application
   │  └─ client # <- typescript react application
   │  └─ storefront # <- typescript next application
   └─ packages
      ├─ @shared/config-css # <- typescript utils libarary
      └─ baz # <- react components libarary
```

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `storefront`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
- `blog`: a [Remix](https://remix.run/) blog
- `@shared/vitest-presets`: Vitest configurations
- `@shared/logger`: isomorphic logger (a small wrapper around console.log)
- `@shared/ui`: a dummy React UI library with tailwindcss and shadcn
- `@shared/config-typescript`: tsconfig.json's used throughout the monorepo
- `@shared/config-css`: css config files used throughout the monorepo

## Configuration

### Core

- [Git](/docs/core/git.md)

### Monorepo

- [Monorepo](docs/packages/monorepo.md)
- [Prettier](/packages/prettier/README.md)
- [ESLint](/packages/eslint-ts/README.md)
- [Remark](/packages/remark/README.md)
- [CommitLint](/packages/commitlint/README.md)
- [LintStaged](/docs/tools/lint-staged.md)
- [Husky](/docs/tools/husky.md)
- [Changesets](docs/tools/changesets.md)
- [Syncpack](/packages/syncpack/README.md)

### Lib

- [Lib](/docs/packages/lib.md)
- [Typescript](/packages/ts/README.md)
- [Jest](/packages/jest-ts/README.md)

### Lib | `react`

- [React Lib](/docs/packages/lib-react.md)
- [Typescript](/packages/ts-react/README.md)
- [ESLint](/packages/eslint-ts-react/README.md)
- [Jest](/packages/jest-ts-react/README.md)

### App | `next`

- [Next App](/docs/packages/app-next.md)
- [Typescript](/packages/ts-next/README.md)
- [ESLint](/packages/eslint-ts-next/README.md)

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `storefront`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
- `blog`: a [Remix](https://remix.run/) blog
- `@shared/vitest-presets`: Vitest configurations
- `@shared/logger`: isomorphic logger (a small wrapper around console.log)
- `@shared/ui`: a dummy React UI library with tailwindcss and shadcn
- `@shared/config-typescript`: tsconfig.json's used throughout the monorepo
- `@shared/config-css`: css config files used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [BiomeJS](https://biomejs.dev/pt-br/) for code linting as formatting
- [Vitest](https://vitest.dev/) test runner for all things JavaScript

#### BiomeJS

You can format files and directories using `format` command:

```bash
yarn format
```

You can lint and apply safe fixes to files and directories using the `lint` command:

```bash
yarn lint
```