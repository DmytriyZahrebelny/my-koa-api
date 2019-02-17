const path = require('path');

module.exports = {
  port: process.env.PORT || 3001,
  secret: 'mysecret',
  root: process.cwd(),
  templatesRoot: path.join(process.cwd(), 'templates'),
  mongodb: {
    debug: true,
    uri: process.env.MONGODB_URI,
  },
};
