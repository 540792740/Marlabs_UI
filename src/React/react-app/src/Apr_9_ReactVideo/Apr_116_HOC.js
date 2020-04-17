import React, {Component} from 'react';

//display component
function KeKa(props){
    return <div>{props.stage}-{props.name}</div>
}

// HOC Component
const withKeKa = Comp => {
    // Fetch props.name
    const name = "HOC";

    //Anonymous class
    return class extends React.Component {
        // Rewrite lifeCycle function
        componentDidMount() {
            console.log('Do something')
        }

        render() {
            return <Comp {...this.props} name={name}/>

            // return props => <Comp {...props} name={name}/>
        }
    };
};

const withLog = Comp =>{
    console.log('Inner component rendering');
    return props => <Comp {...props}></Comp>
};


const NewKeKa = withKeKa(withLog(KeKa));

class Apr116Hoc extends Component {
    render() {
        return (
            <div>
                <NewKeKa stage="React"/>
            </div>
        );
    }
}

export default Apr116Hoc;
