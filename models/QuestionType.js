const mongoose = require('mongoose')

//问卷类型
const schema = new mongoose.Schema({
    name: {type: String},
    chinese: {type: String},
    role: {type: mongoose.SchemaTypes.ObjectId, ref: 'Role'}
})

module.exports = mongoose.model('QuestionType', schema, "QuestionTypes")
