import React from "react";
import { Link } from "react-router-dom";
import clock from "../Image/clock.png";
import facebook from "../Image/facebook.png";
import instagram from "../Image/instagram.png";
import location from "../Image/location.png";
import mail from "../Image/mail.png";
import telephone from "../Image/telephone.png";
import twitter from "../Image/twitter.png";

const Footer = () => {
    return (
        <div className="border-top bg-white border-dark mt-5">
            <div className="container ">
                <div className="footer d-flex justify-content-around pt-2 pb-1 row">
                    <div className="col-xl">
                        <div>
                            <h6>CONTACT US</h6>
                            <div>
                                <img src={telephone} width="25px" alt="telephone" /> +84 914 851 501
                            </div>
                            <div className="mt-2">
                                <img src={mail} width="25px" alt="mail" /> bk.furniture.hcmut@gmail.com
                            </div>
                        </div>

                        <div className="mt-2 mt-xl-4">
                            <h6>POLICY</h6>
                            <Link to={"/term-of-service"}>Term Of Service</Link> <br />
                            <Link to={"/exchange-policy"}>Exchange Policy</Link>
                            <br />
                            <Link to={"/delivery-policy"}>Delivery Policy</Link>
                            <br />
                            <Link to={"/warranty-policy"}>Warranty Policy</Link>
                            <br />
                            <Link to={"/privacy-policy"}>Privacy Polity</Link>
                        </div>
                    </div>
                    <div className="col-xl">
                        <div>
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
                        <div className="mt-2 mt-xl-4">
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
                        <div className="mt-2 mt-xl-4 connect">
                            <h6>CONNECT WITH US</h6>
                            <a href="https://www.facebook.com/">
                                <img src={facebook} width="30px" alt="facebook" className="mr-3" />
                            </a>
                            <a href="https://www.instagram.com/">
                                <img
                                    src={instagram}
                                    width="30px"
                                    alt="instagram"
                                    className="ml-3 mr-3"
                                />
                            </a>

                            <a href="https://twitter.com/">
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
