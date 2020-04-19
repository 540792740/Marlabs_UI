import React from 'react';

// Create context
const MyContext = React.createContext();
const {Provider} = MyContext;
const {Consumer} = MyContext;

function Child(){
    return (
        <div>
            Child
        </div>
    )
}


function Apr19Context(props) {
    return (
        <div>
            <Provider value={{foo:'bar'}}>
                <Consumer>
                    {/*// Consumer can get value from parent tag */}
                   {value => <Child>{...value}}</Child>}
                </Consumer>
            </Provider>
        </div>
    );
}

export default Apr19Context;
