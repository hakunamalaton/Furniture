import React from "react";
import logo from "../Image/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import "../Css/Header.css";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <div className="header">
            <div className="container pt-2 pb-2">
                {/* <div className="row sign_in_header justify-content-end mr-1">
                    <div className="d-flex text-light">
                        <p className="pr-3 border-right border-light">Sign Up</p>
                        <p className="pl-3">Sign In</p>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-6 col-md-3 d-flex align-items-center">
                        <img className="w-75" src={logo} alt="logoimg" />
                    </div>
                    <div className="d-none d-md-block col-md-7 align-self-center position-relative">
                        <SearchBar />
                    </div>

                    <div className="col-4 col-md-2 align-self-center d-flex justify-content-end">
                        <FontAwesomeIcon
                            className="text-light icon-cart-shopping mr-4"
                            icon={faUser}
                        />
                        <a href="/order">
                            <FontAwesomeIcon
                                className="text-light icon-cart-shopping"
                                icon={faShoppingCart}
                            />
                        </a>
                    </div>

                    <button
                        className="navbar-toggler d-block d-md-none col-1"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon className="text-light" icon={faBars} />
                    </button>

                    <div className="w-100">
                        <nav className="navbar navbar-expand-md navbar-light p-0 m-1 w-100">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-block d-md-none position-relative pl-2 pr-3">
                                    <SearchBar />
                                </div>
                                <ul className="navbar-nav pl-3 pl-md-0 w-100 d-flex justify-content-around ">
                                    <li className="nav-item active">
                                        <a className="nav-link text-light" href="/menu">
                                            FACTORY DESIGN
                                        </a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link text-light" href="/import-design">
                                            CUSTOM DESIGN
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
