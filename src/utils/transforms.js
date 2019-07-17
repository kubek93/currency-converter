import { CURRENCY_SYMBOL } from "./constants";

export const transformSelectOptionsBasedOnCurrencies = currenciesArray => {
  return currenciesArray.map(currencySymbol => ({
    value: currencySymbol,
    label: currencySymbol
  }));
};

export const transformMoney = inputValue => {
  const regex = /^\d+(?:[.]\d{0,2}|$)$/;
  let priceAfterReplaceComma = inputValue.toString().replace(/,/g, ".");
  priceAfterReplaceComma = priceAfterReplaceComma.replace(",", ".");

  if (regex.test(priceAfterReplaceComma)) {
    return priceAfterReplaceComma;
  }

  return inputValue.substring(0, inputValue.length - 1);
};

export const transformCurrencySymbol = currencyName => {
  return CURRENCY_SYMBOL[currencyName];
};

export const exchangeFromTo = (
  inputValue,
  currencies,
  currencyFrom,
  currencyTo
) => {
  const summaryNumber =
    (transformMoney(inputValue) * currencies[currencyTo]) /
    currencies[currencyFrom];
  const numberAfterPositionFix = Number.parseFloat(summaryNumber).toFixed(2);

  if (numberAfterPositionFix === "0.00") {
    return "";
  }

  return numberAfterPositionFix;
};
