import React, {Component} from 'react';


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
            // return <Comp {...props}/>
            return <Comp {...this.props} name={name}/>
        }
    };
};

const withLog = Comp =>{
    console.log('Inner component rendering');
    return props => <Comp {...props}></Comp>
};


//display component, using decorator
@withLog
@withKeKa
@withLog
class KeKa extends Component{
    render() {
        return (
            <div>
                {this.props.stage}-{this.props.name}
            </div>
        )
    }
}
// const NewKeKa = withKeKa(withLog(KeKa));
class Apr116Hoc extends Component {
    render() {
        return (
            <div>
                <KeKa stage="React"/>
            </div>
        );
    }
}

export default Apr116Hoc;
