const fastBrainModel = require("../models/brainModel.js");


class FastBrainController {
     
     
    // 获取用户信息
    static async question(ctx) {
        console.log("eeeeeeee")
        console.log(ctx.query["skip"])
        console.log(ctx.queryString)
 
        // const question = await fastBrainModel.findOne({"answer":"做梦\n"})
        const question = await fastBrainModel.find({}).limit(10).skip(parseInt(ctx.query["skip"]))
        console.log(question)
      
        return ctx.body=question;
    }
}

module.exports = FastBrainController;
