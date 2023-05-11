describe('calculateAgeFactor', () => {
  it('returns the correct age factor for a given number', () => {
    expect(calculateAgeFactor(0)).toEqual(0);
    expect(calculateAgeFactor(89.5)).toEqual(8);
    expect(calculateAgeFactor(0.5)).toEqual(0);
    expect(calculateAgeFactor(1)).toEqual(0);
    expect(calculateAgeFactor(59)).toEqual(5);
    expect(calculateAgeFactor(45)).toEqual(4);
    expect(calculateAgeFactor(35)).toEqual(3);
    expect(calculateAgeFactor(20)).toEqual(2);
    expect(calculateAgeFactor(9)).toEqual(0);
  });
});

describe('calculateModal', () => {
  it('returns correct message for result equal to 0', () => {
    expect(calculateModal(0, null)).toEqual('Enter data. If full years are less than 1, enter the number "0" in the column " Age at start of 3rd line TKI (per 10 years)"');
  });

  it('returns correct message for null number', () => {
    expect(calculateModal(10, null)).toEqual('Enter data. If full years are less than 1, enter the number "0" in the column " Age at start of 3rd line TKI (per 10 years)"');
  });

  it('returns correct message for result less than or equal to 10', () => {
    expect(calculateModal(8, 50)).toEqual('low risk of non-achieving CCyR on second-generation TKIs in third line therapy CP');
  });

  it('returns correct message for result greater than 10', () => {
    expect(calculateModal(15, 30)).toEqual('high risk of non-achieving CCyR on second-generation TKIs in third line therapy CP');
  });
});
