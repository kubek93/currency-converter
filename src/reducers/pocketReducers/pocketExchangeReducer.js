import { TypeOfCurrency } from '../../actions/currencyActions';
import { transformMoney, exchangeFromTo } from '../../utils/transforms';

const initalState = {
  pocketExchangeFrom: TypeOfCurrency.PLN,
  pocketExchangeTo: TypeOfCurrency.USD,
  pocketValueFrom: '',
  pocketValueTo: ''
};

const pocketReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'CHANGE_POCKET_EXCHANGE_FROM':
      return {
        ...state,
        pocketExchangeFrom: action.pocketCurrency,
        pocketValueFrom: '',
        pocketValueTo: ''
      };
    case 'CHANGE_POCKET_EXCHANGE_TO':
      return {
        ...state,
        pocketExchangeTo: action.pocketCurrency,
        pocketValueFrom: '',
        pocketValueTo: ''
      };
    case 'CHANGE_POCKET_EXCHANGE_VALUE_FROM':
      return {
        ...state,
        pocketValueFrom: transformMoney(action.pocketValue),
        pocketValueTo: exchangeFromTo(
          action.pocketValue,
          action.currencies,
          state.pocketExchangeFrom,
          state.pocketExchangeTo
        )
      };
    case 'CHANGE_POCKET_EXCHANGE_VALUE_TO':
      return {
        ...state,
        pocketValueFrom: exchangeFromTo(
          action.pocketValue,
          action.currencies,
          state.pocketExchangeTo,
          state.pocketExchangeFrom
        ),
        pocketValueTo: transformMoney(action.pocketValue)
      };
    case 'EXCHANGE_MONEY':
      return {
        ...state,
        pocketValueFrom: initalState.pocketValueFrom,
        pocketValueTo: initalState.pocketValueTo
      };
    case 'REPLACE_POCKETS_POSITION':
      return {
        ...state,
        pocketExchangeFrom: state.pocketExchangeTo,
        pocketExchangeTo: state.pocketExchangeFrom,
        pocketValueFrom: state.pocketValueTo,
        pocketValueTo: state.pocketValueFrom
      };
    default:
      return state;
  }
};

export default pocketReducer;
