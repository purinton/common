import { log, getCurrentDirname, getCurrentFilename, path, registerHandlers, registerSignals } from './index.mjs';
import { test, expect } from '@jest/globals';

test('log should be defined', () => {
  expect(log).toBeDefined();
  expect(typeof log.info).toBe('function');
});

test('getCurrentDirname should return a string', () => {
  expect(typeof getCurrentDirname(import.meta)).toBe('string');
});

test('getCurrentFilename should return a string', () => {
  expect(typeof getCurrentFilename(import.meta)).toBe('string');
});

test('path should join paths', () => {
  const result = path(import.meta, 'foo');
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
