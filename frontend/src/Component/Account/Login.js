import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Account.css'
import { FaUserAlt } from "react-icons/fa";
import Bg from './bg.jpg'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submitLogin(e) {
      
        console.log(email);
        console.log(password);
    }

    
    return (
        <div style={{ 
            backgroundImage: 'url(' + Bg + ')' ,
            width: "100%",
            height: "100vh",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
        <div className='loginContainer'>
            <div class="shadow-lg p-3 mb-5 bg-white rounded">
            <div className='inContainer'>
            <form method="post">
                <div className='center'>
                
                    <p className='headerFont'><strong>Login to continue</strong></p>
                </div>
                <div className='inputBlock'>                    
                        <label className='labelForm'><strong>Email</strong></label>               
                        <input  type='text' class="form-control"  onChange={(event) => setEmail(event.target.value)} />             
                </div>
                <div className='inputBlock'>
                        <label className='labelForm'><strong>Password</strong></label>
                        <input type='password' class="form-control" onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div className='center addMargin' onClick={submitLogin}>
                    <button type="submit" class="btn btn-primary" onClick={submitLogin}>LOGIN</button>
                </div>
               
            </form>
            <div className='center addMargin'>
                <p><strong>Forgot password? </strong><span><Link to='/forgetPass' className='star'>Click here</Link> </span> </p>
            </div>
            <div className='center addMargin'>
                <p><strong>Not have account?</strong> <span><Link to='/register' className='star'>Register</Link> </span> </p>
            </div>
            </div>
            </div>
        </div>

        </div>
        
    )
}