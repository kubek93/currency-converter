import {
  transformSelectOptionsBasedOnCurrencies,
  transformMoney,
  transformToCurrencySymbol,
  exchangeFromTo
} from '../transforms.js';

describe('Tests for transformMoney function', () => {
  it('Should return empty string for comma', () => {
    const passingValues = ',';
    const expectResult = transformMoney(passingValues);
    const toEqualResult = '';
    expect(expectResult).toEqual(toEqualResult);
  });

  it('Should change comma to dot for one digit with comma', () => {
    const passingValues = '1,';
    const expectResult = transformMoney(passingValues);
    const toEqualResult = '1.';
    expect(expectResult).toEqual(toEqualResult);
  });

  it('Should return the same string for one position after dot', () => {
    const passingValues = '1.0';
    const expectResult = transformMoney(passingValues);
    const toEqualResult = '1.0';
    expect(expectResult).toEqual(toEqualResult);
  });

  it('Should return the same string for two positions after dot', () => {
    const passingValues = '1.00';
    const expectResult = transformMoney(passingValues);
    const toEqualResult = '1.00';
    expect(expectResult).toEqual(toEqualResult);
  });

  it('Should remove last digit for three positions after dot', () => {
    const passingValues = '1.000';
    const expectResult = transformMoney(passingValues, '1.00');
    const toEqualResult = '1.00';
    expect(expectResult).toEqual(toEqualResult);
  });

  it('Should remove last digit for integer numbers above 13 digits', () => {
    const passingValues = '1000000000000';
    const expectResult = transformMoney(passingValues, '100000000000');
    const toEqualResult = '100000000000';
    expect(expectResult).toEqual(toEqualResult);
  });

  it('Should remove last digit for decimal numbers above 13 digits', () => {
    const passingValues = '1000000000000.00';
    const expectResult = transformMoney(passingValues, '100000000000.00');
    const toEqualResult = '100000000000.00';
    expect(expectResult).toEqual(toEqualResult);
  });
});

describe('Tests for transformSelectOptionsBasedOnCurrencies function', () => {
  it("Should return object's array with value and label keys", () => {
    const passingValues = ['EUR', 'USD'];
    const expectResult = transformSelectOptionsBasedOnCurrencies(passingValues);
    const toEqualResult = [{ value: 'EUR', label: 'EUR' }, { value: 'USD', label: 'USD' }];
    expect(expectResult).toEqual(toEqualResult);
  });
});

describe('Tests for transformToCurrencySymbol function', () => {
  it('Should return Euro currency symbol', () => {
    const passingValues = 'EUR';
    const expectResult = transformToCurrencySymbol(passingValues);
    const toEqualResult = '€';
    expect(expectResult).toEqual(toEqualResult);
  });

  it('Should return Polish Zloty currency symbol', () => {
    const passingValues = 'PLN';
    const expectResult = transformToCurrencySymbol(passingValues);
    const toEqualResult = 'zł';
    expect(expectResult).toEqual(toEqualResult);
  });

  it('Should return US Dollar currency symbol', () => {
    const passingValues = 'USD';
    const expectResult = transformToCurrencySymbol(passingValues);
    const toEqualResult = '$';
    expect(expectResult).toEqual(toEqualResult);
  });
});

describe('Tests for exchangeFromTo function', () => {
  const currencies = {
    PLN: 4.2555,
    USD: 1.1223,
    EUR: 1
  };

  it('Should return correct value for exchange PLN to USD', () => {
    const inputValue = '100';
    const currencyFrom = 'PLN';
    const currencyTo = 'USD';
    const expectResult = exchangeFromTo(inputValue, currencies, currencyFrom, currencyTo);
    const toEqualResult = '26.37';
    expect(expectResult).toEqual(toEqualResult);
  });

  it('Should return correct value for exchange USD to PLN', () => {
    const inputValue = '100';
    const currencyFrom = 'USD';
    const currencyTo = 'PLN';
    const expectResult = exchangeFromTo(inputValue, currencies, currencyFrom, currencyTo);
    const toEqualResult = '379.18';
    expect(expectResult).toEqual(toEqualResult);
  });

  it('Should return empty value for money equal zero', () => {
    const inputValue = '0.00';
    const currencyFrom = 'USD';
    const currencyTo = 'PLN';
    const expectResult = exchangeFromTo(inputValue, currencies, currencyFrom, currencyTo);
    const toEqualResult = '';
    expect(expectResult).toEqual(toEqualResult);
  });
});
