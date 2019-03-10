const endpoints = require('./endponts');

class Zomato {
  constructor(config) {
    endpoints.forEach(endpoint => {
      this[endpoint[0]] = (options, cb) => {
        if (options) {
        }
      };
    });
  }
}

module.exports = Zomato;
