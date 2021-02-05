export default class Calc {
  constructor(age) {
    this.daysAge = age * 365;
  }

  merc() {
    this.mercAge = Math.floor(this.daysAge / 88);
    return this.mercAge;
  }

  venu() {
    this.venuAge = Math.floor(this.daysAge/226.3);
    return this.venuAge;
  }

  mars() {
    this.marsAge = Math.floor(this.daysAge / 686.2);
    return this.marsAge;
  }

  jupi() {
    this.jupiAge = Math.floor(this.daysAge / 4328.9);
    return this.jupiAge;
  }
}