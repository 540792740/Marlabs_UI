import actionType from "../actionType";

const initialState = {
    notes:[]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case actionType.ADD_NOTE: {
            const notes = state.notes;
            const newNote = action.note;
            // if(notes.length > 0){
            //     const latestNote = notes[notes.length - 1];
            //     newNote.id = latestNote.note + 1;
            // }
            // else{
            //     newNote.id = 1;
            // }
            notes.push(newNote);
            return{notes}

        }
        case actionType.UPDATE_NOTE: {
            const { index, note } = action;
            const notes = state.notes;
            notes[index] = note;
            return {
                notes
            }
        }
        case actionType.REMOVE_NOTE: {
            const {index} = action;
            const notes = state.notes;
            delete notes[index];
            return {notes}
        }
        default:
            return state;
    }
}
