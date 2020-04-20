import React from 'react';
import {connect} from "react-redux";

function ItemContainer(props) {
    return (
        <div>
            <h3>ITem = {props.item}</h3>

        </div>
    );
}
const mapStateToProps = (state, ownProps) =>{
    const itemState = ownProps.cake ?
        state.cake.numOfCakes:
        state.iceCream.numOfIceCreams;
    return {
        item:itemState
    }
};

export default connect(mapStateToProps)(ItemContainer);
