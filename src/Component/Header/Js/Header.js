import React from "react";
import logo from "../Image/Logo.png";
import cart from "../Image/Cart.png";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 d-none d-md-flex align-items-center">
                    <div>
                        <img src={logo} alt="logoimg" />
                    </div>

                    <h2 className="ml-3 mb-0">TEAM 4</h2>
                </div>

                <div className="col-8 align-self-center">
                    <form className="form-inline my-2">
                        <input
                            className="form-control mr-sm-2 w-50"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-1 align-self-center">
                    <img src={cart} alt="logoimg" />
                </div>
            </div>
        </div>
    );
};

export default Header;
