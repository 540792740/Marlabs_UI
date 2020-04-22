import {combineReducers} from "redux";
import inputs from './input';
import notes from './notes';

export default combineReducers({
    notes,
    inputs,
})
