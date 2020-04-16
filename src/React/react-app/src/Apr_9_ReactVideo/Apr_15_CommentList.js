import React, {Component} from "react";
// Container Component
export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }
    componentDidMount() {
        setInterval(() => {
        // setTimeout(() => {
            this.setState({
                comments: [
                    { body: "react is very good", author: "facebook" },
                    { body: "vue is very good", author: "youyuxi" }
                ]
            });
        }, 1000);
    }
    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => (
                    // <Comment key={i} body={c.data.body} author={c.data.author} />
                    <Comment key={i} {...c}/>
                ))}
            </div>
        );
    }
}

//Display component
const Comment = React.memo(
    function (props ) {

        console.log('render...');
        return (
            <div>
                <p>{props.body}</p>
                <p> --- {props.author}</p>
            </div>
        );
    });

// class Comment extends React.PureComponent{
//     // shouldComponentUpdate(nextProps, nextState, nextContext) {
//     //     if (nextProps.data.body === this.props.data.body &&
//     //         nextProps.data.author === this.props.data.body){
//     //         return false;
//     //     }
//     //     return true;
//     // }
//
//     render(){
//         console.log('Rendering comment');
//         return (
//             <div>
//                 <p>{this.props.body}</p>
//                 <p> --- {this.props.author}</p>
//             </div>
//         );
//     }
// }
