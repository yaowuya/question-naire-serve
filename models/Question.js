const mongoose = require('mongoose')

//问卷表
const schema = new mongoose.Schema({
    name: {type: String},
    desc: {type: String},
    belong: {type: String}
})

module.exports = mongoose.model('Question', schema, "Questions")
