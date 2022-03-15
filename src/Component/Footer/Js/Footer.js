import React from "react";
import clock from "../Image/clock.png";
import facebook from "../Image/facebook.png";
import instagram from "../Image/instagram.png";
import location from "../Image/location.png";
import mail from "../Image/mail.png";
import telephone from "../Image/telephone.png";
import twitter from "../Image/twitter.png";

const Footer = () => {
    return (
        <div className="border-top border-dark">
            <div className="container">
                <div className="footer justify-content-around pt-2 pb-2 row">
                    <div className="col-xl">
                        <div>
                            <h6>CONTACT US</h6>
                            <div>
                                <img src={telephone} width="25px" alt="telephone" /> 012 345 6789
                            </div>
                            <div className="mt-2">
                                <img src={mail} width="25px" alt="mail" /> nhom4@gmail.com
                            </div>
                        </div>
                        <div className="mt-2">
                            <h6>VISIT OUR STORE</h6>
                            <div>
                                <img src={location} width="25px" alt="location" /> 246 Ly Thuong
                                Kiet, Quan 10, Ho Chi Minh City, Viet Nam
                            </div>
                            <div className="d-flex mt-2">
                                <img src={clock} width="25px" height="25px" alt="clock" />{" "}
                                <div className="pl-1">
                                    <p className="mb-1">Mon-Fri: 10am to 6pm</p>
                                    <p className="mb-0">Sat-Sun: 11am to 5pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl">
                        <div>
                            <h6>FILL EMAIL FOR DEALS OR YOUR DESIGN</h6>
                            <form className="form-inline my-2 justify-content-end mt-2">
                                <input
                                    className="form-control mr-sm-2 w-100"
                                    type="search"
                                    placeholder="Email Address"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn bg-secondary text-light my-2 my-sm-0 position-absolute mr-sm-2"
                                    type="submit"
                                >
                                    Send us
                                </button>
                            </form>
                        </div>
                        <div className="mt-4 connect">
                            <h6>CONNECT WITH US</h6>
                            <a href="#">
                                <img src={facebook} width="30px" alt="facebook" className="mr-3" />
                            </a>
                            <a href="#">
                                <img
                                    src={instagram}
                                    width="30px"
                                    alt="instagram"
                                    className="ml-3 mr-3"
                                />
                            </a>

                            <a href="#">
                                <img src={twitter} width="30px" alt="twitter" className="ml-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
