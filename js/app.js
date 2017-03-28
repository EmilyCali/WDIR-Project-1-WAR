//console.log("CONNECTED!")
var deck = $("#first-deck");

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

var $handOne = [];
var $handTwo = [];
var board = $("#board");

var playerOne = $("#player-one");
var playerTwo = $("#player-two");

var playerOneWonCards = [];
var playerTwoWonCards = [];

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
      //hides the initial deck div
      deck.hide();
      //creates the two hands
      var $playerOneHand = $("<div />").attr("id", "player-one").on("click", onClickShowCardOne).appendTo("#board");
      var $playerTwoHand = $("<div />").attr("id", "player-two").on("click", onClickShowCardTwo).appendTo("#board");

      var $cardOneImg = $("<img>").attr("id", "handOneImg");
      //console.log($cardOneImg);
      $cardOneImg.appendTo($playerOneHand);

      var $cardTwoImg = $("<img>").attr("id", "handTwoImg");
      //console.log($cardTwoImg);
      $cardTwoImg.appendTo($playerTwoHand);

      //math random to shuffle deck
      var cards = [];
      for (var i = 0; i < starterDeck.length; i++) {
        cards.push(starterDeck[Math.floor(Math.random()*starterDeck.length)]);
        //console.log(cards);
        };
        //THE COMMENTED OUT STUFF IN THIS FUNCTION WAS BECAUSE WE WERE GETTING OBJECTS IN AND ARRAY INSIDE ANOTHER ARRAY

        //takes the first half of the cards array and puts it into the first hand
        //var handOne = cards.splice(0, 26);
        //$handOne.push(handOne);
        $handOne = cards.splice(0, 26);
        //$handOne.push(cards.splice(0, 26));
        //console.log($handOne);

        //takes the last remaining parts of the cards array and put them into the second hand
        //var handTwo = cards.splice(0, 26);
        //$handTwo.push(handTwo);
        $handTwo = cards.splice(0, 26);
        //$handTwo.push(cards.splice(0, 26));
        //console.log($handTwo);
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
        //console.log($handOne);
        //console.log($handTwo);

      //if player one card is less than player two card
      } else if ($handOne[0].value < $handTwo[0].value) {
        playerTwoWonCards.push($handOne[0]);
        $handOne.shift();
        playerTwoWonCards.push($handTwo[0]);
        $handTwo.shift();
        console.log(playerTwoWonCards);
        //console.log($handOne);
        //console.log($handTwo);

      //if there is a tie make pick more cards
      } else if ($handOne[0].value == $handTwo[0].value) {
        //alert redraw
        alert("Oh no! Your cards are the same value! Redraw, winner take all!")
        //do onclick show again but show [0][1]
        board.on("click", function() {
          var handOneImg = $("#handOneImg");
          handOneImg.attr("src", $handOne[1].src);
          var handTwoImg = $("#handTwoImg");
          handTwoImg.attr("src", $handTwo[1].src);
          //compare the two newly drawn cards
          if ($handOne[1] > $handTwo[1]) {
            playerOneWonCards.push($handOne[0]);
            $handOne.shift();
            playerOneWonCards.push($handOne[0])
            $handOne.shift();
            playerOneWonCards.push($handTwo[0]);
            $handTwo.shift();
            playerOneWonCards.push($handTwo[0]);
            $handTwo.shift();
            console.log(playerOneWonCards);
            console.log($handOne);
            console.log($handTwo);

          } else if ($handOne[1] < $handTwo[1]) {
            playerTwoWonCards.push($handOne[0]);
            $handOne.shift();
            playerTwoWonCards.push($handOne[0]);
            $handOne.shift();
            playerTwoWonCards.push($handTwo[0]);
            $handTwo.shift();
            playerTwoWonCards.push($handTwo[0]);
            $handTwo.shift();
            console.log(playerTwoWonCards);
            console.log($handOne);
            console.log($handTwo);


          } else if ($handOne[1] == $handTwo[1]) {

          }

        })
        //compare those
        //do the push
      };


        //move compared cards to new arrays (higher value goes to the discard of the person with the winning card)

        //when hands are empty pull the won piles back to the hands
    };

//turns
    var onClickShowCardOne = function() {
      //console.log("hi");
      //on click show card
      // var playerOneHand = $("#player-one");
      // var $cardOneImg = $("<img>").attr("src", $handOne[0].src);
      // //console.log($cardOneImg);
      // $cardOneImg.appendTo(playerOneHand);
      var handOneImg = $("#handOneImg");
      handOneImg.attr("src", $handOne[0].src);


    };



    // go to other player and repeat above

    var onClickShowCardTwo = function() {
      //console.log("hi");
      //on click show card
      // var playerTwoHand = $("#player-two");
      // var $cardTwoImg = $("<img>").attr("src", $handTwo[0].src);
      // //console.log($cardTwoImg);
      // $cardTwoImg.appendTo(playerTwoHand);

      var handTwoImg = $("#handTwoImg");
      handTwoImg.attr("src", $handTwo[0].src);

      compareCards();

      //}
        //compare cards
          //if players card is more than other players card
          //if tie make pick more cards
            //move compared cards to new arrays (higher value goes to the discard of the person with the winning card)
    };


//check win for rounds

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
