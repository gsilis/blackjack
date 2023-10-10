export class Card {
  constructor(sign, face, value) {
    this.sign = sign;
    this.face = face;
    this.value = parseInt(value);
  }

  display() {
    return `${this.face}${this.sign}`;
  }

  valueOf() {
    return this.value;
  }
}