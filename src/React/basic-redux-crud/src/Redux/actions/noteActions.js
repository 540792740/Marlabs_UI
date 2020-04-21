import actionType from "../actionType";

export default{
    addNote:(note)=>({

        type:actionType.ADD_TODO,
        note
    }),
    updateNote:(index, note)=>({
        type:actionType.UPDATE_TODO,
        index,
        note
    }),
    deleteNote:(index)=>({
        type:actionType.REMOVE_TODO,
        index
    }),
}
