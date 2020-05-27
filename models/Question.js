const mongoose = require('mongoose')

//问卷表
const schema = new mongoose.Schema({
    name: {type: String},
    desc: {type: String},
    questionType: [{type: mongoose.SchemaTypes.ObjectId, ref: 'QuestionType'}]
})

module.exports = mongoose.model('Question', schema, "Questions")
