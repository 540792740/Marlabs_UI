import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from "./userTypes";
import axios from 'axios'

export const fetchUsersRequest =()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
};

export const fetchUsersSuccess =(users)=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
};

export const fetchUsersFail =(error)=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
};


export const fetchUsers =()=>{
    //not a pure function, can make api calls, side effects, can dispatch action
    return (dispatch) => {
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
