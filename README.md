# Simple Blackjack

Simple version of the game, not quite done yet. No UI, JS console only.

## Installation

This uses [vite](https://vitejs.dev/) to bootstrap and run.

1. Pull down the repo.
1. Run `npm install`.
1. Run `npm start dev`.
1. Visit `http://localhost:5173` in your browser.

## WIP Running the Game

In console, store the result of `setupGame()` into a variable -- `game = setupGame(1)`. The result is an instance of the `game/game.js` object.
The argument to `setupGame` is the number of decks to add to the shoe.
Deal a hand with `game.deal()`, the result is the value of the hand.
On the current hand, hit by running `game.hit()`, the result will again be the value of the hand.
At the moment there is nothing preventing you from hitting on a hand that is bust.
To deal a new hand, run `game.deal()` again.
Once the deck has run out, `hit()` and `deal()` will return the string `'Game Over'`
