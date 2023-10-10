import { Card } from "./card";

const cards = {
  A: 11,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
}
const memoCards = [
  '♣', '♠', '♥', '♦'
].reduce((acc, sign) => {
  return [
    ...acc,
    ...Object.keys(cards).map((key) => new Card(sign, key, cards[key]))
  ];
}, []);

export class Deck {
  constructor() {
    this.cards = [];
  }

  populateWith(numberOfDecks) {
    this.cards = [];

    for (let i = 0; i < numberOfDecks; i++) {
      this.cards = [
        ...this.cards,
        ...memoCards,
      ];
    }
  }

  deal(count) {
    const result = [];
    const max = Math.min(count, this.cards.length);

    for (var i = max; i > 0; i--) {
      const size = this.cards.length - 1;
      const key = Math.round(Math.random() * size);

      result.push(this.cards.splice(key, 1)[0]);
    }

    return result;
  }
}