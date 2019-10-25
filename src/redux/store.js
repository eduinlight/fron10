import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import notiOnApiError from "./middlewares/notiOnApiError";

const initialState = {};

const middlewares = applyMiddleware(
    thunk,
    logger,
    notiOnApiError,
);

export const store = createStore(
    rootReducer,
    initialState,
    middlewares
);