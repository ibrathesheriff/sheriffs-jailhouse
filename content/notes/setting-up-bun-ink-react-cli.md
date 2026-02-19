---
title: "Setting Up A Bun, Ink and React CLI tool"
date: 2026-02-18T17:28:19+02:00
lastmodified: 2026-02-18T17:28:19+02:00
draft: false
draftMode: false
author: ibrathesheriff
description: "This is a note on how to setup a CLI tool using  Bun, Ink and React."
categories:
- cli
tags:
- bun
- ink
- react
keywords:
- cli
---
So...

Using `create-ink-app`,
```shell
npx create-ink-app <my-ink-cli>
# or,
npx create-ink-app --typescript <my-ink-cli>
```
to quickly scaffold a new Ink-based Command-Line Interface(CLI) seems to come with a chain of weird issues these days:

![`npm link` failed](/img/notes/learning/cli/npm-link-failed.png)

Or the chilling,

![So many vulnerabilities](/img/notes/learning/cli/create-ink-app-vulnerabilities.png)

This is not the point of this note but was definitely one of the reasons why I got to this solution.

## Initialise the project
```shell
mkdir <my-ink-cli> && cd <my-ink-cli>
bun init -y
```

## Install dependencies
```shell
bun add ink react
bun add -d @types/react typescript
```

## Configure TypeScript: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react",
    "strict": true,
    "outDir": "dist"
  },
  "include": ["src"]
}
```
And yes for `"jsx"` just use `"react"` instead of `"react-jsx"`

## Create the entry point for the CLI tool
```shell
mkdir src && touch src/cli.tsx
```

Then add the following test code into the `src/cli.tsx` file:
```tsx
import React from "react";
import { render, Text, Box } from "ink";

const App = () => (
  <Box flexDirection="column" padding={1}>
    <Text color="green">Hello from Ink + Bun!</Text>
    <Text dimColor>Your CLI is ready.</Text>
  </Box>
);

render(<App />);
```

## Update your package.json
```json
{
  "name": "my-cli",
  "version": "1.0.0",
  "type": "module",
  "bin": {
    "my-cli": "./dist/cli.js"
  },
  "scripts": {
    "dev": "bun run --watch src/cli.tsx",
    "build": "bun build src/cli.tsx --outdir dist --target node",
    "start": "bun run src/cli.tsx"
  }
}
```
If you have `"module": "index.ts"` you can leave it in.

## Then run it!
```shell
bun run start
```
