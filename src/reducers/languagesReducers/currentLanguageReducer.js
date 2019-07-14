import { TypeOfLanguages } from "../../actions/languagesActions";

// eslint-disable-next-line import/prefer-default-export
const currentLanguageReducer = (state = TypeOfLanguages.EN, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return action.languageName;
    default:
      return state;
  }
};

export default currentLanguageReducer;
