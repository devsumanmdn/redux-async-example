import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

// REDUCERS
import todosReducer from "./reducer";

// rootRecuder
const rootReducer = combineReducers({
  todos: todosReducer
});

const logger = store => next => action => {
  console.group("==== Redux Dispatching Action ====");
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const makeStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
  );
};

export default makeStore;
