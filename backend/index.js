const express = require('express');
const http = require('http');
const setup = require('./utils/setup');

const app = express();
const server = http.createServer(app);

/**
 * App Setup
 */

setup.configure(app);
setup.start(server);

module.exports = {
  app,
  server,
};