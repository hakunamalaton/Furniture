import React from "react";
import logo from "../Image/Logo.png";
import cart from "../Image/Cart.png";
import "../Css/Header.css";

const Header = () => {
    return (
        <div className="header sticky-top">
            <div className="container pb-1 pt-2">
                <div className="row sign_in_header justify-content-end mr-1">
                    <div className="d-flex text-light">
                        <p className="pr-3 border-right border-light">Sign Up</p>
                        <p className="pl-3">Sign In</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-xl-3 d-none d-md-flex align-items-center">
                        <div>
                            <img src={logo} alt="logoimg" />
                        </div>

                        <h2 className="ml-3 mb-0 d-none d-xl-block text-light">TEAM 4</h2>
                    </div>

                    <div className="col-10 col-md-8 col-xl-7 align-self-center position-relative">
                        <form className="form-inline my-2 justify-content-end">
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
                        <img
                            src={cart}
                            style={{ width: "40px", cursor: "pointer" }}
                            alt="logoimg"
                        />
                    </div>
                </div>

                <div className="row border-top border-light mt-2 justify-content-md-center">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link text-light ml-md-5 mr-md-5" href="#">
                                        TABLE
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link text-light ml-md-5 mr-md-5" href="#">
                                        DESK
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link text-light ml-md-5 mr-md-5" href="#">
                                        CHAIR
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link text-light ml-md-5 mr-md-5" href="#">
                                        BEDDING
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link text-light ml-md-5" href="#">
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
