import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "./auth/authReducer";
import { appReducer } from "./app/appReducer";
// import thunk from "redux-thunk";
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});
const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(rootReducer
  // , composeEnhancers(
  // applyMiddleware(thunk))
  );
