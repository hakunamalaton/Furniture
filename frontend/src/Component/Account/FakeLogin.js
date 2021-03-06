import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Account.css";
import Bg from "./bg.jpg";

import axios from "axios";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";

import { loginAccount } from "./slice/accountSlice";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export default function FakeLogin() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [cookies, setCookies] = useCookies(['email', 'token']);

    useEffect(() => {
        if (accountState.status === "member") {
            history.push("/");
        }
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginFailedModal, setLoginFailedModal] = useState(false);

    let subtitle;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "#f00";
    }

    function closeModal() {
        setLoginFailedModal(false);
    }
    const accountState = useSelector((state) => state.account);

    async function submitLogin(e) {
        e.preventDefault();
        const requestBody = {
            user: {
                email: email,
                password: password,
            },
        };
        const headers = {
            headers: {
                withCredentials: true,
            },
        };

        // const loginResponse = await dispatch(loginAccount({ requestBody, headers }));
        // console.log("FakeLogin loginResponse", loginResponse);

        const loginResponse = await axios.post(`${SERVER_URL}/sign-in`, requestBody, headers);
        console.log("loginResponse", loginResponse);
        if (loginResponse.data.code === 0) {
            const token = loginResponse.data.token;
            const email = requestBody["user"]["email"];
            console.log("{token, email}", { token, email });

            setCookies('email', email, { path: '/' });
            setCookies('token', token, { path: '/ ' });
            dispatch(loginAccount({ token, email }));
            history.push("/");
        } else {
            setLoginFailedModal(true);
        }
    }

    return (
        <div
            style={{
                backgroundImage: "url(" + Bg + ")",
                width: "100%",
                height: "100vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="loginContainer">
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="inContainer">
                        <form method="post">
                            <div className="center">
                                <p className="headerFont">
                                    <strong>Login to continue</strong>
                                </p>
                            </div>
                            <div className="inputBlock">
                                <label className="labelForm">
                                    <strong>Email</strong>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="inputBlock">
                                <label className="labelForm">
                                    <strong>Password</strong>
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                            <div className="center addMargin" onClick={submitLogin}>
                                <button type="submit" className="btn btn-primary">
                                    LOGIN
                                </button>
                            </div>

                            <div>
                                <Modal
                                    isOpen={loginFailedModal}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <div className="d-flex justify-content-end">
                                <button className="rounded-0 border-0 bg-white" onClick={closeModal}>
                                        X
                                    </button>
                                </div>
                                    <h4 ref={(_subtitle) => (subtitle = _subtitle)} className="text-danger">
                                        Login failed, please recheck your email and password
                                    </h4>
                                    
                                </Modal>
                            </div>
                        </form>
                        <div className="center addMargin">
                            <p>
                                <strong>Forgot password? </strong>
                                <span>
                                    <Link to="/forgetPass" className="star">
                                        Click here
                                    </Link>{" "}
                                </span>{" "}
                            </p>
                        </div>
                        <div className="center addMargin">
                            <p>
                                <strong>Not have account?</strong>{" "}
                                <span>
                                    <Link to="/register" className="star">
                                        Register
                                    </Link>{" "}
                                </span>{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
