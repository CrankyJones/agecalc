import { TestScheduler } from 'jest';
import Calc from '../src/calc.js';

describe('Calculator', () => {

  test ('Should receive an input and multiply that by earth days', () => {
    const newAge = new Calc(30);
    expect(newAge.daysAge).toEqual(10950)

  })

  test('Should return the age submitted into Mercury equivalent', () => {
    const newAge = new Calc(30);
    expect(newAge.merc()).toEqual(128);
  })


})