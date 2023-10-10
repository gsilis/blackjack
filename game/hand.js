export class Hand {
  constructor() {
    this.cards = [];
  }

  addCards(...cards) {
    this.cards = [
      ...this.cards,
      ...cards,
    ];
  }

  valueOf() {
    return this.cards.reduce((acc, card) => {
      return acc + card.valueOf();
    }, 0);
  }
}