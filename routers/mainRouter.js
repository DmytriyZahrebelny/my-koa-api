const Router = require('koa-router');

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'hello';
});

router.post('/test', async (ctx) => {
  ctx.body = ctx.request.body;
  console.log(ctx.body);
});

module.exports = router;
