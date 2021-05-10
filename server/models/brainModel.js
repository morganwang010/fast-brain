const mongoose = require('mongoose');

const FastbrainSchema = new mongoose.Schema({
  question: String,
  answer: String,
})

const FastBrain = mongoose.model('fastbrains', FastbrainSchema)
console.log("fffffffffffff")
module.exports = FastBrain;