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
        // For loop to itterate through the suites
            // for loop for numbers
        for(var i =0; i< suits.length; i++ ){
            for(var j=0; j< strings.length; j++){
                new_card = new Card(suits[i],strings[j], (j+1));
                new_card.show();
                this.deck.push(new_card)
            }
        }
        // other functions here
    }
}
x_deck = new Deck()
console.log(x_deck.deck.length)
