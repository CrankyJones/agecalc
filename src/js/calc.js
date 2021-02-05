export class Calc {
  constructor(age , expectancy) {
    this.daysAge = age * 365;
    this.daysExp = expectancy *365;
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

  // venu() {
  //   this.venuAge = Math.floor(this.daysAge / 226.3);
  //   this.venuExp = Math.floor(this.daysExp / 226.3);
  //   if (this.daysAge > this.daysExp) {
  //     this.venuDiff = this.venuAge - this.venuExp;
  //     return `WHOA, you would be ${this.venuAge} on Venus and have already lived longer than the life expectancy by ${this.venuDiff} years.`;
  //   } else {
  //     this.venuExp = (Math.floor(this.daysExp / 226.3)) - this.venuAge;
  //     return `Your age on Venus would be ${this.venuAge}, and you have ${this.venuExp} years left to live.`;
  //   }
  // };

  // mars() {
  //   this.marsAge = Math.floor(this.daysAge / 686.2);
  //   this.marsExp = Math.floor(this.daysExp / 686.2);
  //   if (this.daysAge > this.daysExp) {
  //     this.marsDiff = this.marsAge - this.marsExp;
  //     return `WHOA, you would be ${this.marsAge} on Mars and have already lived longer than the life expectancy by ${this.marsDiff} years.`;
  //   } else {
  //     this.marsExp = (Math.floor(this.daysExp / 686.2)) - this.marsAge;
  //     return `Your age on Mars would be ${this.marsAge}, and you have ${this.marsExp} years left to live.`;
  //   }
  // }

  // jupi() {
  //   this.jupiAge = Math.floor(this.daysAge / 4328.9);
  //   this.jupiExp = Math.floor(this.daysExp / 4328.9);
  //   if (this.daysAge > this.daysExp) {
  //     this.jupiDiff = this.jupiAge - this.jupiExp;
  //     return `WHOA, you would be ${this.jupiAge} on Jupiter and have already lived longer than the life expectancy by ${this.jupiDiff} years.`;
  //   } else {
  //     this.jupiExp = (Math.floor(this.daysExp / 4328.9)) - this.jupiAge;
  //     return `Your age on Jupiter would be ${this.jupiAge}, and you have ${this.jupiExp} years left to live.`;
  //   }
  // }
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
