import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from './userTypes'

const initailState={
    loading:true,
    data:[],
    error:''
};

const reducer = (state = initailState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            };
        case FETCH_USERS_SUCCESS:
            return{
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
        default :
            return{
                state
            }
    }
};

export default reducer;
