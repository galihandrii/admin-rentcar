
const initialState = {
    message : false,
    filter:'',
    isLoading: false,
    IsLogin: false,
    user:null,
    error:null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return{
                ...initialState,
                message: action.payload,
            }
       
        
        default:
            return state;
    }
}