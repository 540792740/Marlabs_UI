import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger'


const counterReducer = (state = 0, action) =>{
    switch(action.type){
        case 'add':
            return state + 1;
        case 'minus':
            return state  - 1;
        default:
            return state;
    }
};

const store = createStore(counterReducer, applyMiddleware(logger));

export default store;
