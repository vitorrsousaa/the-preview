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

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Vitest](https://vitest.dev/) test runner for all things JavaScript
