/*
* Action is the only way your application can interact with store
* Carry some information from the app to the store
* Can be created as POJO(Plain old hs object)
* have a type property that indicates the type of action
* */

const redux = require('redux');
const createStore = redux.createStore;

//Define an action
const BUY_CAKE = 'BuyCake';
const BUY_ICE_CREAM = 'Buy_Ice_cream';
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


const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
};


//Define the reducer
// (prevState, action) => newState(is returned as an ob)
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes - 1
        };
        default: return state
    }
};

const store = createStore(reducer);
console.log('Initial State:', store.getState());
const unsubscribe = store.subscribe(()=> console.log("updated State：", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();


