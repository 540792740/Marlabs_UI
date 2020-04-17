import {createStore} from 'redux'
import cakeReducer from "./cakes/cakeReducers";

const store = createStore(cakeReducer);
export default store
