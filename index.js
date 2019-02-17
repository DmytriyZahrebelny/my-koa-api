const config = require('config');
const app = require('./app');

app.listen(config.get('port'), () => {
  console.log('App is running on http://localhost:3001');
});
