// Example usage of the common package in CommonJS
const { log, path, registerHandlers, registerSignals } = require('@purinton/common');

log.info('This is an info log from @purinton/log');

const { removeHandlers } = registerHandlers();
log.info('Registered error handlers.');

const envFile = path(__dirname, '.env');
log.info(`path to env file: ${envFile}`);

const { shutdown } = registerSignals();
log.info('Registered signal handlers.');
