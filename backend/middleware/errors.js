/**
 * development error handler
 * @param  {Error}   err
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
const dev = (err, req, res, next) => {
  res.json(err);
};

/**
 * production error handler
 * @param  {Error}   err
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
const prod = (err, req, res, next) => {
  res.json({
    message: err.message,
    status: err.status,
  });
};

/**
 * generates default error handler at startup
 * @return {Function}
 */
module.exports = () => {
  const handler = process.env === 'development' ? dev : prod;
  return (err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500);
    handler(err, req, res, next);
  };
};