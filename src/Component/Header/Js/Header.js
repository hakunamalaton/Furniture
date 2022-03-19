import React from "react";
import logo from "../Image/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import "../Css/Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="container pt-1">
                {/* <div className="row sign_in_header justify-content-end mr-1">
                    <div className="d-flex text-light">
                        <p className="pr-3 border-right border-light">Sign Up</p>
                        <p className="pl-3">Sign In</p>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-md-2 col-xl-3 d-none d-md-flex align-items-center">
                        <div className="col-5 col-md-12 col-xl-5">
                            <img className="img-fluid" src={logo} alt="logoimg" />
                        </div>

                        <h5 className="col-7 mb-0 d-none d-xl-block text-light">F R N T R STORE</h5>
                    </div>

                    <div className="col-8 col-md-8 col-xl-7 align-self-center position-relative">
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

                    <div className="col-4 col-md-2 align-self-center d-flex justify-content-end">
                        <FontAwesomeIcon
                            className="text-light icon-cart-shopping mr-4"
                            icon={faUser}
                        />
                        <FontAwesomeIcon
                            className="text-light icon-cart-shopping"
                            icon={faShoppingCart}
                        />
                    </div>
                </div>

                <div className="row border-top border-light justify-content-md-around mt-2">
                    <nav className="navbar navbar-expand-lg navbar-light p-0 m-1">
                        <button
                            className="navbar-toggler"
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

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item active">
                                    <a
                                        className="nav-link text-light ml-md-5 mr-md-5"
                                        href="/table"
                                    >
                                        TABLE
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link text-light ml-md-5 mr-md-5" href="/desk">
                                        DESK
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a
                                        className="nav-link text-light ml-md-5 mr-md-5"
                                        href="/chair"
                                    >
                                        CHAIR
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a
                                        className="nav-link text-light ml-md-5 mr-md-5"
                                        href="/bedding"
                                    >
                                        BEDDING
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a
                                        className="nav-link text-light ml-md-5"
                                        href="/import-design"
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
