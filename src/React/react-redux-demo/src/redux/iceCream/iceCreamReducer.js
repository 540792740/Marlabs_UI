import {BUY_ICE_CREAM} from "./iceCreamTypes";


const initialState = {
    numOfIceCreams : 20
};

const iceCreamReducer = (state = initialState, action) =>{
    if (action.type === BUY_ICE_CREAM) {
        return{
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        };
    } else {
        return state
    }
};

export default iceCreamReducer
