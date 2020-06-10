// require('./index')

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    this.cards.forEach((element, i) => {
      let cardShuffled = Math.floor(Math.random() * this.cards.length);
      if (i != cardShuffled) {
        let shuffleCards = element;
        element = this.cards[cardShuffled];
        this.cards[cardShuffled] = shuffleCards;
      }
    });
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.cards.length / 2 === this.pairsGuessed) {
      return true;
    } else {
      return false;
    }
  }
}

