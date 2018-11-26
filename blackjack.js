"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dealer = (function () {
    function Dealer(id, name, hand) {
        this.id = id;
        this.name = name;
        this.hand = hand;
    }
    return Dealer;
}());
var Card = (function () {
    function Card(suit, value, unicode) {
        this.suit = suit;
        this.value = value;
        this.unicode = unicode;
    }
    return Card;
}());
var User = (function () {
    function User(id, name, balance, betAmount, hand, splits) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.betAmount = betAmount;
        this.hand = hand;
        this.splits = splits;
    }
    User.prototype.hit = function (card) {
        this.hand.push(card);
    };
    User.prototype.stand = function () {
    };
    User.prototype.insurance = function () { };
    User.prototype.split = function () { };
    User.prototype.doubleDown = function () { };
    User.prototype.bet = function () { };
    return User;
}());
var TheGame = (function () {
    function TheGame() {
        this.user = [];
        this.deckOfCards = [];
        this.dealer = new Dealer(0, "Dealer", []);
    }
    TheGame.prototype.createDeck = function (nrOfDecks) {
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
                    var card = new Card(suits[i], values[l], v);
                    this.deckOfCards.push(card);
                }
            }
            k++;
        }
    };
    TheGame.prototype.shuffleDeck = function () {
        var deck = this.deckOfCards;
        var k = 0;
        var j = 0;
        var temp = null;
        for (k = deck.length - 1; k > 0; k -= 1) {
            j = Math.floor(Math.random() * (k + 1));
            temp = deck[k];
            deck[k] = deck[j];
            deck[j] = temp;
        }
    };
    TheGame.prototype.drawCard = function () {
        return this.deckOfCards.pop();
    };
    TheGame.prototype.deal = function () {
        var getPlayer = this.user;
        for (var i = 0; i < getPlayer.length; i++) {
            getPlayer[i].hand.push(this.drawCard());
            getPlayer[i].hand.push(this.drawCard());
        }
        this.dealer.hand.push(this.drawCard());
        this.dealer.hand.push(this.drawCard());
    };
    TheGame.prototype.calculateHand = function (hand) {
        var valueOfHand = 0;
        for (var i = 0; i < hand.length; i++) {
            valueOfHand += hand[i].value;
            if (hand[i].value == 11 && valueOfHand > 21) {
                hand[i].value == 1;
                valueOfHand -= 10;
            }
        }
        return valueOfHand;
    };
    TheGame.prototype.determineWinner = function () { };
    return TheGame;
}());
exports.TheGame = TheGame;
