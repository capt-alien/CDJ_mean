// Coding Dojo Assignment Deck of cards

/**
Assignment: Deck of Cards
Create a Card class. A card should have the following functionality:

Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
Each Card should have a numerical value (1-13)
Each Card should have a show method (log the card's information to the console)
Create a Deck class. A deck should have the following functionality:

The Deck should contain the 52 standard Cards
The Deck should be able to shuffle
The Deck should be able to reset
The Deck should be able to deal a random Card
Deal should return the Card that was dealt and remove it from the Deck
Now create a Player class. A Player should have the following functionality:

The Player should have a name
The Player should have a hand (an array of cards taken from a Deck)
The Player should be able to take a Card (use the deck.deal method)
The Player should be able to discard a Card
*/
// 1) ceate vars for suit and string/numarical
var suits = ["Hearts", "Clubs", "Diamonds", "Spades"]
var strings = [
    "ace",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "jack",
    "queen",
    "king"
]
// 2) create a card class
class Card{
    constructor(suit, string, number){
        this.suit=suit;
        this.string=string;
        this.number=number;
    }

    show(){
        console.log(this.string+" of "+this.suit)
    }
}
// 1) Create a deck class
class Deck{
    constructor(){
        this.deck = []
        this.reset = []
        // For loop to itterate through the suites
        // for loop for numbers
        for(var i =0; i< suits.length; i++ ){
            for(var j=0; j< strings.length; j++){
                new_card = new Card(suits[i],strings[j], (j+1));
                this.deck.push(new_card)
            }
        }
        this.reset = this.deck
    }
        // other functions here
        shuffle(){
            var m = this.deck.length, t, i;
            // While there remain elements to shuffle…
            while (m){
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);
                // And swap it with the current element.
                t = this.deck[m];
                this.deck[m] = this.deck[i];
                this.deck[i] = t;
            }
            return this;
        }
        // reset method
        resetDeck(){
            this.deck = this.reset
            return this
        }
        // ranom card method
        randomCard(){
            i = Math.floor(Math.random()*this.deck.length)
            target = this.deck[i]
            delete this.deck[i]
            return target
        }
        length(){
            return this.deck.length
        }
        deal(){
            return this.deck.pop()
        }

    }

class Player{
    constructor(name, deck){
        this.name = name
        this.deck = deck
        this.hand = []

        for(var i=0; i<8;i++){
            this.hand.push(this.deck.randomCard())
        }
    }
    // METHODS GO HERE
    viewHand(){
        for(var x=0; x< this.hand.length-1; x++){
            console.log(this.hand[x].string+" of "+this.hand[x].suit)
        }
    }
    takeCard(){
        this.hand.push(this.deck.deal())
    }
    tossCard(){
      this.hand.pop()
      return this
    }
}


x_deck = new Deck()
x_deck.shuffle()
paul = new Player("Paul", x_deck)
paul.viewHand()
paul.takeCard()
paul.viewHand()
