const mongoose = require('mongoose')

//回答表
const schema = new mongoose.Schema({
    person: {type: mongoose.SchemaTypes.ObjectId, ref: 'Person'},
    option: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Option'}],
    created:{type:String}
})

module.exports = mongoose.model('Answer', schema, "Answers")
