import actionType from "../actionType";


const initialState = {
    id : -1,
    title:'',
    content:'',
};

export default (state = initialState, action) =>{
    switch (action.type){
        case actionType.SET_INPUT_TITLE:{
            const{title} = action;
            return{
                ...state,
                title,
            }
        }
        case actionType.SET_INPUT_CONTENT:{
            const{content} = action;
            return{
                ...state,
                content,
            }
        }
        case actionType.SET_INPUT_ID:{
            const{id} = action;
            return{
                ...state,
                id,
            }
        }
        case actionType.RESET_INPUT:{
            return initialState
        }
        default :
            return state;
    }
}
