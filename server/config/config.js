var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://newsflex:newsflex@ds031661.mongolab.com:31661/newsflex',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://newsflex:newsflex@ds031661.mongolab.com:31661/newsflex',
    port: process.env.PORT || 80
  }
}
