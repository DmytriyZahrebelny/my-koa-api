const Router = require('koa-router');
const uuidv4 = require('uuid/v4');
const Products = require('../models/Products');

const productsRouter = new Router();

productsRouter
  .get('/products', async (ctx) => {
    ctx.body = await Products.find({});
  })
  .post('/add', async (ctx) => {
    await Products.create(Object.assign(ctx.request.body, { id: uuidv4() }));

    ctx.body = await Products.find({});
  })
  .del('/delete/:id', async (ctx) => {
    await Products.find({ id: ctx.params.id }).remove();

    ctx.body = await Products.find({});
  })
  .patch('/change/:id', async (ctx) => {
    console.log(ctx.params.id);

    ctx.body = 'ok';
  });

module.exports = productsRouter;
