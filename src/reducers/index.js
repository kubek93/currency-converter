import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { addLocaleData } from "react-intl";
import thunkMiddleware from "redux-thunk";
import localeEn from "react-intl/locale-data/en";
import localePl from "react-intl/locale-data/pl";
import languagesReducers from "./languagesReducers";
import currencyReducers from "./currencyReducers";
import pocketReducers from "./pocketReducers/pocketReducer";
import pocketExchangeReducer from "./pocketReducers/pocketExchangeReducer";

addLocaleData([...localeEn, ...localePl]);

const reducers = combineReducers({
  languages: languagesReducers,
  currenct: currencyReducers,
  pocket: pocketReducers,
  exchange: pocketExchangeReducer
});

// eslint-disable-next-line no-undef
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const makeStore = () => {
  return createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
};

export default makeStore;
