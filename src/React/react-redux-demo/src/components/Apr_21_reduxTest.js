import React from 'react';
import store from "./Apr_21_store";


function Apr21ReduxTest(props) {
    return (
        <div>
            <p>{store.getState()}</p>
            <div>
                <button onClick={()=>store.dispatch({type:'minus'})}> - </button>
                <button onClick={()=>store.dispatch({type:'add'})}> + </button>
            </div>
        </div>
    );
}

export default Apr21ReduxTest;
