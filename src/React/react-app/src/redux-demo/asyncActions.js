const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

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

const fetchUsersSuccess =(users)=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
};

const fetchUsersFail =(error)=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
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
                ...state,
                loading:false,
                users:action.payload,
                error:''
            };
        case FETCH_USERS_FAILURE:
            return{
                loading:true,
                user:[],
                error: action.payload
            };
    }
};
//Create an action creator that returns an action, thunk lets us return
// A function instead of an action obj

const fetchUsers =()=>{
    //not a pure function, can make api calls, side effects, can dispatch action
    return function(dispatch){
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // Response is an array of user
                // const users = response.data.map(user=>user.id);
                const users = response.data;
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error=>{
                dispatch(fetchUsersFail(error.message))
            })
    }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUsers());
