import React from 'react';
import {buyCake} from '../redux/index'
import {connect} from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h3>Number of Cakes = {props.numOfCakes}</h3>
            <button onClick={props.buyCake}>Buy one</button>
        </div>
    );
}

// state here belongs to the redux
const mapStateToProps = (state) =>{
    return{
        numOfCakes : state.cake.numOfCakes
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        buyCake: () => dispatch(buyCake())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
