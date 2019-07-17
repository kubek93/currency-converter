export const changecurrentUserPocket = pocketCurrency => {
  return {
    type: "CHANGE_CURRENT_POCKET",
    pocketCurrency
  };
};

export const addNewPocket = pocketCurrency => {
  return {
    type: "ADD_POCKET",
    pocketCurrency
  };
};

export const removePocket = pocketCurrency => {
  return {
    type: "REMOVE_POCKET",
    pocketCurrency
  };
};

export const changePocketExchangeFrom = pocketCurrency => {
  return {
    type: "CHANGE_POCKET_EXCHANGE_FROM",
    pocketCurrency
  };
};

export const changePocketExchangeTo = pocketCurrency => {
  return {
    type: "CHANGE_POCKET_EXCHANGE_TO",
    pocketCurrency
  };
};

export const changePocketExchangeValueFrom = pocketValue => {
  return {
    type: "CHANGE_POCKET_EXCHANGE_VALUE_FROM",
    pocketValue
  };
};

export const changePocketExchangeValueTo = pocketValue => {
  return {
    type: "CHANGE_POCKET_EXCHANGE_VALUE_TO",
    pocketValue
  };
};
