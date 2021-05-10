const router = require('koa-router')();
const fastbrain = require("./fastbrain")
 

// 子路由1
router.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})
// router.use('/', home.routes(), home.allowedMethods())

router.use('/api',fastbrain.routes(),fastbrain.allowedMethods())

module.exports = router;




