export default class Calc {
  constructor(age) {
    this.daysAge = age * 365;
  }

  merc() {
    this.mercAge = Math.floor(this.daysAge / 88);
    return this.mercAge;
  }

  venu() {
    this.venuAge = Math.floor(this.daysAge/226.3)
    return this.venuAge;
  }

}