module.exports = app => {
    //登陆校验中间件
    const authMiddleware = require("../../middleware/auth");
    const resourceMiddleware = require("../../middleware/resource");
    //常用增删查改
    const commonRouter = require("./commonRouter");
    app.use("/admin/api/rest/:resource", authMiddleware(), resourceMiddleware(), commonRouter);
    //用户相关
    const userRouter = require("./UserRouter");
    app.use("/admin/api/user/:resource", resourceMiddleware(), userRouter);
    //书籍
    const bookRouter = require("./BookRouter");
    app.use("/admin/api/book/:resource", authMiddleware(), resourceMiddleware(), bookRouter);//书籍
    //分页查询
    const pageRouter = require("./PageRouter");
    app.use("/admin/api/page/:resource", authMiddleware(), resourceMiddleware(), pageRouter);
}
