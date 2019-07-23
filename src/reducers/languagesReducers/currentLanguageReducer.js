import { TypeOfLanguages, languagesActionsTypes as actions } from '../../utils/constants';

const currentLanguageReducer = (state = TypeOfLanguages.EN, action) => {
  switch (action.type) {
    case actions.changeLanguage:
      return action.languageName;
    default:
      return state;
  }
};

export default currentLanguageReducer;
