//console.log("CONNECTED!")

//array of all the cards in a standard deck
var starterDeck = [
{name: "A", suit: "hearts", value: 1, src: "images/ace_of_hearts.png"},
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


//grab the first div that represents the deck
var deck = $("#first-deck");

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

//player scores
pOneScore = 0;
pTwoScore = 0;

//grab board
var board = $("#board");
//grab the divs that represent the hands
var $playerOne = $("#player-one");
var $playerTwo = $("#player-two");

//grab buttons
var $reshuffle = $("#reshuffle");
var $restart = $("#restart");

//grab the paragraph areas that will be changed to prompt turns and tell status
var turnPhrase = $("#turn");
var $status = $("#status");
var $playerOneScore = $("#playerOneScore");
var $playerTwoScore = $("#playerTwoScore");



//start jquery
$(function() {

  // handlers

  var fisherYatesShuffle = function(array) {
    var n = array.length
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

    fisherYatesShuffle(starterDeck);
    cards = starterDeck;
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
      $status.text("Player One Won the Hand!");
      //console.log("p1 before move" + playerOneWonCards.length);
      //gets the tie cards since tie cards are being taken out of play and need to go to the next draw winner
      if (tieCards.length > 0) {
        //console.log("player one won cards length: " + playerOneWonCards.length);
        for (var i = 0; i < tieCards.length; i++) {
          playerOneWonCards.push(tieCards[i]);
          //console.log("after getting the tie cards player one has this many cards: " + playerOneWonCards.length);
        };
        tieCards = [];
      };

      //if player one card is less than player two card
    } else if ($handOne[0].value < $handTwo[0].value) {
      playerTwoWonCards.push($handOne[0]);
      $handOne.shift();
      playerTwoWonCards.push($handTwo[0]);
      $handTwo.shift();
      $status.text("Player Two Won the Hand!");
      //console.log("p2 before move" + playerTwoWonCards.length);

      if (tieCards.length > 0) {
        //console.log("player2 won cards length: " + playerTwoWonCards.length);
        for (var i = 0; i < tieCards.length; i++) {
          playerTwoWonCards.push(tieCards[i]);
          //console.log("after getting the tie cards player two has this many cards: " + playerTwoWonCards.length);
        };
        tieCards = [];
      };

      //if there is a tie make pick more cards
    } else if ($handOne[0].value === $handTwo[0].value) {
      $status.text("There's been a tie! WAR! Next hand wins these cards!");
      tieCards.push($handOne[0]);
      $handOne.shift();
      tieCards.push($handTwo[0]);
      $handTwo.shift();
      //console.log("there are this many tiecards in the tie hand " + tieCards.length);
    }
  };
  //};


  //turns
  var onClickShowCardOne = function() {
    if ($handOne.length === 0) {
      //replenishHandOne();
      roundWinner();
    };
    var $handOneImg = $("#handOneImg");
    //$playerOne.css("background-color", "ivory").css("background-image", "");
    //console.log($handOne);
    //console.log("=============")
    //console.log($handOne[0].value + "this is what is in the array for hand one");
    $handOneImg.attr("src", $handOne[0].src);
    turnPhrase.text("Player 2 Draw!");
  };

  // go to other player and repeat above
  var onClickShowCardTwo = function() {
    if ($handTwo.length === 0) {
      //replenishHandTwo();
      roundWinner();
    };
    var $handTwoImg = $("#handTwoImg");
    //$playerTwo.css("background-color", "ivory").css("background-image", "");
    $handTwoImg.attr("src", $handTwo[0].src);
    turnPhrase.text("Player 1 Draw!");
    compareCards();
  };

  //check win for rounds
  var roundWinner = function() {
    replenishHandOne();
    replenishHandTwo();
    //if ($handOne.length === 0 && $handTwo.length === 0) {
    if ($handOne.length > $handTwo.length) {
      pOneScore++
      $status.text("Player 1 Wins the Round!");
      $playerOneScore.text("Player One Score: " + pOneScore);
      $playerTwoScore.text("Player Two Score: " + pTwoScore);

    } else if ($handOne.length < $handTwo.length) {
      pTwoScore++
      $status.text("Player Two Wins the Round!");
      $playerOneScore.text("Player One Score: " + pOneScore);
      $playerTwoScore.text("Player Two Score: " + pTwoScore);

    } else if ($handOne.length === $handTwo.length) {
      $status.text("Tied Round! Keep Playing!");
      $playerOneScore.text("Player One Score: " + pOneScore);
      $playerTwoScore.text("Player Two Score: " + pTwoScore);

    };
    console.log($handOne.length);
    console.log($handTwo.length);
    console.log(tieCards.length);
    console.log(playerOneWonCards.length);
    console.log(playerTwoWonCards.length);
    gameWin();
  };

  //fills the empty handone with cards from the player one won cards and empties that won cards array
  var replenishHandOne = function() {
    //handone = player on won
    for (var i = 0; i < playerOneWonCards.length; i++) {
      $handOne.push(playerOneWonCards[i]);
    };
    playerOneWonCards = [];
  };


  //fills the empty handtwo with cards from the player two won cards and empties that won cards array
  var replenishHandTwo = function() {
    for (var i = 0; i < playerTwoWonCards.length; i++) {
      $handTwo.push(playerTwoWonCards[i]);
    };
    playerTwoWonCards = [];
  };

  //check win for game
  var gameWin = function() {
    if ($handOne.length === 52) {
      //console.log("player one won the game!");
      $status.text("Player One Won the Game!").css("font-weight", "bold").css("color", "ivory");
    } else if ($handTwo.length === 52) {
      //console.log("player two won the game!");
      $status.text("Player Two Won the Game!").css("font-weight", "bold").css("color", "ivory");
    }
  };


  //restart game
  var restart = function() {
    location.reload();
  };

  //reshuffle
  //allows players to shuffle thier hands
  var reshuffle = function() {
    console.log("hands shuffled!");
    $handOne = fisherYatesShuffle($handOne);
    //console.log($handOne);
    $handTwo = fisherYatesShuffle($handTwo);
    //console.log($handTwo);
  };


  //listeners

  deck.on("click", onClickSplitDeck);
  $playerOne.on("click", onClickShowCardOne);
  $playerTwo.on("click", onClickShowCardTwo);

  $reshuffle.on("click", reshuffle);
  $restart.on("click", restart);


});
