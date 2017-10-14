const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('../middleware/errors');
const configRoutes = require('../routes/config');

const port = process.env.PORT || '3000';

/**
 * initial app configuration
 * @param  {Object} app express application
 */
const configure = (app) => {
  app.use(cors());
  app.set('port', port);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  configRoutes(app);
  app.use(errorHandler);
};

/**
 * app startup
 * @param  {Object} server
 */
const start = (server) => {
  server.listen(port);

  server.on('listening', () => {});

  server.on('error', (err) => {
    throw err;
  });
};

module.exports = {
  configure,
  start,
};