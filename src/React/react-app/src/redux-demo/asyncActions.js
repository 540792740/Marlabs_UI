const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;

const initailState={
    loading:true,
    data:[],
    error:''
};

//declare the actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

//create the actions
const fetchUsersRequest =()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
};

const fetchUsersRequest =()=>{
    return{
        type:FETCH_USERS_SUCCESS
    }
};

const fetchUsersRequest =(error)=>{
    return{
        type:FETCH_USERS_FAILURE
    }
};

const reducer = (state = initailState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                loading:true
            };
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            };
        case FETCH_USERS_SUCCESS:
            return{
            loading:true,
                user:[],
                error: action.payload
            };
    }
};
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
