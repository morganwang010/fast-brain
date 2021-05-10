const koa = require('koa');
const app = new koa();
const router = require("../server/router/index")
sendHandle = require('../server/middlewares/sendHandle.js'); 
app.use(router.routes(), router.allowedMethods())
require("../server/framework/services/conndb"); 
app.use(sendHandle())
app.listen(3010,()=>{
    console.log("ddddd");
});
