import axios from "axios";

export const listCar =(config) => (dispatch) =>{
    axios.get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car",config)
    .then((res)=>{
        dispatch({
            type:'LISTCAR',
            payload:res.data.cars,
        })
    })
    .catch((err)=> console.log(err.message));
}