const mongoose = require('mongoose')

//角色表
const schema = new mongoose.Schema({
    name: {type: String},
    chinese: {type: String}
})

module.exports = mongoose.model('Role', schema, "Roles")
