export default class Calc {
  constructor(age) {
    this.daysAge = age * 365;
  }

  merc() {
    this.mercAge = Math.floor(this.daysAge / 88);
    return this.mercAge;
  }


}