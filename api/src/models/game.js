var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roundSchema = new Schema({
  result: String,
  winner: String
});

var gameSchema = new Schema({
  player1: String,
  player2: String,
  winner: String,
  rounds: [roundSchema]
});

module.exports = mongoose.model('Game', gameSchema);
