import {createStore} from 'redux'
import cakeReducer from "./cakes/cakeReducers";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const store = createStore(cakeReducer);
const store = createStore(iceCreamReducer);

export default store
