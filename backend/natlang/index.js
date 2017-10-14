const config = require('config');
const NatLangUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

const nlu = new NatLangUnderstandingV1({
  username: config.get('watson.username'),
  password: config.get('watson.password'),
  version_date: NatLangUnderstandingV1.VERSION_DATE_2017_02_27,
});

const defaultOptions = {
  features: {
    entities: {},
  },
  language: 'en',
};

const natlang = {
  processUrl(url) {
    const options = Object.assign({}, defaultOptions, { url });
    
    return new Promise((resolve, reject) => {
      nlu.analyze(options, (err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  },
};

module.exports = natlang;