const mongoose = require('mongoose')

//用户表
const schema = new mongoose.Schema({
    name: {type: String},
    number: {type: Number},
    doctor: {type: mongoose.SchemaTypes.ObjectId, ref: 'Person'},
    role: {type: mongoose.SchemaTypes.ObjectId, ref: 'Role'}
})

schema.virtual('patient', {
    localField: '_id',
    foreignField: 'doctor',
    justOne: false,
    ref: 'Person'
})

module.exports = mongoose.model('Person', schema, "Persons")
