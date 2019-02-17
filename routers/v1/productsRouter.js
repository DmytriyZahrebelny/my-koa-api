const Router = require('koa-router');
const uuidv4 = require('uuid/v4');
const Products = require('../../models/Products');

const productsRouter = new Router();

productsRouter
  .get('/api/v1/products', async (ctx) => {
    ctx.body = await Products.find({});
  })
  .post('/api/v1/add', async (ctx) => {
    await Products.create(Object.assign(ctx.request.body, { id: uuidv4() }));

    ctx.body = await Products.find({});
  })
  .del('/api/v1/delete/:id', async (ctx) => {
    await Products.find({ id: ctx.params.id }).remove();

    ctx.body = await Products.find({});
  })
  .patch('/api/v1/change/', async (ctx) => {
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
