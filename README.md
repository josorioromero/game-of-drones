### game-of-drones

A simple rock-paper-scissors based game built in React.js in the client side,
Node.js for the server side and MongoDB for the data persistence.

###Tech stack
`client` project:
* React.js
* React Bootstrap
* CSS3
* Jest
* Webpack (through `create-react-app` )

`api` project:
* Node.js
* Express
* Mongoose

Both projects are completely build with JavaScript under the ES6 standard and Babel as transpiler.
The database is MongoDB hosted on a free service tier on https://modulus.io/

###How to run it?
Just follow these steps

* Open your terminal and run `git clone https://github.com/josorioromero/game-of-drones.git`
* Go to the folder where you clonned the repo `cd name_of_folder`
* Go to the API folder `cd api`
* Run the command `npm install`
* Start the api running the command `npm start`, wait until you see the messages `Server succesfully started on port 8080` and `Succesfully connected to: mongodb://gameuser:****@jello.modulusmongo.net:27017/xej6yjeP` which is the mongoDB server used in this project.
* Open another terminal instance and go to the client folder `cd client`
* Run the command `npm install`
* Start the site with `npm start`. You'll be redirected to your browser `http://localhost:3000`

PS: If you want to run the tests for the `client` project, then go to the client folder and run `npm test`

###Some usage instructions

* Start the game by input the two players names and clicking on the **start** button.
* Each player will select the move and will click the **OK** button, when both players have selected their movements, the **Fight**       button will appear and the computer will calculate who's the winner. The round results will appear on the right side of the screen.
  The round can finish with a win for some player or with a draw.
* The fight will repeat until one player wins 3 rounds. The winner will become the new emperor.
* When the game is finished the game data is stored in the database and you can play again clicking on the **play again** button.
* If you click the **history** menu, you'll see an historical information about all the games including the winner, loser and rounds.
* You can filter by winner, if you introduce the name of the winner and it matches with some register, the info of how many games has     won the player and the details for each game will appear on the screen. The filter is not an `includes` filter, you have to match the   name no matter if it's uppercase or lowecase, IE: `pab` won't launch results por `Pablo` but `pablo` or `PABLO` will do.

The client project was bootstraped using the amazing [Create React App](https://github.com/facebookincubator/create-react-app) tool.

H4pp1 C0d1ng
