class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    } else {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        let card1 = this.cards[i];
        let card2 = this.cards[j];
        this.cards[j] = card1;
        this.cards[i] = card2;
      }
      return this.cards;
    }
  }

  checkIfPair() {
    console.log("picked cards is", this.pickedCards);
    this.pairsClicked += 1;
    if (
      this.pickedCards[0].dataset.cardName ===
      this.pickedCards[1].dataset.cardName
    ) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length) {
      return true;
    } else {
      return false;
    }
  }
}
