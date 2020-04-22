import React from 'react';
// import store from "./Apr_21_store";
import {connect} from 'react-redux'

const mapStateToProps = state => ({num: state});
const mapDispatchToProps = {
    add:() =>({type:'add'}),
    minus:() =>({type:'minus'})
};

function Apr21ReduxTest({num, add, minus}) {
    return (
        <div>
            <p>{num}</p>
            <div>
                <button onClick={minus}> - </button>
                <button onClick={add}> + </button>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Apr21ReduxTest);
