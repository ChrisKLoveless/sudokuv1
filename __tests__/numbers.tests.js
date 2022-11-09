import { numMatch } from '../src/numbers.js';
import { addTen } from '../src/numbers.js';

describe("noMatch", () => {
  test('it should check if two numbers are the same', () => {
    let check = numMatch(3, 3);
    expect(check).toEqual(true);
  });
});

describe("addTen", () => {
  test('should tell if numbers add up to 10', () => {
    let add = addTen(6,4);
    expect(add).toEqual(true);
  });
});