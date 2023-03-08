import './Login.css'
import BgMobil from "../Assets/login-img.png"
import Rec from "../Assets/Rectangle.png"
import { useState,useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
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
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary">
                        Submit
                    </Button>
                 </Form>

                </div>
           
            </div>

        </div>
    )
}

export default Login;