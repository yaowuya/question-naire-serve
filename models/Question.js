const mongoose = require('mongoose')

//问卷表
const schema = new mongoose.Schema({
    questionId:{type:String},
    name: {type: String},
    desc: {type: String},
    questionType: [{type: mongoose.SchemaTypes.ObjectId, ref: 'QuestionType'}]
})
schema.virtual('title', {//定义虚拟字段
    ref: 'Title',// 关联的模型
    localField: '_id',// 内键,schema对应的模型的_id
    foreignField: 'question',//外键,关联模型的字段
    justOne: false  // 只查询一条数据
})
module.exports = mongoose.model('Question', schema, "Questions")
