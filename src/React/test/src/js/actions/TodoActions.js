import dispatcher from '../dispatcher';

export function createTodo(text) {
    dispatcher.dispatch({
        type:"CREATE_TODO",
        text,
    });
}
export function deleteTodo(id) {
    dispatcher.dispatch({
        type:"DELETE_TODO",
        id,
    });
}

export function reloadTodos(id) {
    // axios("http://url.com/someDataEndPoint").then(data) =>{
    //     console.log("Data" + data)
    // }

    dispatcher.dispatch({type:"FETCH_TODOS"});
    setTimeout(()=>{
        dispatcher.dispatch({type:"RECEIVE_TODOS", todos:[
            {
                id: 21212121212121,
                text: "Go Shopping Now",
                complete: false
            },
            {
                id: 676767676767676767,
                text: "Go Shopping Later",
                complete: false
            }
        ]})
    }, 1000);
}
