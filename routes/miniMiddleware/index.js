module.exports=app=>{
    //登陆校验中间件
    const authMiddleware = require("../../middleware/auth");
    const resourceMiddleware = require("../../middleware/resource");
    //小程序
    const miniRouter = require("./MiniRouter");
    app.use("/mini/:resource", resourceMiddleware(), miniRouter);
}
