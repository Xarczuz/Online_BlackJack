"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var blackjack_1 = require("./blackjack");
var game = new blackjack_1.TheGame();
game.createDeck();
game.shuffleDeck();
var http_1 = require("http");
var express_1 = __importDefault(require("express"));
var socket_io_1 = __importDefault(require("socket.io"));
var ChatServer = (function () {
    function ChatServer() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
        this.sendIndex();
    }
    ChatServer.prototype.createApp = function () {
        this.app = express_1.default();
    };
    ChatServer.prototype.createServer = function () {
        this.server = http_1.createServer(this.app);
    };
    ChatServer.prototype.config = function () {
        this.port = process.env.PORT || ChatServer.PORT;
    };
    ChatServer.prototype.sockets = function () {
        this.io = socket_io_1.default(this.server);
    };
    ChatServer.prototype.sendIndex = function () {
        this.app.get('/', function (req, res) {
            res.sendFile(__dirname + '/index.html');
        });
        this.app.use(express_1.default.static(__dirname));
    };
    ChatServer.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log('Running server on port %s', _this.port);
        });
        this.io.on('connect', function (socket) {
            console.log('Connected client on port %s.', _this.port);
            socket.on('message', function (m) {
                console.log('[server](message): %s', JSON.stringify(m));
                _this.io.emit('message', m);
            });
            socket.on('disconnect', function () {
                console.log('Client disconnected');
            });
            socket.on('change_username', function (userName) {
                socket.username = userName;
                _this.io.emit('chat message', socket.username + ' connected');
                console.log(socket.username + ' connected');
            });
        });
    };
    ChatServer.prototype.getApp = function () {
        return this.app;
    };
    ChatServer.PORT = 3000;
    return ChatServer;
}());
exports.ChatServer = ChatServer;
var server = new ChatServer();
