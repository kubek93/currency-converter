import { TypeOfCurrency, pocketActionsTypes as actions } from '../../utils/constants';

const initalState = {
  userPocketsAllIds: [TypeOfCurrency.PLN, TypeOfCurrency.USD, TypeOfCurrency.EUR],
  userPocketsById: {
    [TypeOfCurrency.PLN]: {
      amount: 0
    },
    [TypeOfCurrency.USD]: {
      amount: 128.643216842
    },
    [TypeOfCurrency.EUR]: {
      amount: 64.3216842
    }
  }
};

const pocketReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.exchangeMoney:
      const { pocketExchangeFrom, pocketExchangeTo, pocketValueFrom, pocketValueTo } = action.pocketExchange;

      return {
        ...state,
        userPocketsById: {
          ...state.userPocketsById,
          [pocketExchangeFrom]: {
            amount: parseFloat(state.userPocketsById[pocketExchangeFrom].amount) - parseFloat(pocketValueFrom)
          },
          [pocketExchangeTo]: {
            amount: parseFloat(state.userPocketsById[pocketExchangeTo].amount) + parseFloat(pocketValueTo)
          }
        }
      };
    default:
      return state;
  }
};

export default pocketReducer;
