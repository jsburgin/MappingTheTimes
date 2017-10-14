const rootRouter = require('./routers/root');
const apiRouter = require('./routers/api');

module.exports = (app) => {
  app.use('/api', apiRouter);
  app.use('/', rootRouter);
};