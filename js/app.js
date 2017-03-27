//console.log("CONNECTED!")
var deck = $("#first-deck");

var starterDeck = [{name: "A", suit: "hearts", value: 1, src: ""},
                  {name: "A", suit: "diamonds", value: 1, src: ""},
                  {name: "A", suit: "clubs", value: 1, src: ""},
                  {name: "A", suit: "spades", value: 1, src: ""},

                  {name: "2", suit: "hearts", value: 2, src: ""},
                  {name: "2", suit: "diamonds", value: 2, src: ""},
                  {name: "2", suit: "clubs", value: 2, src: ""},
                  {name: "2", suit: "spades", value: 2, src: ""},

                  {name: "3", suit: "hearts", value: 3, src: ""},
                  {name: "3", suit: "diamonds", value: 3, src: ""},
                  {name: "3", suit: "clubs", value: 3, src: ""},
                  {name: "3", suit: "spades", value: 3, src: ""},

                  {name: "4", suit: "hearts", value: 4, src: ""},
                  {name: "4", suit: "diamonds", value: 4, src: ""},
                  {name: "4", suit: "clubs", value: 4, src: ""},
                  {name: "4", suit: "spades", value: 4, src: ""},

                  {name: "5", suit: "hearts", value: 5, src: ""},
                  {name: "5", suit: "diamonds", value: 5, src: ""},
                  {name: "5", suit: "clubs", value: 5, src: ""},
                  {name: "5", suit: "spades", value: 5, src: ""},

                  {name: "6", suit: "hearts", value: 6, src: ""},
                  {name: "6", suit: "diamonds", value: 6, src: ""},
                  {name: "6", suit: "clubs", value: 6, src: ""},
                  {name: "6", suit: "spades", value: 6, src: ""},

                  {name: "7", suit: "hearts", value: 7, src: ""},
                  {name: "7", suit: "diamonds", value: 7, src: ""},
                  {name: "7", suit: "clubs", value: 7, src: ""},
                  {name: "7", suit: "spades", value: 7, src: ""},

                  {name: "8", suit: "hearts", value: 8, src: ""},
                  {name: "8", suit: "diamonds", value: 8, src: ""},
                  {name: "8", suit: "clubs", value: 8, src: ""},
                  {name: "8", suit: "spades", value: 8, src: ""},

                  {name: "9", suit: "hearts", value: 9, src: ""},
                  {name: "9", suit: "diamonds", value: 9, src: ""},
                  {name: "9", suit: "clubs", value: 9, src: ""},
                  {name: "9", suit: "spades", value: 9, src: ""},

                  {name: "10", suit: "hearts", value: 10, src: ""},
                  {name: "10", suit: "diamonds", value: 10, src: ""},
                  {name: "10", suit: "clubs", value: 10, src: ""},
                  {name: "10", suit: "spades", value: 10, src: ""},

                  {name: "J", suit: "hearts", value: 11, src: ""},
                  {name: "J", suit: "diamonds", value: 11, src: ""},
                  {name: "J", suit: "clubs", value: 11, src: ""},
                  {name: "J", suit: "spades", value: 11, src: ""},

                  {name: "Q", suit: "hearts", value: 12, src: ""},
                  {name: "Q", suit: "diamonds", value: 12, src: ""},
                  {name: "Q", suit: "clubs", value: 12, src: ""},
                  {name: "Q", suit: "spades", value: 12, src: ""},

                  {name: "K", suit: "hearts", value: 13, src: ""},
                  {name: "K", suit: "diamonds", value: 13, src: ""},
                  {name: "K", suit: "clubs", value: 13, src: ""},
                  {name: "K", suit: "spades", value: 13, src: ""}];

var $handOne = [];
var $handTwo = [];



$(function() {

//grab elements


//grab the initial deck div

var deck = $("#first-deck");
//two empty arrays for when the cards are split

//player 1 hand (new div)
//player 2 hand (new div)

// handlers

//random split of deck making two new divs that have the resulting arrays in them
    var onClickSplitDeck = function() {
      //console.log(starterDeck);
      var playerOneHand = $("<div />").attr("id", "player-one").appendTo("#board");
      var playerTwoHand = $("<div />").attr("id", "player-two").appendTo("#board");
      //math random
      //push half to one hand
      //push the other to the other hand
    };
deck.on("click", onClickSplitDeck);

//turns
  //on click show card
  // create new divs for the cards to move to
    //compare cards
      //if players card is more than other players card
      //if tie make pick more cards
        //move compared cards to new arrays (higher value goes to the discard of the person with the winning card)

    // go to other player and repeat above

//check win for rounds

//check win for game

//restart game

// keep score


//listeners

//first deck div on click run split

//two new decks on click run turns

//restart run restart


});
