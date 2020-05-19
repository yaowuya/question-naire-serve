const mongoose = require('mongoose')

//问题表
const schema = new mongoose.Schema({
    name: {type: String},
    desc: {type: String},
    answer:{type:Boolean},
    topic:{type:mongoose.SchemaTypes.ObjectId,ref:'Topic'},
    question:{type:mongoose.SchemaTypes.ObjectId,ref:'Question'}
})

module.exports = mongoose.model('Title', schema, "Titles")
