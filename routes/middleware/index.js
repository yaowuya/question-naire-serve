module.exports = app => {
    //登陆校验中间件
    const authMiddleware = require("../../middleware/auth");
    const resourceMiddleware = require("../../middleware/resource");
    //常用增删查改
    app.use("/admin/api/rest/:resource", authMiddleware(), resourceMiddleware(), require("./common/commonRouter"));
    //用户相关
    app.use("/admin/api/user/:resource", resourceMiddleware(), require("./UserRouter"));
    // 问卷管理
    app.use("/admin/api/question/", authMiddleware(), require("./question/QuestionRouter"));
    app.use("/admin/api/question/", authMiddleware(), require("./question/TitleRouter"));
    app.use("/admin/api/question/", authMiddleware(), require("./question/OptionRouter"));
    // 系统管理
    app.use("/admin/api/system/", authMiddleware(), require("./system/PersonRouter"));
}
