import { TypeOfCurrency } from "../../actions/currencyActions";

const initalState = {
  pocketExchangeFrom: TypeOfCurrency.PLN,
  pocketExchangeTo: TypeOfCurrency.USD
};

const pocketReducer = (state = initalState, action) => {
  switch (action.type) {
    case "CHANGE_POCKET_EXCHANGE_FROM":
      return { ...state, pocketExchangeFrom: action.pocketCurrency };
    case "CHANGE_POCKET_EXCHANGE_TO":
      return { ...state, pocketExchangeTo: action.pocketCurrency };
    default:
      return state;
  }
};

export default pocketReducer;
