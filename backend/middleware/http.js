const http = {
  wrap(method) {
    return (req, res, next) => {
      const data = Object.assign({}, req.body, req.query);

      method(data)
        .then(apiData => {
          res.type('json');
          res.send(apiData)
        })
        .catch(next);
    };
  }
};

module.exports = http;