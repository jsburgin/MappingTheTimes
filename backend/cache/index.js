const config = require('config');
const redis = require('redis');
const bluebird = require('bluebird');

const client = redis.createClient(config.get('redis'));

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

module.exports = client;