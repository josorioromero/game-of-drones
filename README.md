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

The client project was bootstraped using the amazing [Create React App](https://github.com/facebookincubator/create-react-app) tool.

H4pp1 C0d1ng
