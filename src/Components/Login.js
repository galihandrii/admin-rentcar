import './Login.css'
import BgMobil from "../Assets/login-img.png"
import Rec from "../Assets/Rectangle.png"
import { useState,useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import { authLoginAction } from '../Redux/Actions/authAction'
import rootReducer from '../Redux/Reducers'


const Login = () => {
const [email,setEmail] = useState('');
const [password, setPassword] = useState('');
const [iserror, setIsError] =useState(false);
const [error, setError] = useState('');
const [isPassword, setIsPassword] = useState(false);
const navigate = useNavigate()
const dispatch= useDispatch()
const state = useSelector(rootReducer => rootReducer);  

// const handleError = () => {
//     setIsError(!iserror) // !isError = true
// }    
// const handlePasswordShow = () => {
//     setIsPassword(!isPassword); // !isPassword = true
//   };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
   
  };
  


  const handleLogin = () => {
    const payLoad = {
        email: email,
        password: password
    }
    console.log(payLoad);
    dispatch(authLoginAction(payLoad))
    navigate('/dashboard')
}
  





    

    
    
    
    
    return (
        <div className='login'>
            <div className='login-bgcar'><img src={BgMobil} alt='car-img'/></div>
            <div className='login-form'>
                <div className='form-top'>
                    <div><img src={Rec}/></div>
                    <div><h4>Welcome, Admin BCR</h4></div>
                </div>
                <div className='form-bottom'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={handleLogin} variant="primary">
                        Submit
                    </Button>
                 </Form>

                </div>
           
            </div>

        </div>
    )
}

export default Login;