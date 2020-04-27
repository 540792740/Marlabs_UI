import {EventEmitter} from 'events' //nodejs feature
import React from 'react';

class TodoStore extends EventEmitter {
    constructor(props) {
        super(props);
        this.todos = [
            {
                id: 113464613,
                text: "Go Shopping",
                complete: false
            },
            {
                id: 235684679,
                text: "Pay Water Bills",
                complete: false
            },
        ];
    }
    createTodo(text){
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete:false
        });
        this.emit('change');
    }

    getAll(){
        return this.todos;
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}
const todoStore = new TodoStore();
// window.todoStore = todoStore;
export default todoStore;
