"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = (function () {
    function Game() {
    }
    Game.prototype.createDeck = function (nrOfDecks) {
        if (nrOfDecks === void 0) { nrOfDecks = 6; }
        var cardType = ['a', 'b', 'c', 'd'];
        var cardSerie = ['1', '2', '3', '4', '5', '6',
            '7', '8', '9', 'a', 'b', 'd', 'e'];
        var values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        var suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
        var code = '&#x1f0';
        var k = 1;
        while (k <= nrOfDecks) {
            for (var i = 0; i < cardType.length; i++) {
                for (var l = 0; l < cardSerie.length; l++) {
                    var v = code + cardType[i] + cardSerie[l] + ';';
                    var card = {
                        unicode: v, suit: suits[i], value: values[l]
                    };
                    console.log(card.unicode + " sutit: " + card.suit + " value: " + card.value);
                }
            }
            k++;
        }
    };
    Game.prototype.shuffleDeck = function () { };
    Game.prototype.drawCard = function () { };
    Game.prototype.deal = function () { };
    Game.prototype.hit = function () { };
    Game.prototype.stand = function () { };
    Game.prototype.insurance = function () { };
    Game.prototype.split = function () { };
    Game.prototype.doubleDown = function () { };
    Game.prototype.bet = function () { };
    Game.prototype.determineWinner = function () { };
    return Game;
}());
exports.Game = Game;
