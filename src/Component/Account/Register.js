import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Account.css';

const Register = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    function register(e) {
        e.preventDefault();
        
    }
    return (
        <div className='loginContainer'>
            <div class="shadow-lg p-3 mb-5 bg-white rounded">
            <form>
                <div className='center'>
                    <p className='headerFont'>Đăng ký thành viên</p>
                </div>

                <div className='inputBlock'>                                      
                        <label className='labelForm'><span className='star'>*</span>Email</label>                           
                        <input required type='email' class="form-control" onChange={(event) => setEmail(event.target.value)}/>                  
                </div>
                <div className='inputBlock'>                    
                        <label className='labelForm'><span className='star'>*</span>Số điện thoại</label>                             
                        <input required type='tel' class="form-control" onChange={(event) => setPhone(event.target.value)} />                  
                </div>
                <div className='inputBlock'>                   
                        <label className='labelForm'><span className='star'>*</span>Họ và tên</label>
                        <input required type='text' class="form-control" onChange={(event) => setName(event.target.value)}/>                    
                </div>
                <div className='inputBlock'>                   
                        <label className='labelForm'><span className='star'>*</span>Mật khẩu</label>                                  
                        <input required type='password' class="form-control" onChange={(event) => setPassword(event.target.value)}/>               
                </div>
                <div className='inputBlock'>                   
                        <label className='labelForm'><span className='star'>*</span>Nhập lại mật khẩu</label>                                  
                        <input required type='password' class="form-control" onChange={(event) => setconfirmPassword(event.target.value)}/>               
                </div>

                <div className='center addMargin'>
                <button type="submit" class="btn btn-primary" onClick={register}>Đăng ký</button>
                </div>

            </form>

            <div className='center addMargin'>
                <p>Bạn đã có tài khoản? <span><Link to='/login' className='star'>Đăng nhập</Link> </span> </p>
            </div>

        </div>
        </div>
    )
}

export default Register