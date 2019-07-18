export const changePocketExchangeFrom = pocketCurrency => ({
  type: 'CHANGE_POCKET_EXCHANGE_FROM',
  pocketCurrency
});

export const changePocketExchangeTo = pocketCurrency => ({
  type: 'CHANGE_POCKET_EXCHANGE_TO',
  pocketCurrency
});

export const changePocketExchangeValueFrom = (pocketValue, currencies) => ({
  type: 'CHANGE_POCKET_EXCHANGE_VALUE_FROM',
  pocketValue,
  currencies
});

export const changePocketExchangeValueTo = (pocketValue, currencies) => ({
  type: 'CHANGE_POCKET_EXCHANGE_VALUE_TO',
  pocketValue,
  currencies
});

export const exchangeMoney = pocketExchange => ({
  type: 'EXCHANGE_MONEY',
  pocketExchange
});

export const replacePocketsPosition = () => ({
  type: 'REPLACE_POCKETS_POSITION'
});
