import {EventEmitter} from 'events' //nodejs feature
import React from 'react';
import dispatcher from '../dispatcher'

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
    handleActions(action){
        // console.log("TodoStore received an action", action);
        switch(action.type){
            case "CREATE_TODO":{
                this.createTodo(action.text)
            }
            case "RECEOVE_TODOS":{
                // this.receiveTodos(todos)
                this.todos = action.todos;
                this.emit("change");
            }
        }

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}
const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
// window.todoStore = todoStore;
window.dispatcher = dispatcher;
export default todoStore;
