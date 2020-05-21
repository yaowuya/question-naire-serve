const mongoose = require('mongoose')

//回答表
const schema = new mongoose.Schema({
    person: {type: mongoose.SchemaTypes.ObjectId, ref: 'Person'},
    question: {type: mongoose.SchemaTypes.ObjectId, ref: 'Question'},
    option: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Option'}],
    createTime: {type: Date, default: Date.now()},
    updateTime: {type: Date, default: Date.now()}
}, {
    timestamps: {createdAt: 'createTime', updatedAt: 'updateTime'}
})

module.exports = mongoose.model('Answer', schema, "Answers")
