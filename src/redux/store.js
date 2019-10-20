import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initialState = {};

const middlewares = applyMiddleware(
    thunk,
    logger
);

export const store = createStore(
    rootReducer,
    initialState,
    middlewares
);