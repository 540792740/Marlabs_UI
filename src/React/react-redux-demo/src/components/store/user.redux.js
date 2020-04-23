const initial = {
    isLogin: false,
    loading: false
}


export const user = (state = initial, action) =>{
    switch(action.type){
        case 'requestLogin':
            return {
                isLogin: false,
                loading: true
            };
        case 'login':
            return {
                isLogin: true,
                loading: false
            };
        default:
            return state;
    }
};


//action creator
export const add = () => ({ type:'add' });
export const minus = () => ({type:'minus'});
export const asyncAdd = () =>dispatch =>{
    setTimeout(()=>{
        dispatch({type:'add'})
    }, 1500);
};
