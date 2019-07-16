import { TypeOfCurrency } from "../../actions/currencyActions";

const initalState = {
  currentUserPocket: TypeOfCurrency.PLN,
  userPocketsAllIds: [
    TypeOfCurrency.PLN,
    TypeOfCurrency.USD,
    TypeOfCurrency.EUR
  ],
  userPocketsById: {
    [TypeOfCurrency.PLN]: {
      amount: 0
    },
    [TypeOfCurrency.USD]: {
      amount: 128.64
    },
    [TypeOfCurrency.EUR]: {
      amount: 64.32
    }
  }
};

const pocketReducer = (state = initalState, action) => {
  switch (action.type) {
    case "CHANGE_CURRENT_POCKET":
      return { ...state, currentUserPocket: action.pocketCurrency };
    default:
      return state;
  }
};

export default pocketReducer;
