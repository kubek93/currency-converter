const initialState = {
  selectedCurrencies: []
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
