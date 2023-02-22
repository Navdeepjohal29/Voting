import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import loader from "./loader";
import user from "./user_reducer";
export const history = createBrowserHistory();
const appReducer = combineReducers({
  user: user,
  loader: loader,
  form: formReducer,
  router: connectRouter(history),
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
