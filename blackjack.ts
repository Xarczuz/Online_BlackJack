
interface Dealer {
    id: number;
    name: string;
    hand: Card[];
}

class Dealer {
    id: number;
    name: string;
    hand: Card[];
    constructor(id: number,
        name: string,
        hand: Card[],
    ) {
        this.id = id;
        this.name = name;
        this.hand = hand;
    }
}


interface User extends Dealer {
    id: number;
    name: string;
    balance: number;
    betAmount: number;
    hand: Card[];
    splits: [Card[]];
}

interface Card {
    suit: string;
    value: number;
    unicode: string;
}
class Card implements Card {
    suit: string;
    value: number;
    unicode: string;
    constructor(suit: string, value: number, unicode: string) {
        this.suit = suit;
        this.value = value;
        this.unicode = unicode;
    }
}

class User implements User {

    id: number;
    name: string;
    balance: number;
    betAmount: number;
    hand: Card[];
    splits: [Card[]];

    constructor(id: number,
        name: string,
        balance: number,
        betAmount: number,
        hand: Card[],
        splits: [Card[]]) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.betAmount = betAmount;
        this.hand = hand;
        this.splits = splits;
    }

    public hit(card: Card) {
        this.hand.push(card);
    }

    public stand() {

    }
    public insurance() { }
    public split() { }
    public doubleDown() { }
    public bet() { }
}

export class TheGame {
    dealer: Dealer;
    user: User[];
    deckOfCards: Card[];

    constructor() {
        this.user = [];
        this.deckOfCards = [];
        this.dealer = new Dealer(0, "Dealer", []);
    }

    public createDeck(nrOfDecks: number = 6) {
        let cardType = ['a', 'b', 'c', 'd'];
        let cardSerie = ['1', '2', '3', '4', '5', '6',
            '7', '8', '9', 'a', 'b', 'd', 'e'];
        let values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        let suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
        let code = '&#x1f0';

        let k: number = 1;
        while (k <= nrOfDecks) {
            for (let i = 0; i < cardType.length; i++) {
                for (let l = 0; l < cardSerie.length; l++) {
                    let v = code + cardType[i] + cardSerie[l] + ';';
                    let card: Card = new Card(suits[i], values[l], v)
                    // console.log(card.unicode + " sutit: " + card.suit + " value: " + card.value);
                    this.deckOfCards.push(card);
                }
            }
            k++;
        }
        // this.game.deckOfCards.forEach(element => {
        //     console.log(element.value + " " + element.suit + " " + element.unicode);
        // });
    }

    public shuffleDeck() {
        let deck = this.deckOfCards;
        let k = 0;
        let j = 0;
        let temp = null;

        for (k = deck.length - 1; k > 0; k -= 1) {
            j = Math.floor(Math.random() * (k + 1));
            temp = deck[k];
            deck[k] = deck[j];
            deck[j] = temp;
        }
        //  this.game.deckOfCards.forEach(element => {
        //     console.log(element.value + " " + element.suit + " " + element.unicode);
        // });
    }

    public drawCard(): Card {
        return this.deckOfCards.pop();
    }

    public deal() {
    
        let getPlayer = this.user;
        for (var i = 0; i < getPlayer.length; i++) {
           
            getPlayer[i].hand.push(this.drawCard());
            getPlayer[i].hand.push(this.drawCard());
        }
        this.dealer.hand.push(this.drawCard());
        this.dealer.hand.push(this.drawCard());
    }

    public calculateHand(hand:Card[]):number {
        let valueOfHand=0;
        for(let i=0;i<hand.length;i++){
            valueOfHand+=hand[i].value;
            if(hand[i].value == 11 && valueOfHand > 21) {
                hand[i].value ==1;
                valueOfHand -= 10;
            }           
        }
        return valueOfHand;
    }
    public determineWinner() { }

}
