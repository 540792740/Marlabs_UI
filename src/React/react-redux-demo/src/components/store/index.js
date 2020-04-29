import logger from "redux-logger";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {user} from "./user.redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga";

// 1. create saga midlleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({ user }),
    applyMiddleware(logger, sagaMiddleware)
);

// 2. run saga
sagaMiddleware.run(mySaga);
export default store;
