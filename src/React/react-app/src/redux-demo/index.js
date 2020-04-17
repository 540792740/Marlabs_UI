/*
* Action is the only way your application can interact with store
* Carry some information from the app to the store
* Can be created as POJO(Plain old hs object)
* have a type property that indicates the type of action
* */

const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require('redux-logger');
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//Define an action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';
//Create an action by define a function
function buyCake()
{
    return{
        type:BUY_CAKE,
        info:'BuyCake action'
    };
}

function buyIceCream()
{
    return{
        type:BUY_ICE_CREAM,
        info:'Buy Ice Cream action'
    };
}


const initialCakeState = {numOfCakes: 10};
const initialIceCreamState = {numOfIceCreams: 20};


//Define the reducer
// (prevState, action) => newState(is returned as an ob)
const cakeReducer = (state = initialCakeState, action) =>{
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes - 1
        };
        default:return state;
    }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            };
        default:return state;
    }
};
const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
const store = createStore(rootReducers, applyMiddleware(logger));
console.log('Initial State:', store.getState());
const unsubscribe = store.subscribe(()=> {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();


