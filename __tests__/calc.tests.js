import { Calc, Mercury, Venus, Mars, Jupiter } from '../src/js/calc.js';

describe('Calculator', () => {

  let newMerc;
  let newVenus;
  let newMars;
  let newJup;
  beforeEach(() => {
    newMerc = new Mercury(30, 70);
    newVenus = new Venus(30, 70);
    newMars = new Mars(30, 70);
    newJup = new Jupiter(30, 70)
  })

  test('Should receive an input and multiply that by earth days', () => {
    expect(newMerc.daysAge).toEqual(10950)

  })

  test('Should return the age submitted into Mercury equivalent', () => {
    newMerc.ageConv();
    console.log(newMerc);
    expect(newMerc.Age).toEqual(124);
  })

  test('Should return the age submitted into the Venus, Mars, & Jupiter equivalent', () => {
    newVenus.ageConv();
    newMars.ageConv();
    newJup.ageConv();
    expect(newVenus.Age).toEqual(48);
    expect(newMars.Age).toEqual(15);
    expect(newJup.Age).toEqual(2);
  })

  test('Should take age and life expectancy and convert into Mercury equivalent', () => {
    expect(newMerc.ageConv()).toEqual("Your age on Mercury would be 124, and you have 166 year(s) left to live.")
  })

  test('Should take age and life expectancy and convert into Venus, Mars, & Jupiter equivalent', () => {
    expect(newVenus.ageConv()).toEqual("Your age on Venus would be 48, and you have 64 year(s) left to live.")
    expect(newMars.ageConv()).toEqual("Your age on Mars would be 15, and you have 22 year(s) left to live.")
    expect(newJup.ageConv()).toEqual("Your age on Jupiter would be 2, and you have 3 year(s) left to live.")
  })


  test('If age is greater than expectancy, tell them hom many years over they are on Mercury', () => {
    newMerc.daysAge = 29200;
    expect(newMerc.ageConv()).toEqual("WHOA, you would be 331 on Mercury and have already lived longer than the life expectancy by 41 year(s).");
  })

  test('If age is greater than expectancy, tell them hom many years over they are on Venus, Mars, & Jupiter', () => {
    newVenus.daysAge = 29200;
    newMars.daysAge = 29200;
    newJup.daysAge = 29200;
    expect(newVenus.ageConv()).toEqual("WHOA, you would be 129 on Venus and have already lived longer than the life expectancy by 17 year(s).");
    expect(newMars.ageConv()).toEqual("WHOA, you would be 42 on Mars and have already lived longer than the life expectancy by 5 year(s).");
    expect(newJup.ageConv()).toEqual("WHOA, you would be 6 on Jupiter and have already lived longer than the life expectancy by 1 year(s).");
  })
})