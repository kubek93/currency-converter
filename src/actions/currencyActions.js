import { currencyActionsType as actions } from '../utils/constants';

export const addNewCurrency = currencyName => ({
  type: actions.addCurrency,
  currencyName
});

export const removeCurrency = currencyName => ({
  type: actions.removeCurrency,
  currencyName
});
