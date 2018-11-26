import { TheGame } from "./blackjack";

let game = new TheGame();

game.createDeck();
game.shuffleDeck();

import { createServer, Server } from 'http';
import express from 'express';
import socketIo from 'socket.io';


export class ChatServer {
    public static readonly PORT:number = 3000;
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
        this.sendIndex();
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || ChatServer.PORT;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }
    sendIndex() {
        this.app.get('/', function (req, res) {
            res.sendFile(__dirname + '/index.html');
        });
        this.app.use(express.static(__dirname));
    }
    listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port);
          
            socket.on('message', (m:any) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('message', m);
            });
            
            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
            socket.on('change_username',  (userName:string)=>{
                socket.username = userName;
                this.io.emit('chat message', socket.username + ' connected');
                console.log(socket.username + ' connected');

            });
        });
        
    }

    public getApp(): express.Application {
        return this.app;
    }
}

let server = new ChatServer();



