import React, {useContext} from 'react';

// Create context
const MyContext = React.createContext();
const {Provider} = MyContext;
const {Consumer} = MyContext;

function Child(props){
    return (
        <div>
            Child: {props.foo}
        </div>
    )
}
function Child2(props){
    const ctx = useContext(MyContext);
    return (
        <div>
            Child2: {ctx.foo}
        </div>
    )
}

// Exasperating transfer parameters
class Child3 extends React.Component{
    static contextType = MyContext;
    render() {
        return <div>Child3: {this.context.foo}</div>;
    }
}


function Apr19Context(props) {
    return (
        <div>
            <Provider value={{foo:'bar'}}>
                {/* Consume 1:*/}
                <Consumer>
                    {/*// Consumer can get value from parent tag */}
                   {value => <Child {...value}/>}
                </Consumer>

                {/* Consume 2:*/}
                {/*// Consumer can get value from parent tag */}
                <Child2></Child2>

                {/* Consume 3:*/}
                <Child3></Child3>
            </Provider>
        </div>
    );
}

export default Apr19Context;
