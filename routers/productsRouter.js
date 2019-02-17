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
  .patch('/change/', async (ctx) => {
    const {
      title,
      type,
      description,
      image,
      price,
    } = ctx.request.body;

    await Products.findOneAndUpdate({ id: ctx.request.body.id }, {
      $set: {
        title,
        type,
        description,
        image,
        price,
      },
    }, { new: true });

    ctx.body = await Products.find({});
  });

module.exports = productsRouter;
