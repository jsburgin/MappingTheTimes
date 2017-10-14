const rootRouter = require('./routers/root');

module.exports = (app) => {
  app.use('/', rootRouter);
};