import Calc from '../src/calc.js';

describe('Calculator', () => {


  let newAge;
  beforeEach(() => {
    newAge = new Calc(30 , 70);
  })

  test('Should receive an input and multiply that by earth days', () => {
    expect(newAge.daysAge).toEqual(10950)

  })

  test('Should return the age submitted into Mercury equivalent', () => {
    newAge.merc();
    expect(newAge.mercAge).toEqual(124);
  })

  test('Should return the age submitted into the Venus, Mars, & Jupiter equivalent', () => {
    newAge.venu();
    newAge.mars();
    newAge.jupi();
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
    expect(newAge.merc()).toEqual("WHOA, you have already lived longer than the life expectancy for Mercury by 41 years.");
  })

  test('If age is greater than expectancy, tell them hom many years over they are on Venus, Mars, & Jupiter', () =>{
    newAge.daysAge = 29200;
    expect(newAge.venu()).toEqual("WHOA, you have already lived longer than the life expectancy for Venus by 41 years.");
    expect(newAge.mars()).toEqual("WHOA, you have already lived longer than the life expectancy for Mars by 41 years.");
    expect(newAge.jupi()).toEqual("WHOA, you have already lived longer than the life expectancy for Jupiter by 41 years.");
  })
})