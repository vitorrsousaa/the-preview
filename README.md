# Monorepo Starter Template

The purpose of this configuration is to ensure strict coding standards and facilitate coding experience using monorepo.

## Intro

This monorepo consist in these packages:

```bash
└─ monorepo # <- monorepo root package
   ├─ apps
   │  ├─ api # <- typescript server application
   │  ├─ client # <- typescript react application
   │  └─ storefront # <- typescript next application
   └─ packages
      ├─ @shared/config-css # <- css config files used throughout the monorepo
      ├─ @shared/config-typescript # <- tsconfig.json's used throughout the monorepo
      ├─ @shared/logger # <- isomorphic logger (a small wrapper around console.log)
      ├─ @shared/vitest-presets # <- Vitest configurations
      └─ @shared/ui # <- a dummy React UI library with tailwindcss and shadcn
```

## Configuration

### Core

- [Git](/docs/core/git.md)

### Monorepo

- [Monorepo](docs/packages/monorepo.md)
- [Biome](/tools/biome.md)
- [CommitLint](/tools/commitlint.md)
- [LintStaged](/docs/tools/lint-staged.md)
- [Lefthook](/docs/tools/lefthook.md)

### Lib

- [Typescript](/packages/typescript.md)
- [Vitest](/packages/vitest.md)

### Lib | `react`

- [React Lib](https://react.dev/)

### App | `next`

- [Next App](https://nextjs.org/)

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Vitest](https://vitest.dev/) test runner for all things JavaScript

## 🎲 Running application

```bash
# Clone this repository
$ git clone

# Install the dependencies
yarn install

# Running all packages and apps
yarn dev
```
