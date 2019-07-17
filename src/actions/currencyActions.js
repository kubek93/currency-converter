export const TypeOfCurrency = {
  EUR: 'EUR',
  GPB: 'GPB',
  PLN: 'PLN',
  USD: 'USD'
};

export const addNewCurrency = currencyName => ({
  type: 'ADD_CURRENCY',
  currencyName
});

export const removeCurrency = currencyName => ({
  type: 'REMOVE_CURRENCY',
  currencyName
});
