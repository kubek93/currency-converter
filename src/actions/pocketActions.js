import { pocketActionsTypes as actions } from '../utils/constants';

export const changePocketExchangeFrom = pocketCurrency => ({
  type: actions.changePocketExchangeFrom,
  pocketCurrency
});

export const changePocketExchangeTo = pocketCurrency => ({
  type: actions.changePocketExchangeTo,
  pocketCurrency
});

export const changePocketExchangeValueFrom = (pocketValue, currencies) => ({
  type: actions.changePocketExchangeValueFrom,
  pocketValue,
  currencies
});

export const changePocketExchangeValueTo = (pocketValue, currencies) => ({
  type: actions.changePocketExchangeValueTo,
  pocketValue,
  currencies
});

export const exchangeMoney = pocketExchange => ({
  type: actions.exchangeMoney,
  pocketExchange
});

export const replacePocketsPosition = () => ({
  type: actions.replacePocketsPosition
});
