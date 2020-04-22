import actionType from "../actionType";

export default{
    addNote:(note)=>({

        type:actionType.ADD_NOTE,
        note
    }),
    updateNote:(index, note)=>({
        type:actionType.UPDATE_NOTE,
        index,
        note
    }),
    deleteNote:(index)=>({
        type:actionType.REMOVE_NOTE,
        index
    }),
}
