import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var roundSchema = new Schema({
  result: String,
  winner: String
});

var gameSchema = new Schema({
  player1: String,
  player2: String,
  winner: String,
  loser: String,
  rounds: [roundSchema]
});

module.exports = mongoose.model('Game', gameSchema);
