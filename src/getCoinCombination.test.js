'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return only pennies when input is less than 5', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return correct combination with nickels', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it('should return correct combination with dimes', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return correct combination with quarters', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('should return correct combination for larger amounts', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  it('should handle random mid-range values', () => {
    expect(getCoinCombination(73)).toEqual([3, 0, 2, 2]);
    expect(getCoinCombination(87)).toEqual([2, 0, 1, 3]);
  });
});
