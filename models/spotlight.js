const mongoose = require('mongoose')

const spotLightSchema = new mongoose.Schema({
  tag: {type: String, required: true},
  trophies: Number,
  squad: String,



})

const SpotLightPlayer = mongoose.model("SpotLightPlayer", spotLightSchema)


module.exports = SpotLightPlayer
