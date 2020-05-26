const mongoose = require('mongoose')

//问题表
const schema = new mongoose.Schema({
    name: {type: String},
    desc: {type: String},
    answer: {type: Boolean},//是否必答
    order: {type: Number},
    topic: {type: mongoose.SchemaTypes.ObjectId, ref: 'Topic'},//题型
    question: {type: mongoose.SchemaTypes.ObjectId, ref: 'Question'}//调查问卷
})

schema.virtual('option', {//定义虚拟字段
    ref: 'Option',// 关联的模型
    localField: '_id',// 内键,schema对应的模型Title的_id
    foreignField: 'title',//外键,关联模型Option的title字段
    justOne: false  // 只查询一条数据
})

module.exports = mongoose.model('Title', schema, "Titles")
