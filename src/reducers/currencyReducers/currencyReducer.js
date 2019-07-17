import { TypeOfCurrency } from "../../actions/currencyActions";

const initialState = {
  selectedCurrencies: [],
  currencyExchangeRate: {
    [TypeOfCurrency.PLN]: 4.2555,
    [TypeOfCurrency.USD]: 1.1223,
    [TypeOfCurrency.EUR]: 1
  }
};

const currentLanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CURRENCY":
      return { ...state, selectedCurrencies: action.languageName };
    case "REMOVE_CURRENCY":
      return { ...state, selectedCurrencies: action.languageName };
    default:
      return state;
  }
};

export default currentLanguageReducer;
