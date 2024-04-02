const mongoose = require("mongoose")

const ChannelModel = new mongoose.Schema({
    image: String,
    source_name: String,
    visitor_name: String,
    revenues: String,
    sales: String,
    converstion: String
})

module.exports = mongoose.model("channel", ChannelModel)