import React from "react";
import logo from "../Image/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/fontawesome-free-solid";
import "../Css/Header.css";

const Header = () => {
    return (
        <div className="header sticky-top">
            <div className="container pt-1">
                <div className="row sign_in_header justify-content-end mr-1">
                    <div className="d-flex text-light">
                        <p className="pr-3 border-right border-light">
                            Sign Up
                        </p>
                        <p className="pl-3">Sign In</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-xl-3 d-none d-md-flex align-items-center">
                        <div className="col-5 col-md-12 col-xl-5">
                            <img
                                className="img-fluid"
                                src={logo}
                                alt="logoimg"
                            />
                        </div>

                        <h5 className="col-7 mb-0 d-none d-xl-block text-light">
                            F R T N R STORE
                        </h5>
                    </div>

                    <div className="col-10 col-md-8 col-xl-7 align-self-center position-relative">
                        <form className="form-inline my-1 justify-content-end">
                            <input
                                className="form-control mr-sm-2 w-100"
                                type="search"
                                placeholder="Input"
                                aria-label="Search"
                            />
                            <button
                                className="btn bg-light text-dark my-2 my-sm-0 position-absolute mr-sm-2"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>

                    <div className="col-2 align-self-center d-flex justify-content-end">
                        <FontAwesomeIcon className="text-light icon-cart-shopping" icon={faShoppingCart} />
                    </div>
                </div>

                <div className="row border-top border-light justify-content-md-start">
                    <nav class="navbar navbar-expand-lg navbar-light p-0 m-1">
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            style={{ borderColor: "#fff" }}
                        >
                            <FontAwesomeIcon className="text-light" icon={faBars} />
                        </button>

                        <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul class="navbar-nav align-items-center">
                                <li class="nav-item active">
                                    <a
                                        class="nav-link text-light ml-md-5 mr-md-5"
                                        href="#"
                                    >
                                        TABLE
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a
                                        class="nav-link text-light ml-md-5 mr-md-5"
                                        href="#"
                                    >
                                        DESK
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a
                                        class="nav-link text-light ml-md-5 mr-md-5"
                                        href="#"
                                    >
                                        CHAIR
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a
                                        class="nav-link text-light ml-md-5 mr-md-5"
                                        href="#"
                                    >
                                        BEDDING
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a
                                        class="nav-link text-light ml-md-5"
                                        href="#"
                                    >
                                        CUSTOM DESIGN
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
