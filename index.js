const env = require('node-env-file');
const path = require('path');

env(path.join(__dirname, '.env'));

module.exports = require('./lib/server');