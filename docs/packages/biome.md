# Shared biome configuration

- [BiomeJS](https://biomejs.dev/pt-br/) for code linting as formatting

The purpose of the `eslint` is linting `javascript` and `typescript` languages (`js`, `ts`, `tsx`).

> To make sure Biome formats when saving. Add "editor.formatOnSave": true in your VSCode personal settings.
> To make sure Biome formats when saving. Add `Extension:Biome` [teste](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) in your VSCode.


---

## Contents

- [Setup](#setup)
- [Automation](#automation)
- [Usage](#usage)
- [Donation](#donation)
- [License](#license)

## Setup

- Add workspace reference to `@muravjev/configs-eslint-ts` and its peer dependencies:

  ```sh
  pnpm add -w @muravjev/configs-eslint-ts eslint
  ```

- Add eslint configuration file:

  ```js
  // .eslintrc.js

  module.exports = require('@muravjev/configs-eslint-ts');
  ```

- Add eslint ignore patterns file:

  ```sh
  # .eslintignore

  !.*
  node_modules/

  # Next ignore patterns
  .next/
  .build/
  .coverage/

  # Custom ignore patterns
  ...
  ```

- Add eslint scripts:

  ```jsonc
  // package.json

  "scripts": {
    ...
    "lint": "eslint --ext js,cjs,mjs,ts,tsx",
    "lint:fix": "pnpm lint --fix"
    ...
  }
  ```

## Automation

- Setup [➡ eslint vscode plugin](../../docs/plugins/vscode-eslint.md) to integrate `eslint` with vscode environment.

## Usage

- **Automatic** validation file with `eslint` on save.
- **Automatic** validation of staged files with `eslint` on commit.
- Manual usage from command line:

  ```sh
  pnpm lint .
  pnpm lint:fix .
  ```


[⬅ Back](../../README.md)

