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

module.exports = mongoose.model('Title', schema, "Titles")
