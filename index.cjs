const log = require('@purinton/log').default || require('@purinton/log');
const pathModule = require('@purinton/path');
const getCurrentDirname = pathModule.getCurrentDirname;
const getCurrentFilename = pathModule.getCurrentFilename;
const pathUrl = pathModule.pathUrl;
const path = pathModule.default || pathModule;
const { registerHandlers } = require('@purinton/errors');
const { registerSignals } = require('@purinton/signals');

module.exports = {
  log,
  getCurrentDirname,
  getCurrentFilename,
  path,
  pathUrl,
  registerHandlers,
  registerSignals,
};
