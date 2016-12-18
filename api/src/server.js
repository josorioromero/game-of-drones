//Setup
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import Game from './models/game';
import gameController from './controllers/gameController.js';

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
  gameController.getGames(req, res);
})

//POST http://localhost:3000/api/game
.post((req, res) => {
  gameController.postGame(req, res);
});
//---------------------
//Routing for /game/:game_id
//-------------------------
router.route('/game/:game_id')

//GET http://localhost:3000/api/game/1
.get((req, res) => {
  gameController.getGameById(req, res);
})

//PUT http://localhost:3000/api/game/1
.put((req, res) => {
  gameController.updateGame(req, res);
})

//DELETE http://localhost:3000/api/game/1
.delete((req, res) => {
  gameController.deleteGame(req, res);
});
//-------------------------

app.use('/api', router);

//Listen portapp.listen(port);
app.listen(port);
console.log(`Server succesfully started on port ${port}`);
