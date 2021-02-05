export default class Calc {
  constructor(age , expectancy) {
    this.daysAge = age * 365;
    this.daysExp = expectancy *365;
  }

  merc() {
    this.mercAge = Math.floor(this.daysAge / 88);
    this.mercExp = Math.floor(this.daysExp / 88);
    if (this.daysAge > this.daysExp) {
      this.mercDiff = this.mercAge - this.mercExp;
      return `WHOA, you would be ${this.mercAge} on Mercury and have already lived longer than the life expectancy by ${this.mercDiff} years.`;
    } else {
      this.mercDiff = (Math.floor(this.daysExp / 88)) - this.mercAge;
      return `Your age on Mercury would be ${this.mercAge}, and you have ${this.mercDiff} years left to live.`;
    }
  }

  venu() {
    this.venuAge = Math.floor(this.daysAge / 226.3);
    this.venuExp = Math.floor(this.daysExp / 226.3);
    if (this.daysAge > this.daysExp) {
      this.venuDiff = this.venuAge - this.venuExp;
      return `WHOA, you would be ${this.venuAge} on Venus and have already lived longer than the life expectancy by ${this.venuDiff} years.`;
    } else {
      this.venuExp = (Math.floor(this.daysExp / 226.3)) - this.venuAge;
      return `Your age on Venus would be ${this.venuAge}, and you have ${this.venuExp} years left to live.`;
    }
  }

  mars() {
    this.marsAge = Math.floor(this.daysAge / 686.2);
    this.marsExp = Math.floor(this.daysExp / 686.2);
    if (this.daysAge > this.daysExp) {
      this.marsDiff = this.marsAge - this.marsExp;
      return `WHOA, you would be ${this.marsAge} on Mars and have already lived longer than the life expectancy by ${this.marsDiff} years.`;
    } else {
      this.marsExp = (Math.floor(this.daysExp / 686.2)) - this.marsAge;
      return `Your age on Mars would be ${this.marsAge}, and you have ${this.marsExp} years left to live.`;
    }
  }

  jupi() {
    this.jupiAge = Math.floor(this.daysAge / 4328.9);
    this.jupiExp = Math.floor(this.daysExp / 4328.9);
    if (this.daysAge > this.daysExp) {
      this.jupiDiff = this.jupiAge - this.jupiExp;
      return `WHOA, you would be ${this.jupiAge} on Jupiter and have already lived longer than the life expectancy by ${this.jupiDiff} years.`;
    } else {
      this.jupiExp = (Math.floor(this.daysExp / 4328.9)) - this.jupiAge;
      return `Your age on Jupiter would be ${this.jupiAge}, and you have ${this.jupiExp} years left to live.`;
    }
  }
}