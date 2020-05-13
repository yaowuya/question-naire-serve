const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {type: String},
    icon: {type: String},
    info: {type: String},
    from: {type: String},
    nowPrice: {type: String},
    underlinePrice: {type: String},
    otherPrice: {type: String},
    url: {type: String},
    category: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'},
})

module.exports = mongoose.model('Good', schema, 'Goods')
