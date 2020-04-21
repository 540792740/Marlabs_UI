import actionType from "../actionType";

const initialState = {
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
        case actionType.RESET_INPUT:{
            return{
                initialState
            }
        }
        default :
            return state;
    }
}
