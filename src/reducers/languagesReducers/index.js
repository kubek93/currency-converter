import { combineReducers } from "redux";

import currentLanguageReducer from "./currentLanguageReducer";

const languages = combineReducers({
  currentLanguage: currentLanguageReducer
});

export default languages;
