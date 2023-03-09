import axios from "axios";


export const authLoginAction = (payload) => dispatch => {


    axios
        .post("https://bootcamp-rent-cars.herokuapp.com/admin/auth/login", payload)
        .then((ress) => {
            dispatch({
                type: "LOGIN",
                payload: true,
            })
            console.log(ress)
            localStorage.setItem("token", ress.data.access_token)
            localStorage.setItem('email', ress.data.email)
            alert('Selamat anda berhasil login')
            // window.location.reload(false)
        })
        .catch((err) => console.log(err.message))
}


