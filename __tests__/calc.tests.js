import { Calc, Mercury, Venus, Mars, Jupiter } from '../src/js/calc.js';

describe('Calculator', () => {
  
  beforeEach(() => {
    let newMerc = new Mercury(30 , 70);
    let newVenus = new Venus(30, 70);
    let newMars = new Mars(30, 70);
    let newJup = new Jupiter(30, 70)
  })

  test('Should receive an input and multiply that by earth days', () => {
    expect(newMerc.daysAge).toEqual(10950)

  })

  test('Should return the age submitted into Mercury equivalent', () => {
    newMerc.merc();
    console.log(newMerc);
    expect(newMerc.Age).toEqual(124);
  })

  test('Should return the age submitted into the Venus, Mars, & Jupiter equivalent', () => {
    newVenus.merc();
    newMars.merc();
    newJup.merc();
    expect(newAge.venuAge).toEqual(48);
    expect(newAge.marsAge).toEqual(15);
    expect(newAge.jupiAge).toEqual(2);
  })

  test('Should take age and life expectancy and convert into Mercury equivalent', () => {
    expect(newAge.merc()).toEqual("Your age on Mercury would be 124, and you have 166 years left to live.")
  })

  test('Should take age and life expectancy and convert into Venus, Mars, & Jupiter equivalent', () => {
    expect(newAge.venu()).toEqual("Your age on Venus would be 48, and you have 64 years left to live.")
    expect(newAge.mars()).toEqual("Your age on Mars would be 15, and you have 22 years left to live.")
    expect(newAge.jupi()).toEqual("Your age on Jupiter would be 2, and you have 3 years left to live.")
  })


  test('If age is greater than expectancy, tell them hom many years over they are on Mercury', () =>{
    newAge.daysAge = 29200;
    expect(newAge.merc()).toEqual("WHOA, you would be 331 on Mercury and have already lived longer than the life expectancy by 41 years.");
  })

  test('If age is greater than expectancy, tell them hom many years over they are on Venus, Mars, & Jupiter', () =>{
    newAge.daysAge = 29200;
    expect(newAge.venu()).toEqual("WHOA, you would be 129 on Venus and have already lived longer than the life expectancy by 17 years.");
    expect(newAge.mars()).toEqual("WHOA, you would be 42 on Mars and have already lived longer than the life expectancy by 5 years.");
    expect(newAge.jupi()).toEqual("WHOA, you would be 6 on Jupiter and have already lived longer than the life expectancy by 1 years.");
  })
})