





interface Player {
    id: number;
    name: string;
    balance:number;
    betAmount:number;
    hand:Card[];
    split:[Card[]];
}

interface Card {
    suit: string;
    value: number;
    unicode: string;
}

interface Deck {
    cards: Card[];
}



export interface Game {
    player:Player[];

}



export class Game {

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
                    let card: Card = {
                        unicode: v, suit: suits[i], value: values[l]
                    }
                    console.log(card.unicode + " sutit: " + card.suit + " value: " + card.value);
                    
                }
            }
            k++;
        }
    }



    public shuffleDeck() { }
    public drawCard() { }
    public deal() { }
    public hit() { }
    public stand() { }
    public insurance() { }
    public split() { }
    public doubleDown() { }
    public bet() { }
    public determineWinner() { }

}
