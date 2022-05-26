import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Account.css";
import Bg from "./bg.jpg";

import axios from "axios";
import Modal from "react-modal";

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

const FakeRegister = () => {
    let subtitle;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "#f00";
    }

    function closeModal() {
        setPageState("started");
    }

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const [pageState, setPageState] = useState("started"); // started, success, failed

    const register = async (e) => {
        e.preventDefault();
        const requestBody = {
            user: {
                email: email,
                password: password,
                password_confirmation: confirmPassword,
            },
        };
        const headers = {
            headers: {
                withCredentials: true,
            },
        };
        console.log("SERVER_URL", SERVER_URL);
        console.log("Register request body", requestBody);
        const signUpResponse = await axios.post(`${SERVER_URL}/sign-up`, requestBody, headers);
        if (signUpResponse.data.code === 0) {
            setPageState("success");
        } else {
            setPageState("failed");
        }
    };
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
                        <form>
                            <div className="center">
                                <p className="headerFont">
                                    <strong>REGISTER ACCOUNT</strong>
                                </p>
                            </div>

                            <div className="inputBlock">
                                <label className="labelForm">
                                    <strong>Email</strong>
                                </label>
                                <input
                                    required
                                    type="email"
                                    className="form-control"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>

                            <div className="inputBlock">
                                <label className="labelForm">
                                    <strong>Name</strong>
                                </label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                            <div className="inputBlock">
                                <label className="labelForm">
                                    <strong>Password</strong>
                                </label>
                                <input
                                    required
                                    type="password"
                                    className="form-control"
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                            <div className="inputBlock">
                                <label className="labelForm">
                                    <strong>Comfirm password</strong>
                                </label>
                                <input
                                    required
                                    type="password"
                                    className="form-control"
                                    onChange={(event) => setconfirmPassword(event.target.value)}
                                />
                            </div>

                            <div className="center addMargin">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={register}
                                >
                                    REGISTER
                                </button>
                            </div>
                        </form>

                        <div>
                            <Modal
                                isOpen={pageState === "success"}
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
                                <h4 ref={(_subtitle) => (subtitle = _subtitle)} className="text-success">
                                    Register Success! Would you like to proceed to login?
                                </h4>
                                <div className="modal-btns mt-4">
                                    
                                    <button className="close-modal-btn bg-success">
                                        <Link to="/login">Login</Link>
                                    </button>
                                </div>
                            </Modal>
                        </div>

                        <div>
                            <Modal
                                isOpen={pageState === "failed"}
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
                                    Register failed, your email has been taken or password not
                                    matched
                                </h4>
                            </Modal>
                        </div>

                        <div className="center addMargin">
                            <p>
                                <strong>Have account?</strong>{" "}
                                <span>
                                    <Link to="/login" className="star">
                                        Login
                                    </Link>{" "}
                                </span>{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FakeRegister;
