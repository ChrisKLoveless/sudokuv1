import { numArrayMatch, numMatch } from '../src/numbers.js';
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

describe("numArrayMatch", () => {
  test('it should take an array of numbers and check for matches', () => {
    let numArray = [1,2,3,2,4,4,5,6,6,7,8,9];
    expect(numArrayMatch(numArray)).toEqual(['2', '4', '6']);
  });
});