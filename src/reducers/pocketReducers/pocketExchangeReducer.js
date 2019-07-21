import { TypeOfCurrency, pocketActionsTypes as actions } from '../../utils/constants';
import { transformMoney, exchangeFromTo } from '../../utils/transforms';

const initalState = {
  pocketExchangeFrom: TypeOfCurrency.PLN,
  pocketExchangeTo: TypeOfCurrency.USD,
  pocketValueFrom: '',
  pocketValueTo: ''
};

const pocketReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.changePocketExchangeFrom:
      return {
        ...state,
        pocketExchangeFrom: action.pocketCurrency,
        pocketValueFrom: '',
        pocketValueTo: ''
      };
    case actions.changePocketExchangeTo:
      return {
        ...state,
        pocketExchangeTo: action.pocketCurrency,
        pocketValueFrom: '',
        pocketValueTo: ''
      };
    case actions.changePocketExchangeValueFrom:
      return {
        ...state,
        pocketValueFrom: transformMoney(action.pocketValue, state.pocketValueFrom),
        pocketValueTo: exchangeFromTo(
          action.pocketValue,
          action.currencies,
          state.pocketExchangeFrom,
          state.pocketExchangeTo,
          state.pocketValueFrom
        )
      };
    case actions.changePocketExchangeValueTo:
      return {
        ...state,
        pocketValueFrom: exchangeFromTo(
          action.pocketValue,
          action.currencies,
          state.pocketExchangeTo,
          state.pocketExchangeFrom,
          state.pocketValueTo
        ),
        pocketValueTo: transformMoney(action.pocketValue, state.pocketValueTo)
      };
    case actions.exchangeMoney:
      return {
        ...state,
        pocketValueFrom: initalState.pocketValueFrom,
        pocketValueTo: initalState.pocketValueTo
      };
    case actions.replacePocketsPosition:
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
