const mongoose = require('mongoose')

const spotLightSchema = new mongoose.Schema({
  tag: {type: String, required: true},
  trophies: Number,
  Squad: String,



})

const SpotLightPlayer = mongoose.model("SpotLightPlayer", sotLightSchema)


module.exports = SpotLightPlayer
