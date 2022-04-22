import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Account.css';
import Bg from './bg.jpg';

import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const FakeRegister = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const register = async (e) => {
        e.preventDefault();
        const requestBody = {
            "user": {
                "email": email,
                "password": password,
                "password_confirmation": confirmPassword,
            }
        };
        const headers = {
            headers: {
                withCredentials: true
            }
        }
        console.log("SERVER_URL", SERVER_URL);
        console.log("Register request body", requestBody);
        const signUpResponse = await axios.post(`${SERVER_URL}/signup`, requestBody, headers);
        console.log("Register Response", signUpResponse)
    }
    return (
        <div style={{
            backgroundImage: 'url(' + Bg + ')',
            width: "100%",
            height: "100vh",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='loginContainer'>
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <div className='inContainer'>
                        <form>
                            <div className='center'>
                                <p className='headerFont'><strong>REGISTER ACCOUNT</strong></p>
                            </div>

                            <div className='inputBlock'>
                                <label className='labelForm'><strong>Email</strong></label>
                                <input required type='email' class="form-control" onChange={(event) => setEmail(event.target.value)} />
                            </div>

                            <div className='inputBlock'>
                                <label className='labelForm'><strong>Name</strong></label>
                                <input required type='text' class="form-control" onChange={(event) => setName(event.target.value)} />
                            </div>
                            <div className='inputBlock'>
                                <label className='labelForm'><strong>Password</strong></label>
                                <input required type='password' class="form-control" onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div className='inputBlock'>
                                <label className='labelForm'><strong>Comfirm password</strong></label>
                                <input required type='password' class="form-control" onChange={(event) => setconfirmPassword(event.target.value)} />
                            </div>

                            <div className='center addMargin'>
                                <button type="submit" class="btn btn-primary" onClick={register}>REGISTER</button>
                            </div>

                        </form>

                        <div className='center addMargin'>
                            <p><strong>Have account?</strong> <span><Link to='/fakelogin' className='star'>Login</Link> </span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FakeRegister;