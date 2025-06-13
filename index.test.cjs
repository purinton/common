// Minimal CommonJS test stub
const { log, getCurrentDirname, getCurrentFilename, path, pathUrl, registerHandlers, registerSignals } = require('./index.cjs');
const { test, expect } = require('@jest/globals');

test('log should be defined', () => {
  expect(log).toBeDefined();
  expect(typeof log.info).toBe('function');
});

test('getCurrentDirname should return a string', () => {
  expect(typeof getCurrentDirname(__dirname)).toBe('string');
});

test('getCurrentFilename should return a string', () => {
  expect(typeof getCurrentFilename(__filename)).toBe('string');
});

test('path should join paths', () => {
  const result = path(__dirname, 'foo');
  expect(result).toContain('foo');
});
test('pathUrl should join paths', () => {
  const result = pathUrl(__dirname, 'foo');
  expect(result).toContain('foo');
});

test('registerHandlers returns removeHandlers', () => {
  const { removeHandlers } = registerHandlers();
  expect(typeof removeHandlers).toBe('function');
});

test('registerSignals returns shutdown and getShuttingDown', () => {
  const { shutdown, getShuttingDown } = registerSignals();
  expect(typeof shutdown).toBe('function');
  expect(typeof getShuttingDown).toBe('function');
});
