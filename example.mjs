// Example usage of the common package in ESM
import { log, path, registerHandlers, registerSignals } from '@purinton/common';

log.info('This is an info log from @purinton/log');

const { removeHandlers } = registerHandlers();
log.info('Registered error handlers.');

const envFile = path(import.meta, '.env');
log.info(`path to env file: ${envFile}`);

const { shutdown } = registerSignals();
log.info('Registered signal handlers.');
