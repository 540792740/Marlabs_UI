import React from 'react';
// import store from "./Apr_21_store";
import {connect} from 'react-redux'
import {add, asyncAdd, minus} from "./store/count.redux";

const mapStateToProps = state => ({num: state});
const mapDispatchToProps = {add, minus, asyncAdd};

function Apr21ReduxTest({num,add, minus, asyncAdd}) {
    return (
        <div>
            <p>{num}</p>
            <div>
                <button onClick={minus}> - </button>
                <button onClick={add}> + </button>
                <button onClick={asyncAdd}> AsyncAdd </button>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Apr21ReduxTest);
