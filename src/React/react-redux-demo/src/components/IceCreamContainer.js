import React from 'react';
import {buyIceCream} from '../redux/index'
import {connect} from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h3>Number of Cakes = {props.numOfIceCreams}</h3>
            <button onClick={props.buyIceCream}>Buy one</button>
        </div>
    );
}
const mapStateToProps = (state) =>{
    return{
        numOfIceCreams : state.numOfIceCreams
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
