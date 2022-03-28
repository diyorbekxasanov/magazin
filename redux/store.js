import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer } from "./reducer/reducer";
import { qarz } from "./reducer/reducerQarz";
import { xodim } from "./reducer/xodimlar";

const middleware = [thunk];
const store = createStore(
  combineReducers({ reducer, qarz, xodim }),
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
