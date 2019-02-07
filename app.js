const Koa = require('koa');

const routers = require('./routers/mainRouter');

const app = new Koa();

require('./handlers/01-favicon').init(app);
require('./handlers/02-static').init(app);
require('./handlers/03-logger').init(app);
require('./handlers/05-errors').init(app);
require('./handlers/06-session').init(app);
require('./handlers/07-bodyParser').init(app);
require('./handlers/08-cors').init(app);

app.use(routers.routes());

module.exports = app;
