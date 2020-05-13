const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {type: String},
    icon: {type: String},
    url: {type: String}
})

module.exports = mongoose.model("Photos", schema, "Photos")
