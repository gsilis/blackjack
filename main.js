import { Deck } from "./game/deck";
import { Hand } from "./game/hand";
import { Game } from "./game/game";

window.setupGame = (decks) => {
  const deck = new Deck();
  deck.populateWith(decks);
  const game = new Game(deck);
  return game;
};