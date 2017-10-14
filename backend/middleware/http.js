const http = {
  wrap(method) {
    return (req, res, next) => {
      const data = Object.assign({}, req.body, req.query);

      method(data).then(apiData => res.json(apiData)).catch(next);
    };
  }
};

module.exports = http;