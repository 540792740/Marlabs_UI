import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {counterReducer} from './count.redux'


const store = createStore(
    combineReducers({counter:counterReducer}),
    applyMiddleware(logger, thunk));

export default store;
