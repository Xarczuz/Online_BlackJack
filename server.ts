import {Game } from "./blackjack";
// let newGame = new Game();
// newGame.createDeck();



import express from 'express';

// import io from 'socket.io';


class Server {

    public app: express.Application;
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
      //create expressjs application
      this.app = express();
    }
    sendIndex(){
        this.app.get('/', function (req, res) {
            res.sendFile(__dirname + '/index.html');
          });
        this.app.use(express.static(__dirname + '/public'));
    }
    startServer(){
        this.sendIndex();
        this.app.listen(3000,function(){
        });
    }

  }


  let server = new Server();

  server.startServer();