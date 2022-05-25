import React from "react";
import Header from "../Header/Js/Header";
import Footer from "../Footer/Js/Footer";
import "./homepage.css";
import Banner from "./Banner";
import TrendDesign from "./trendDesign";
import PartImportDesign from "./partImportDesign";
import Blogs from "./blogs";
import { Link } from "react-router-dom"
const HomePage = () => {
    return (
        <div className="homepage-component">
            <Header />
            <div className="top-homepage">
                <div
                    id="carouselExampleControls-top-homepage"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                            <img
                                src={"https://i.imgur.com/rBOXwVl.png"}
                                className="d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption carousel-1 text-left d-none d-md-block">
                                <h1 className="text-dark title-carousel-1">
                                    DECORATE
                                </h1>
                                <h1 className="text-dark">YOUR HOME</h1>
                                <Link to="/menu/All">
                                    <button type="button" className="btn btn-warning text-dark">SHOP NOW</button>
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={'https://i.imgur.com/Ik14aI8.png'} className="d-block w-100" alt="..." />
                            <div className="carousel-caption carousel-2 text-right d-none d-md-block">
                                <h1 className="text-dark title-carousel-1">
                                    MODERN
                                </h1>
                                <h1 className="text-dark">TREND DESIGN</h1>
                                <Link to="/menu/All">
                                    <button type="button" className="btn btn-warning text-dark">EXPLORE</button>
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={'https://i.imgur.com/8SJLFkf.png'} className="d-block w-100" alt="..." />
                            <div className="carousel-caption carousel-3 text-right d-none d-md-block">
                                <h1 className="text-white title-carousel-1">
                                    SIMPLE
                                </h1>
                                <h1 className="text-white">TREND DESIGN</h1>
                                <Link to="/menu/All">
                                    <button type="button" className="btn btn-warning text-dark">EXPLORE</button>
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={'https://i.imgur.com/NbIYtIu.png'} className="d-block w-100" alt="..." />
                            <div className="carousel-caption carousel-4 text-center d-none d-md-block">
                                <h1 className="text-white title-carousel-1">
                                    VINTAGE
                                </h1>
                                <h1 className="text-white">TREND DESIGN</h1>
                                <Link to="/menu/All">
                                    <button type="button" className="btn btn-warning text-dark">EXPLORE</button>
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={'https://i.imgur.com/Tmdqek5.png'} className="d-block w-100" alt="..." />
                            <div className="carousel-caption carousel-5 text-left d-none d-md-block">
                                <h1 className="text-dark title-carousel-1">
                                    LUXURY
                                </h1>
                                <h1 className="text-dark">TREND DESIGN</h1>
                                <Link to="/menu/All">
                                    <button type="button" className="btn btn-warning text-dark">EXPLORE</button>
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={'https://i.imgur.com/ItApx7q.png'} className="d-block w-100" alt="..." />
                            <div className="carousel-caption carousel-6 text-right d-none d-md-block">
                                <h1 className="text-dark title-carousel-1">
                                    CLASSIC
                                </h1>
                                <h1 className="text-dark">TREND DESIGN</h1>
                                <Link to="/menu/All">
                                    <button type="button" className="btn btn-warning text-dark">EXPLORE</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-target="#carouselExampleControls-top-homepage"
                        data-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-target="#carouselExampleControls-top-homepage"
                        data-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
                <div className= "d-flex justify-content-center">
                    <img src="https://i.imgur.com/8Of7j86.png" className="d-block w-100" alt="" />
                </div>
            </div>
            <div className="container-fluid">
            <Banner />
            <TrendDesign/>
            </div>
            <PartImportDesign/>
            <Blogs/>
            <Footer />
        </div>
    );
};

export default HomePage;
