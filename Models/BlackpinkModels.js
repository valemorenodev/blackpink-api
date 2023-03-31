/* eslint-disable no-undef */
const mongoose = require('mongoose');

const pinksSchema = new mongoose.Schema({
  name: String,
  description: String,
  debutDate: String,
  birthday: String,
  zodiacSign: String,
  trainingTime: String,
  nationality: String,
});


module.exports = mongoose.model("blackpinkData", pinksSchema)