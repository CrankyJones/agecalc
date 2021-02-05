export default class Calc {
  constructor(age , expectancy) {
    this.daysAge = age * 365;
    this.daysExp = expectancy *365;
  }

  merc() {
    this.mercAge = Math.floor(this.daysAge / 88);
    this.mercExp = (Math.floor(this.daysExp / 88)) - this.mercAge;
    return `Your age on Mercury would be ${this.mercAge}, and you have ${this.mercExp} years left to live.`;
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