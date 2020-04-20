import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {buyCake} from "../redux";

function HooksCakeContainer(props) {
    //we accessing the numOfCakes from redux and storing it in a variable
    const numOfCakes = useSelector(state => state.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Number of Cakes - {numOfCakes} </h3>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}



export default HooksCakeContainer;
