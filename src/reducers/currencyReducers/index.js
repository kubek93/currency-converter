import { combineReducers } from "redux";

import currencyReducer from "./currencyReducer";

const currency = combineReducers({
  currency: currencyReducer
});

export default currency;
