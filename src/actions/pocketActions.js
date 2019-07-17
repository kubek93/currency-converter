export const changecurrentUserPocket = pocketCurrency => ({
  type: "CHANGE_CURRENT_POCKET",
  pocketCurrency
});

export const addNewPocket = pocketCurrency => ({
  type: "ADD_POCKET",
  pocketCurrency
});

export const removePocket = pocketCurrency => ({
  type: "REMOVE_POCKET",
  pocketCurrency
});

export const changePocketExchangeFrom = pocketCurrency => ({
  type: "CHANGE_POCKET_EXCHANGE_FROM",
  pocketCurrency
});

export const changePocketExchangeTo = pocketCurrency => ({
  type: "CHANGE_POCKET_EXCHANGE_TO",
  pocketCurrency
});

export const changePocketExchangeValueFrom = (pocketValue, currencies) => ({
  type: "CHANGE_POCKET_EXCHANGE_VALUE_FROM",
  pocketValue,
  currencies
});

export const changePocketExchangeValueTo = (pocketValue, currencies) => ({
  type: "CHANGE_POCKET_EXCHANGE_VALUE_TO",
  pocketValue,
  currencies
});
