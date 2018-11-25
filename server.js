"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Server = (function () {
    function Server() {
        this.app = express_1.default();
    }
    Server.prototype.sendIndex = function () {
        this.app.get('/', function (req, res) {
            res.sendFile(__dirname + '/index.html');
        });
        this.app.use(express_1.default.static(__dirname + '/public'));
    };
    Server.prototype.startServer = function () {
        this.sendIndex();
        this.app.listen(3000, function () {
        });
    };
    return Server;
}());
var server = new Server();
server.startServer();
