import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {counterReducer} from './count.redux'


const store = createStore(counterReducer, applyMiddleware(logger, thunk));

export default store;
