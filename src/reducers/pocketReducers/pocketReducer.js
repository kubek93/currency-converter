import { TypeOfCurrency } from '../../actions/currencyActions';

const initalState = {
  currentUserPocket: TypeOfCurrency.PLN,
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
    case 'CHANGE_CURRENT_POCKET':
      return { ...state, currentUserPocket: action.pocketCurrency };
    case 'EXCHANGE_MONEY':
      const {
        pocketExchangeFrom,
        pocketExchangeTo,
        pocketValueFrom,
        pocketValueTo
      } = action.pocketExchange;

      return {
        ...state,
        userPocketsById: {
          ...state.userPocketsById,
          [pocketExchangeFrom]: {
            amount:
              parseFloat(state.userPocketsById[pocketExchangeFrom].amount) -
              parseFloat(pocketValueFrom)
          },
          [pocketExchangeTo]: {
            amount:
              parseFloat(state.userPocketsById[pocketExchangeTo].amount) + parseFloat(pocketValueTo)
          }
        }
      };
    default:
      return state;
  }
};

export default pocketReducer;
