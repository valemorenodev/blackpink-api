/* eslint-disable no-undef */
const mongoose = require('mongoose');

const pinksSchema = new mongoose.Schema({
  name: String,
  description: String,
  debutDateAsMember: String,
  debutDateAsSolist: String,
  bornDate: String,
  zodiacSign: String,
  trainingTime: String,
  nationality: String,
  position: String
});


module.exports = mongoose.model("blackpinkData", pinksSchema)