export const transformSelectOptionsBasedOnCurrencies = currenciesArray => {
  return currenciesArray.map(currencySymbol => ({
    value: currencySymbol,
    label: currencySymbol
  }));
};
