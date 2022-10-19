// Build a game called Twenty-One.
// Start with 52 Deck (2 - 10), jack, king, queen and Ace
// A player and a dealer
// Each are randomly dealt two cards
// Player always go first, two choices: Hit or Stay
// When the player stays, the dealer whethr hit or stay (must be above 17)

// Data structure
// Object with each card's value
// Array for cards in hand
// Algo
// Initialize deck
// Deal cards to player
// - Repeat until bust or stay
// If player bust dealer wins
// Dealer turn: hit or stay
// - repeat until total >= 17
// if dealer busts. pleayer wins
// compare card and declare winner
let readline = require('readline-sync');
const BUSTED_SCORE = 21;
const DEALER_MIN_SCORE = 17;

function prompt(input) {
  console.log(`=> ${input}`);
}

let deck = {2: 2, 3: 3, 4: 4,
  5: 5, 6: 6, 7: 7, 8: 8,
  9: 9, 10: 10, jack: 10,
  queen: 10, king: 10, ace: 11,
};

let playerCards = [];
let dealerCards = [];

function drawCard(cardHand) {
  let randomIndex = Math.floor(Math.random() * Object.values(deck).length);
  cardHand.push(Object.keys(deck)[randomIndex]);
  return cardHand;
}

function calculatingAce(cards) {
  let sumWithoutAce = cards.filter(card => card !== 'ace').reduce((currentValue, previousValue) =>
    currentValue + previousValue, 0);

  if (sumWithoutAce <= 10) {
    return 11;
  } else {
    return 1;
  }
}

function calcuateTotalPoints(cards) {
  let sum = 0;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] === 'ace') {
      sum += calculatingAce(cards);
    } else {
      sum += deck[cards[i]];
    }
  }
  return Number(sum);
}

function displayWinner(dealerScore, playerScore) {
  if (Number(playerScore) > Number(dealerScore)) {
    return 'Player Wins!'
  } else if (Number(playerScore) < Number(dealerScore)) {
    return 'Dealer Wins!'
  } else {
    return "It's a tie!"
  }
}

// Initial Cards, 2 cards in each hand
drawCard(playerCards);
drawCard(playerCards);
drawCard(dealerCards);
drawCard(dealerCards);

// player's turn
while (true) {
  console.clear()

  while (true) {
    prompt(`Your cards: ${playerCards.join(', ')}`);
    prompt(`The dealer's cards: ${dealerCards[0] + ', Unknown'}`);
    prompt('hit or stay?');
    let answer = readline.question();
    if (answer === 'hit') drawCard(playerCards);
    if ((answer === 'stay') || (calcuateTotalPoints(playerCards) > BUSTED_SCORE)) break;
  }

  if (calcuateTotalPoints(playerCards) > BUSTED_SCORE) {
    prompt('You Busted! Dealer won!');
    break;
  } else {
    prompt('You chose to stay!')
  }

  // dealer's turn
  while (true) {
    let dealerScore = calcuateTotalPoints(dealerCards);

    if (dealerScore < 17) {
      drawCard(dealerCards);
    }  

    if (dealerScore > BUSTED_SCORE) {
      prompt(`The dealer has exceeded ${BUSTED_SCORE} and busted`);
      break;
    }

    // dealer don't get to hit I guess

    if (dealerScore >= 17) break;
  }

  if (calcuateTotalPoints(dealerCards) > BUSTED_SCORE) {
    prompt('Dealer Busted! Player won!');
    break;
  }

  let playerScore = calcuateTotalPoints(playerCards);
  let dealerScore = calcuateTotalPoints(dealerCards);

  prompt(displayWinner(playerScore, dealerScore));

  console.log(' ');
  prompt(`Your Hand: (${playerCards.join(', ')}) scoring: ${playerScore}`);
  prompt(`Dealer Hand: (${dealerCards.join(', ')}) scoring: ${dealerScore}`);
}