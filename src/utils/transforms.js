import map from 'lodash/map';
import { currencySymbol } from './constants';

export const transformSelectOptionsBasedOnCurrencies = currenciesArray => {
  return currenciesArray.map(currencySymbol => ({
    value: currencySymbol,
    label: currencySymbol
  }));
};

export const transformMoney = (inputValue = '', oldValue = '') => {
  console.log('oldValue', oldValue);
  if (['', ',', '.'].includes(inputValue)) {
    return '';
  }

  const priceAfterReplaceComma = inputValue.toString().replace(/,/g, '.');
  const regex = /^\d{0,12}(?:[.]\d{0,2}|$)$/;

  console.log(priceAfterReplaceComma, regex.test(priceAfterReplaceComma));

  if (regex.test(priceAfterReplaceComma)) {
    const afterSplit = priceAfterReplaceComma.split('.');

    if (priceAfterReplaceComma.includes('.') && afterSplit[0].length > 12) {
      return afterSplit[0].substring(0, afterSplit[0].length - 1) + '.' + afterSplit[1];
    }

    return priceAfterReplaceComma;
  }

  return oldValue;
};

export const transformToCurrencySymbol = currencyName => {
  return currencySymbol[currencyName];
};

export const exchangeFromTo = (inputValue, currencies, currencyFrom, currencyTo, oldValue) => {
  const summaryNumber = (transformMoney(inputValue, oldValue) * currencies[currencyTo]) / currencies[currencyFrom];
  const numberAfterPositionFix = Number.parseFloat(summaryNumber).toFixed(2);

  if (numberAfterPositionFix === '0.00') {
    return '';
  }

  return numberAfterPositionFix;
};

export const parseUrlParams = (params = null) => {
  console.log('urlParamsWithKey', params);
  if (params) {
    let paramsUrlTextParsed = '?';

    map(params, (value, key) => {
      paramsUrlTextParsed += `${key}=${value}`;
    });

    return paramsUrlTextParsed;
  }

  return '';
};
