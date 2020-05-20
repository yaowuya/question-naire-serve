const mongoose = require('mongoose')

//选项表
const schema = new mongoose.Schema({
    name: {type: String},//选项 :A ,B,C
    content: {type: String},//选项内容
    title: {type: mongoose.SchemaTypes.ObjectId, ref: 'Title'}
})

module.exports = mongoose.model('Option', schema, "Options")
