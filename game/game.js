import { GameState } from '../constants/game-state';
import { Hand } from './hand';

export class Game {
  constructor(deck) {
    this.deck = deck;
    this.state = GameState.RUNNING;
    this.hands = [];
  }

  deal() {
    if (this.state != GameState.RUNNING) {
      return 'Game Over';
    }
  
    const cards = this.deck.deal(2);

    if (cards.length < 2) {
      this.state = GameState.OVER;
      return 'Game Over';
    }

    const hand = new Hand();
    hand.addCards(...cards);
    this.hands.push(hand);

    return hand.valueOf();
  }

  hit() {
    if (this.state != GameState.RUNNING) {
      return 'Game Over';
    }

    const card = this.deck.deal(1);

    if (card.length < 1) {
      this.state = GameState.OVER;
      return 'Game Over';
    }

    const hand = this.hands[this.hands.length - 1];
    hand.addCards(...card);
    
    return hand.valueOf();
  }
}