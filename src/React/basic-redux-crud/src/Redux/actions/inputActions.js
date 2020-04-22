import actionType from "../actionType";

//with this, we could dispatch

export default{
    setInputTitle: title =>({
        type:actionType.SET_INPUT_TITLE,
        title
    }),
    setInputContent: content =>({
        type:actionType.SET_INPUT_CONTENT,
        content
    }),
    setInputId: id =>({
        type:actionType.SET_INPUT_ID,
        id,
    }),
    resetInputs: ()=>({
        type:actionType.RESET_INPUT,

    })
}
