const router = require("koa-router")();

const FastBrainController = require('../controllers/fastbrain');
 

//获取题目
router.get("/question", FastBrainController.question);

module.exports = router;
