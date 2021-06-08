const _ = require('lodash');

const defaultEnvironment = {
  environment: process.env.NODE_ENV || 'local',
};

let envs = {
  development: _.cloneDeep(defaultEnvironment),
  local: _.cloneDeep(defaultEnvironment),
  production: _.cloneDeep(defaultEnvironment),
  sandbox: _.cloneDeep(defaultEnvironment),
  test: _.cloneDeep(defaultEnvironment),
  uat: _.cloneDeep(defaultEnvironment),
};

module.exports = envs[defaultEnvironment.environment];
