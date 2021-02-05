import Calc from '../src/calc.js';

describe('Calculator', () => {


  let newAge;
  beforeEach(() => {
    newAge = new Calc(30);
  })

  test('Should receive an input and multiply that by earth days', () => {
    expect(newAge.daysAge).toEqual(10950)

  })

  test('Should return the age submitted into Mercury equivalent', () => {
    expect(newAge.merc()).toEqual(124);
  })

  test('Should return the age submitted into the Venus equivalent', () => {
    expect(newAge.venu()).toEqual(48);
  })

  test('Should return the age submitted into Mars equivalent', () => {
    expect(newAge.mars()).toEqual(15);
    
  })
  
  test('Should return the age submitted into Jupiter equivalent', () => {
    expect(newAge.jupi()).toEqual(2);
  })
})