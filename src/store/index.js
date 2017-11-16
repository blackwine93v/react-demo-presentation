import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";
import logger from "redux-logger";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(reducer, applyMiddleware(logger));

export default store;
