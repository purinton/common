# [![Purinton Dev](https://purinton.us/logos/brand.png)](https://discord.gg/QSBxQnX7PF)

## @purinton/common [![npm version](https://img.shields.io/npm/v/@purinton/common.svg)](https://www.npmjs.com/package/@purinton/common) [![license](https://img.shields.io/github/license/purinton/common.svg)](LICENSE) [![build status](https://github.com/purinton/common/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/common/actions)

> An ESM/Jest/Node-friendly utility for resolving file and directory paths, logging, error handling, and signal handling in both CommonJS and ESM environments.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [ESM Example](#esm-example)
  - [CommonJS Example](#commonjs-example)
- [API](#api)
- [TypeScript](#typescript)
- [License](#license)

## Features

- Unified API for CommonJS and ESM
- Logging with [@purinton/log]
- Path utilities with [@purinton/path]
- Error handler registration with [@purinton/errors]
- Signal/shutdown handler registration with [@purinton/signals]
- TypeScript type definitions included
- Fully tested with Jest

## Installation

```bash
npm install @purinton/common
```

## Usage

### ESM Example

```js
import { log, path, getCurrentDirname, getCurrentFilename, registerHandlers, registerSignals } from '@purinton/common';

log.info('This is an info log from @purinton/log');

const { removeHandlers } = registerHandlers();
log.info('Registered error handlers.');

const envFile = path(import.meta, '.env');
log.info(`path to env file: ${envFile}`);

const { shutdown } = registerSignals();
log.info('Registered signal handlers.');
```

### CommonJS Example

```js
const { log, path, getCurrentDirname, getCurrentFilename, registerHandlers, registerSignals } = require('@purinton/common');

log.info('This is an info log from @purinton/log');

const { removeHandlers } = registerHandlers();
log.info('Registered error handlers.');

const envFile = path(__dirname, '.env');
log.info(`path to env file: ${envFile}`);

const { shutdown } = registerSignals();
log.info('Registered signal handlers.');
```

## API

### log

Default logger instance from [@purinton/log]. Supports `.info`, `.warn`, `.error`, etc.

### path(metaOrDir, ...segments)

Joins the current dirname with provided segments to form an absolute path.

- `metaOrDir`: `import.meta` (ESM), a string (dirname, e.g. `__dirname`), or undefined
- `segments`: Path segments to join
- Returns: Absolute path string

### getCurrentDirname(metaOrDir, dirnameFn?)

Returns the current directory name.

- `metaOrDir`: `import.meta` (ESM), a string (dirname, e.g. `__dirname`), or undefined
- `dirnameFn`: Optional custom dirname function
- Returns: Absolute path to the current directory

### getCurrentFilename(metaOrDir)

Returns the current filename.

- `metaOrDir`: `import.meta` (ESM), a string (dirname, e.g. `__dirname`), or undefined
- Returns: Absolute path to the current file

### registerHandlers(processObj?, logger?)

Registers process-level exception handlers for uncaught exceptions, unhandled rejections, warnings, and exit events.

- `processObj`: The process object to attach handlers to (default: process)
- `logger`: Logger for output (default: log)
- Returns: `{ removeHandlers }` function to remove all registered handlers

### registerSignals(options?)

Sets up shutdown handlers for the process.

- `options`: `{ processObj, logger, signals }`
- Returns: `{ shutdown, getShuttingDown }`

## TypeScript

Type definitions are included and exported for all main functions and options:

```ts
import { log, path, getCurrentDirname, getCurrentFilename, registerHandlers, registerSignals, RegisterSignalsOptions } from '@purinton/common';
```

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://purinton.us/logos/discord_96.png)](https://discord.gg/QSBxQnX7PF)[![Purinton Dev](https://purinton.us/logos/purinton_96.png)](https://discord.gg/QSBxQnX7PF)

**[Purinton Dev on Discord](https://discord.gg/QSBxQnX7PF)**

## License

[MIT © 2025 Russell Purinton](LICENSE)

## Links

- [GitHub](https://github.com/purinton/common)
- [npm](https://www.npmjs.com/package/@purinton/common)
- [Discord](https://discord.gg/QSBxQnX7PF)
