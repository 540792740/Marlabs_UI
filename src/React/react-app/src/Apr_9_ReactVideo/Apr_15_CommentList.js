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
        setTimeout(() => {
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
                    <Comment key={i} data={c} />
                ))}
            </div>
        );
    }
}

//Display component
function Comment({ data }) {
    return (
        <div>
            <p>{data.body}</p>
            <p> --- {data.author}</p>
        </div>
    );
}
