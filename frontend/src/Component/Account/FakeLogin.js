import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Account.css'
import { FaUserAlt } from "react-icons/fa";
import Bg from './bg.jpg'

import axios from 'axios';
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginAccount } from './slice/accountSlice';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function FakeLogin() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailedModal, setLoginFailedModal] = useState(false);

    let subtitle;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setLoginFailedModal(false);
    }
    const accountState = useSelector(state => state.account);

    async function submitLogin(e) {
        e.preventDefault();
        const requestBody = {
            "user": {
                "email": email,
                "password": password,
            }
        }
        const headers = {
            headers: {
                withCredentials: true,
            }
        }

        dispatch(loginAccount({ requestBody, headers }));
        if (accountState.status === "member") {
            history.push("/")
        } else {
            setLoginFailedModal(true);
        }
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
                        <form method="post">
                            <div className='center'>

                                <p className='headerFont'><strong>Login to continue</strong></p>
                            </div>
                            <div className='inputBlock'>
                                <label className='labelForm'><strong>Email</strong></label>
                                <input type='text' className="form-control" onChange={(event) => setEmail(event.target.value)} />
                            </div>
                            <div className='inputBlock'>
                                <label className='labelForm'><strong>Password</strong></label>
                                <input type='password' className="form-control" onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div className='center addMargin' onClick={submitLogin}>
                                <button type="submit" className="btn btn-primary">LOGIN</button>
                            </div>

                            <div>
                                <Modal
                                    isOpen={loginFailedModal}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Login failed, please recheck your email and password</h2>
                                    <div className="modal-btns">
                                        <button className="close-modal-btn" onClick={closeModal}>Close</button>
                                    </div>
                                </Modal>
                            </div>

                        </form>
                        <div className='center addMargin'>
                            <p><strong>Forgot password? </strong><span><Link to='/forgetPass' className='star'>Click here</Link> </span> </p>
                        </div>
                        <div className='center addMargin'>
                            <p><strong>Not have account?</strong> <span><Link to='/fakeregister' className='star'>Register</Link> </span> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}