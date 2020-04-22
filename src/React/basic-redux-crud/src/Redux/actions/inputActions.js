import actionType from "../actionType";

export default{
    setInputTitle: title =>({
        type:actionType.SET_INPUT_TITLE,
        title
    }),
    setInputContent: content =>({
        type:actionType.SET_INPUT_CONTENT,
        content
    }),
    resetInputs: ()=>({
        type:actionType.RESET_INPUT,

    })
}
