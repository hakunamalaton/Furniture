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
        <>
            <Header />
            <div className="top-homepage">
                <div
                    id="carouselExampleControls-top-homepage"
                    class="carousel slide"
                    data-ride="carousel"
                >
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                            <img
                                src={"https://i.imgur.com/rBOXwVl.png"}
                                class="d-block w-100"
                                alt="..."
                            />
                            <div class="carousel-caption carousel-1 text-left d-none d-md-block">
                                <h1 className="text-dark title-carousel-1">
                                    DECORATE
                                </h1>
                                <h1 className="text-dark">YOUR HOME</h1>
                                <Link to="/menu/All">
                                    <button type="button" class="btn btn-warning text-dark">SHOP NOW</button>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={'https://i.imgur.com/Ik14aI8.png'} class="d-block w-100" alt="..." />
                            <div class="carousel-caption carousel-2 text-right d-none d-md-block">
                                <h1 className="text-dark title-carousel-1">
                                    MODERN
                                </h1>
                                <h1 className="text-dark">TREND DESIGN</h1>
                                <Link to="/menu/All">
                                    <button type="button" class="btn btn-warning text-dark">EXPLORE</button>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={'https://i.imgur.com/8SJLFkf.png'} class="d-block w-100" alt="..." />
                            <div class="carousel-caption carousel-3 text-right d-none d-md-block">
                                <h1 className="text-white title-carousel-1">
                                    SIMPLE
                                </h1>
                                <h1 className="text-white">TREND DESIGN</h1>
                                <Link to="/menu/All">
                                    <button type="button" class="btn btn-warning text-dark">EXPLORE</button>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={'https://i.imgur.com/NbIYtIu.png'} class="d-block w-100" alt="..." />
                            <div class="carousel-caption carousel-4 text-center d-none d-md-block">
                                <h1 className="text-white title-carousel-1">
                                    VINTAGE
                                </h1>
                                <h1 className="text-white">TREND DESIGN</h1>
                                <Link to="/menu/All">
                                    <button type="button" class="btn btn-warning text-dark">EXPLORE</button>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={'https://i.imgur.com/Tmdqek5.png'} class="d-block w-100" alt="..." />
                            <div class="carousel-caption carousel-5 text-right d-none d-md-block">
                                <h1 className="text-dark title-carousel-1">
                                    LUXURY
                                </h1>
                                <h1 className="text-dark">TREND DESIGN</h1>
                                <Link to="/menu/All">
                                    <button type="button" class="btn btn-warning text-dark">EXPLORE</button>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={'https://i.imgur.com/ItApx7q.png'} class="d-block w-100" alt="..." />
                            <div class="carousel-caption carousel-6 text-right d-none d-md-block">
                                <h1 className="text-dark title-carousel-1">
                                    CLASSIC
                                </h1>
                                <h1 className="text-dark">TREND DESIGN</h1>
                                <Link to="/menu/All">
                                    <button type="button" class="btn btn-warning text-dark">EXPLORE</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-target="#carouselExampleControls-top-homepage"
                        data-slide="prev"
                    >
                        <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next d-none"
                        type="button"
                        data-target="#carouselExampleControls-top-homepage"
                        data-slide="next"
                    >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="sr-only">Next</span>
                    </button>
                </div>
            </div>
            <div className="container-fluid">
            <Banner />
            <TrendDesign/>
            </div>
            <PartImportDesign/>
            <Blogs/>
            <Footer />
        </>
    );
};

export default HomePage;
