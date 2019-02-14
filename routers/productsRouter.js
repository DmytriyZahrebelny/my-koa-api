const Router = require('koa-router');
const Products = require('../models/Products');

const productsRouter = new Router();

productsRouter.get('/', async (ctx) => {
  const users = await Products.find({});
  ctx.body = users;
}).post('/test', async (ctx) => {
  await Products.create(ctx.request.body);

  ctx.body = 'ok';
});

module.exports = productsRouter;
