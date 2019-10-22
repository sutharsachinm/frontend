import { combineReducers, createStore } from 'redux';

//Template Reducers
import mainReducer from "../Reducer/mainReducer.js";

const reducers = combineReducers({
  main: mainReducer
});

export default createStore(reducers);
