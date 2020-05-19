const mongoose = require('mongoose')

//题型表
const schema = new mongoose.Schema({
    name: {type: String},
    chinese: {type: String}
})

module.exports = mongoose.model('Topic', schema, "Topics")
