import {combineReducers} from "redux";
import cakeReducer from "./cakes/cakeReducers";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
});

export default rootReducer
