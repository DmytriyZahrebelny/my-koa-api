const Router = require('koa-router');
const uuidv4 = require('uuid/v4');
const Products = require('../models/Products');

const productsRouter = new Router();

productsRouter.get('/products', async (ctx) => {
  const users = await Products.find({});
  ctx.body = users;
}).post('/add', async (ctx) => {
  await Products.create(Object.assign(ctx.request.body, { id: uuidv4() }));

  ctx.body = 'ok';
}).del('/delete', async (ctx) => {
  ctx.body = ctx.request.body;

  console.log(ctx.body)
});

module.exports = productsRouter;
