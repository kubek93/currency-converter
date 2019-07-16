export const TypeOfCurrency = {
  EUR: "EUR",
  GPB: "GPB",
  PLN: "PLN",
  USD: "USD"
};

export const addNewCurrency = currencyName => {
  return {
    type: "ADD_CURRENCY",
    currencyName
  };
};

export const removeCurrency = currencyName => {
  return {
    type: "REMOVE_CURRENCY",
    currencyName
  };
};
