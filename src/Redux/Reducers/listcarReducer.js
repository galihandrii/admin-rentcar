const initialState = {
    carsData : [] ,
    detailCar: {},
    message:'',
}

export const listcarReduceer = (state = initialState, action) => {
    switch (action.type) {
        case 'LISTCAR':
            return{
                ...initialState,
                carsData : action.payload,
            }
        case 'FILTER':
            return{
                ...initialState,
                carsData : action.payload,
            }
        case 'DELETE':
                return{
                    ...initialState,
                    message : action.payload,
                }
        case 'ADD_CAR':
            return{
                ...initialState,
                message : action.payload,
            }
        case 'EDIT_CAR':
                return{
                    ...initialState,
                    detailCar : action.payload,
                }
        case 'GET_SINGLE_CAR':
                return {
                        ...initialState,
                        detailCar:action.payload,
                    }
         case 'GET_EDIT_CAR':
                return {
                            ...initialState,
                             detailCar: action.payload,
                         }                     
        default:
            return state;
    }
}