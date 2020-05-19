const mongoose = require('mongoose')

//选项表
const schema = new mongoose.Schema({
    value: {type: String},
    title:{type:mongoose.SchemaTypes.ObjectId,ref:'Title'}
})

module.exports = mongoose.model('Option', schema, "Options")
