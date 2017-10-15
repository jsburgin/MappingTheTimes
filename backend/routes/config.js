const rootRouter = require('./routers/root');
const apiRouter = require('./routers/api');
const staticRouter = require('./routers/static');

module.exports = (app) => {
  app.use('/api', apiRouter);
  app.use('/static', staticRouter);
  app.use('/', rootRouter);
};