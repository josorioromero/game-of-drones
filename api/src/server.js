//Setup
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import Game from './models/game';

//app configuration
let app = express();
const port = process.env.PORT || 8080;
const dburi = process.env.MONGO_URI || 'mongodb://gameuser:welcome@jello.modulusmongo.net:27017/xej6yjeP';

app.use(morgan('dev')); //Used to log request to the console, for debug purposes
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Database connection and promise Setup
mongoose.Promise = global.Promise;
mongoose.connect(dburi, (err, res) => {
  if (err) {
    console.log(`ERROR connecting to: ${dburi}. Details: ${err}`);
  } else {
    console.log(`Succesfully connected to: ${dburi}`);
  }
});

//ROUTES
let router = express.Router();

//Middleware and CORS configuration
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log('Request received.');
    next();
});

// Testing route
router.get('/', (req, res) => {
    res.json({
        message: 'It works!'
    });
});

//Routing for /game
// ----------------------
router.route('/game')

//GET http://localhost:3000/api/game
.get((req, res) => {
    Game.find((err, games) => {
      if (err) {
        res.send(err);
      }
      res.json(games);
    });
})

//POST http://localhost:3000/api/game
.post((req, res) => {
    var game = new Game();
    game.player1 = req.body.player1;
    game.player2 = req.body.player2;
    game.winner = req.body.winner;
    game.rounds = req.body.rounds;

    game.save(err => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Game created!'});
    });
});
//---------------------

//Routing for /game/:game_id
//-------------------------
router.route('/game/:game_id')

//GET http://localhost:3000/api/game/1
.get((req, res) => {
    Game.findById(req.params.game_id, (err, game) => {
        if (err) {
            res.send(err);
        }
        res.json(game);
    });
})

//PUT http://localhost:3000/api/game/1
.put((req, res) => {
    Game.findById(req.params.game_id, (err, game) => {
        if (err) {
            res.send(err);
        }

        game.player1 = req.body.player1;
        game.player2 = req.body.player2;
        game.winner = req.body.winner;
        game.rounds = req.body.rounds;

        game.save((err) => {
            if (err) {
                res.send(err);
            }
            res.json({message: 'Game updated'});
        });
    });
})

//DELETE http://localhost:3000/api/game/1
.delete((req, res) => {
    Game.remove({
        _id: req.params.game_id
    }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Game successfully deleted'});
    });
});
//-------------------------

app.use('/api', router);

//Listen portapp.listen(port);
app.listen(port);
console.log(`Server succesfully started on port ${port}`);
