import mongoose from 'mongoose';
import Game from '../models/game.js';

function getGames(req, res) {
    Game.find((err, games) => {
        if (err) {
            res.send(err);
        }
        res.json(games);
    });
}

function getGameById(req, res) {
    Game.findById(req.params.game_id, (err, game) => {
        if (err) {
            res.send(err);
        }
        res.json(game);
    });
}

function postGame(req, res) {
    var newGame = new Game(req.body);

    newGame.save((err, game) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Game created!'});
    });
}

function updateGame(req, res) {
    Game.findById({
        _id: req.params.game_id
    }, (err, game) => {
        if (err)
            res.send(err);
        Object.assign(game, req.body).save((err, game) => {
            if (err)
                res.send(err);
            res.json({message: 'Game updated!'});
        });
    });
}

function deleteGame(req, res) {
    Game.remove({
        _id: req.params.game_id
    }, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Game successfully deleted'});
    });
}

module.exports = { getGames, postGame, getGameById, updateGame, deleteGame };
