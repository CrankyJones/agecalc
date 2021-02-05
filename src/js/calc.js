export class Calc {
  constructor(age, expectancy) {
    this.daysAge = age * 365;
    this.daysExp = expectancy * 365;
  }

  ageConv() {
    this.Age = Math.floor(this.daysAge / this.conv);
    this.Exp = Math.floor(this.daysExp / this.conv);
    if (this.daysAge > this.daysExp) {
      this.Diff = this.Age - this.Exp;
      return `WHOA, you would be ${this.Age} on ${this.constructor.name} and have already lived longer than the life expectancy by ${this.Diff} year(s).`;
    } else {
      this.Diff = Math.floor(this.Exp - this.Age);
      return `Your age on ${this.constructor.name} would be ${this.Age}, and you have ${this.Diff} year(s) left to live.`;
    };
  };
};

export class Mercury extends Calc {
  constructor(age, expectancy) {
    super(age, expectancy);
    this.conv = 88;
  }
}
export class Venus extends Calc {
  constructor(age, expectancy) {
    super(age, expectancy);
    this.conv = 226.3;
  }
}
export class Mars extends Calc {
  constructor(age, expectancy) {
    super(age, expectancy);
    this.conv = 686.2;
  }
}
export class Jupiter extends Calc {
  constructor(age, expectancy) {
    super(age, expectancy);
    this.conv = 4328.9;
  }
}
