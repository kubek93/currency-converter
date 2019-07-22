import isEmpty from 'lodash/isEmpty';
import pick from 'lodash/pick';
import { TypeOfCurrency, currencyActionsType as actions } from '../../utils/constants';

const initialState = {
  selectedCurrencies: [],
  currencyExchangeRate: {}
};

const currentLanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.addCurrency:
      return { ...state, selectedCurrencies: action.languageName };
    case actions.removeCurrency:
      return { ...state, selectedCurrencies: action.languageName };
    case actions.updateCurrencies: {
      if (!isEmpty(action.currencies)) {
        return {
          ...state,
          currencyExchangeRate: pick(action.currencies, [TypeOfCurrency.PLN, TypeOfCurrency.USD, TypeOfCurrency.EUR])
        };
      }

      return state;
    }
    default:
      return state;
  }
};

export default currentLanguageReducer;
