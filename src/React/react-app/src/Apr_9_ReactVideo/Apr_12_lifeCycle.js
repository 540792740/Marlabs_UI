import React, {Component} from 'react';

class Apr12LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("1. Constructor Execution")
    }

    componentWillMount() {
        console.log("2. componentWillMount Execution")

    }

    componentDidMount() {
        console.log("3. componentDidMount Execution")

    }

    componentWillReceiveProps(nextProps) {
        console.log("4. componentWillReceiveProps Execution")

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("5. shouldComponentUpdate Execution")

    }

    componentWillUpdate(nextProps, nextState) {
        console.log("6. componentWillUpdate Execution")

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("7. componentDidUpdate Execution")

    }

    componentWillUnmount() {
        console.log("8. componentWillUnmount Execution")

    }

    render() {
        console.log("Rendering")
        return (
            <div>
                lifeCycle
            </div>
        );
    }
}

Apr12LifeCycle.propTypes = {};

export default Apr12LifeCycle;