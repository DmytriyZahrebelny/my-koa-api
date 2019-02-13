const path = require('path');

module.exports = {
  port: 3001,
  secret: 'mysecret',
  root: process.cwd(),
  templatesRoot: path.join(process.cwd(), 'templates'),
  mongodb: {
    debug: true,
    url: 'mongodb://localhost/test',
  },
};
