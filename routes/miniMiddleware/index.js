module.exports = app => {
    //小程序
    const homeRouter = require("./home/HomeMiniRouter")
    const questionRouter = require("./question/QuestionMiniRouter")
    app.use("/mini/api/", homeRouter)
    app.use("/mini/api/", questionRouter)
}
