//console.log("CONNECTED!")

//grab the first div that represents the deck
var deck = $("#first-deck");

//array of all the cards in a standard deck
var starterDeck = [{name: "A", suit: "hearts", value: 1, src: "images/ace_of_hearts.png"},
                  {name: "A", suit: "diamonds", value: 1, src: "images/ace_of_diamonds.png"},
                  {name: "A", suit: "clubs", value: 1, src: "images/ace_of_clubs.png"},
                  {name: "A", suit: "spades", value: 1, src: "images/ace_of_spades.png"},

                  {name: "2", suit: "hearts", value: 2, src: "images/2_of_hearts.png"},
                  {name: "2", suit: "diamonds", value: 2, src: "images/2_of_diamonds.png"},
                  {name: "2", suit: "clubs", value: 2, src: "images/2_of_clubs.png"},
                  {name: "2", suit: "spades", value: 2, src: "images/2_of_spades.png"},

                  {name: "3", suit: "hearts", value: 3, src: "images/3_of_hearts.png"},
                  {name: "3", suit: "diamonds", value: 3, src: "images/3_of_diamonds.png"},
                  {name: "3", suit: "clubs", value: 3, src: "images/3_of_clubs.png"},
                  {name: "3", suit: "spades", value: 3, src: "images/3_of_spades.png"},

                  {name: "4", suit: "hearts", value: 4, src: "images/4_of_hearts.png"},
                  {name: "4", suit: "diamonds", value: 4, src: "images/4_of_diamonds.png"},
                  {name: "4", suit: "clubs", value: 4, src: "images/4_of_clubs.png"},
                  {name: "4", suit: "spades", value: 4, src: "images/4_of_spades.png"},

                  {name: "5", suit: "hearts", value: 5, src: "images/5_of_hearts.png"},
                  {name: "5", suit: "diamonds", value: 5, src: "images/5_of_diamonds.png"},
                  {name: "5", suit: "clubs", value: 5, src: "images/5_of_clubs.png"},
                  {name: "5", suit: "spades", value: 5, src: "images/5_of_spades.png"},

                  {name: "6", suit: "hearts", value: 6, src: "images/6_of_hearts.png"},
                  {name: "6", suit: "diamonds", value: 6, src: "images/6_of_diamonds.png"},
                  {name: "6", suit: "clubs", value: 6, src: "images/6_of_clubs.png"},
                  {name: "6", suit: "spades", value: 6, src: "images/6_of_spades.png"},

                  {name: "7", suit: "hearts", value: 7, src: "images/7_of_hearts.png"},
                  {name: "7", suit: "diamonds", value: 7, src: "images/7_of_diamonds.png"},
                  {name: "7", suit: "clubs", value: 7, src: "images/7_of_clubs.png"},
                  {name: "7", suit: "spades", value: 7, src: "images/7_of_spades.png"},

                  {name: "8", suit: "hearts", value: 8, src: "images/8_of_hearts.png"},
                  {name: "8", suit: "diamonds", value: 8, src: "images/8_of_diamonds.png"},
                  {name: "8", suit: "clubs", value: 8, src: "images/8_of_clubs.png"},
                  {name: "8", suit: "spades", value: 8, src: "images/8_of_spades.png"},

                  {name: "9", suit: "hearts", value: 9, src: "images/9_of_hearts.png"},
                  {name: "9", suit: "diamonds", value: 9, src: "images/9_of_diamonds.png"},
                  {name: "9", suit: "clubs", value: 9, src: "images/9_of_clubs.png"},
                  {name: "9", suit: "spades", value: 9, src: "images/9_of_spades.png"},

                  {name: "10", suit: "hearts", value: 10, src: "images/10_of_hearts.png"},
                  {name: "10", suit: "diamonds", value: 10, src: "images/10_of_diamonds.png"},
                  {name: "10", suit: "clubs", value: 10, src: "images/10_of_clubs.png"},
                  {name: "10", suit: "spades", value: 10, src: "images/10_of_spades.png"},

                  {name: "J", suit: "hearts", value: 11, src: "images/jack_of_hearts.png"},
                  {name: "J", suit: "diamonds", value: 11, src: "images/jack_of_diamonds.png"},
                  {name: "J", suit: "clubs", value: 11, src: "images/jack_of_clubs.png"},
                  {name: "J", suit: "spades", value: 11, src: "images/jack_of_spades.png"},

                  {name: "Q", suit: "hearts", value: 12, src: "images/queen_of_hearts.png"},
                  {name: "Q", suit: "diamonds", value: 12, src: "images/queen_of_diamonds.png"},
                  {name: "Q", suit: "clubs", value: 12, src: "images/queen_of_clubs.png"},
                  {name: "Q", suit: "spades", value: 12, src: "images/queen_of_spades.png"},

                  {name: "K", suit: "hearts", value: 13, src: "images/king_of_hearts.png"},
                  {name: "K", suit: "diamonds", value: 13, src: "images/king_of_diamonds.png"},
                  {name: "K", suit: "clubs", value: 13, src: "images/king_of_clubs.png"},
                  {name: "K", suit: "spades", value: 13, src: "images/king_of_spades.png"}];


//shuffled cards
var cards = [];
//two empty arrays for when the cards are split
var $handOne = [];
var $handTwo = [];
//two empty arrays for cards won to go into
var playerOneWonCards = [];
var playerTwoWonCards = [];
//empty array for tie cards
var tieCards = [];

//grab board
var board = $("#board");
//grab the divs that represent the hands
var playerOne = $("#player-one");
var playerTwo = $("#player-two");

//grab the paragraph areas that will be changed to prompt turns and tell status
var turnPhrase = $("#turn");
var status = $("#status");

//start jquery
$(function() {

// handlers

var fisherYatesShuffle = function(array) {
  var n = starterDeck.length
  var t;
  var i;

  while (n) {
    i = Math.random() * n-- | 0;  // 0 ≤ i < n; also '| 0' truncates to int.
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }
  return array;
};


//random split of deck making two new divs that have the resulting arrays in them
    var onClickSplitDeck = function() {
      //console.log(starterDeck);
      //hides the initial deck div
      deck.hide();
      //creates the two hands
      //player 1 hand (new div)
      var $playerOneHand = $("<div />").attr("id", "player-one").on("click", onClickShowCardOne).appendTo("#board");
      //player 2 hand (new div)
      var $playerTwoHand = $("<div />").attr("id", "player-two").on("click", onClickShowCardTwo).appendTo("#board");
      //creates new images inside hand divs
      var $cardOneImg = $("<img>").attr("id", "handOneImg");
      //console.log($cardOneImg);
      $cardOneImg.appendTo($playerOneHand);
      var $cardTwoImg = $("<img>").attr("id", "handTwoImg");
      //console.log($cardTwoImg);
      $cardTwoImg.appendTo($playerTwoHand);

      //math random to shuffle deck ERROR THIS IS NOT EXCLUDING CARDS ALREADY PICKED
      //USE FISHER_YATES SHUFFLE or DURSTENFELD SHUFFLE
      fisherYatesShuffle(starterDeck);
      cards = starterDeck;

      //for (var i = 0; i < starterDeck.length; i++) {
        //cards.push(starterDeck[Math.floor(Math.random()*starterDeck.length)]);
        //console.log(cards);
      //};
        //takes the first half of the cards array and puts it into the first hand
      $handOne = cards.splice(0, 26);
      //console.log($handOne);

        //takes the last remaining parts of the cards array and put them into the second hand

      $handTwo = cards.splice(0, 26);
      //console.log($handTwo);
      turnPhrase.text("Player 1 Go!");
    };
//starts the game


    var compareCards = function() {

      //compare cards
            //pushes put cards into discard piles
            //shifts remove the first card object from the hand arrays
      //if playerone card is more than playertwo card
      if ($handOne[0].value > $handTwo[0].value) {
        playerOneWonCards.push($handOne[0]);
        $handOne.shift();
        playerOneWonCards.push($handTwo[0]);
        $handTwo.shift();
        console.log(playerOneWonCards);
        console.log(playerTwoWonCards);
        //console.log($handOne);
        //console.log($handTwo);

      //if player one card is less than player two card
      } else if ($handOne[0].value < $handTwo[0].value) {
        playerTwoWonCards.push($handOne[0]);
        $handOne.shift();
        playerTwoWonCards.push($handTwo[0]);
        $handTwo.shift();
        console.log(playerOneWonCards);
        console.log(playerTwoWonCards);
        //console.log($handOne);
        //console.log($handTwo);

      //if there is a tie make pick more cards
      } else if ($handOne[0].value == $handTwo[0].value) {
        //alert redraw
        //status.text("It's a Tie! WAR!");
        tieCards.push($handOne[0])
        $handOne.shift();
        tieCards.push($handTwo[0]);
        $handTwo.shift();
        //console.log(tieCards);
          // for (var i = 0; i < $handOne.length; i++) {
          //   for (var j = 0; j < $handTwo.length; j++) {
          //     //if cards match keep going
          //     if ($handTwo[j].value === $handOne[i].value) {
          //     //if hand two card value is less than hand one card value put cards into array and remove from hand
          //     } else if ($handTwo[j].value < $handOne[i].value) {
          //       playerOneWonCards.push($handOne[i]);
          //       $handOne.shift();
          //       playerOneWonCards.push($handTwo[j]);
          //       $handTwo.shift();
          //       console.log(playerOneWonCards);
          //       console.log(playerTwoWonCards);
          //       //console.log($handOne);
          //       //console.log($handTwo);
          //       break
          //     //if hand two card value is greater than hand one card value put cards into array and remove from hand
          //   } else if ($handTwo[j].value > $handOne[i].value) {
          //       playerTwoWonCards.push($handOne[i]);
          //       $handOne.shift();
          //       playerTwoWonCards.push($handTwo[j]);
          //       $handTwo.shift();
          //       console.log(playerOneWonCards);
          //       console.log(playerTwoWonCards);
          //       //console.log($handOne);
          //       //console.log($handTwo);
          //       break
          //     }
          //   }
          //}
        // //}
        //var $playerOneTiePull = $("<div />").attr("id", "playerOneTie").appendTo(board);
        //var $playerTwoTiePull = $("<div />").attr("id", "playerTwoTie").appendTo(board);
        //var $playerOneTieImg = $("<img>")
        //var $playerTwoTieImg = $("<img>")

        //compare those
        //do the push
      };


        //move compared cards to new arrays (higher value goes to the discard of the person with the winning card)

        //when hands are empty pull the won piles back to the hands
    };

//turns
    var onClickShowCardOne = function() {
      var handOneImg = $("#handOneImg");
      handOneImg.attr("src", $handOne[0].src);
      turnPhrase.text("Player 2 Draw!")

      // if ($handOne.length === 0) {
      //   for (var i = 0; i < playerOneWonCards.length; i++) {
      //     $handOne.push(playerOneWonCards);
      //     playerOneWonCards = [];
      //   }
      //
      // }
    };



    // go to other player and repeat above

    var onClickShowCardTwo = function() {
      var handTwoImg = $("#handTwoImg");
      handTwoImg.attr("src", $handTwo[0].src);
      turnPhrase.text("Player 1 Draw!");

      // if ($handTwo.length === 0) {
      //   $handTwo.push(playerTwoWonCards);
      //   playerTwoWonCards = [];
      // }

      compareCards();
      //}
        //compare cards
          //if players card is more than other players card
          //if tie make pick more cards
            //move compared cards to new arrays (higher value goes to the discard of the person with the winning card)
    };


//check win for rounds
    var roundWinner = function() {
      //if ($handOne.length === 0 && $handTwo.length === 0) {
        if (playerOneWonCards.length > playerTwoWonCards.length) {
          status.text("Player 1 Wins the Round!");
          $handOne.push(tieCards);
          tieCards.shift();
        } else if (playerOneWonCards.length < playerTwoWonCards.length) {
          status.text("Player Two Wins the Round!");
          $handTwo.push(tieCards);
          tieCards.shift();
        } else if (playerOneWonCards.length == playerTwoWonCards.length) {
          status.text("Tied Round! Keep Playing!");

        }
      //}
    }

//check win for game

//restart game

// keep score


//listeners

//first deck div on click run split

//two new decks on click run turns

//restart run restart





deck.on("click", onClickSplitDeck);
playerOne.on("click", onClickShowCardOne);
playerTwo.on("click", onClickShowCardTwo);



});













































//AN Idea from THE POKEMON GAME
// var player1 = {
//   wins: 0,
//   roundsWon: 0,
//   // updateStats: function() {
//   //   console.log("Player One has " + this.roundsWon "rounds won and " + this.wins + " wins."),
//   // },
//   firstHand: function() {
//     for (var i = 0; i < starterDeck.length/2; i++) {
//       var card = starterDeck[Math.floor(Math.random()*starterDeck.length)];
//       $handOne.push(card);
//     }
//   },
//   wonCards: [],
//
// };
//
// player1.firstHand();
// console.log($handOne);
