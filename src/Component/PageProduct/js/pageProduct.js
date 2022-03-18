import React from "react";
import Header from "../../Header/Js/Header";
import Footer from "../../Footer/Js/Footer";
import Rating from "../../Rating/js/rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import "../css/pageProduct.css";
function PageProduct() {
    function starAvgScore(props) {
        const divElement = [];
        let restScore = 5 - Math.ceil(props);
        for (let i = 0; i < Math.ceil(props); i++) {
            divElement.push(
                <FontAwesomeIcon icon={faStar} className="text-warning" />
            );
        }
        for (let i = 0; i < restScore; i++) {
            divElement.push(
                <FontAwesomeIcon icon={faStar} className="text-secondary" />
            );
        }
        return divElement.map((item, index) => <div key={index}>{item}</div>);
    }
    return (
        <div className="page-product-component">
            <Header />
            <div className="container bg-white">
                <div className="image-product col-6 pt-4">
                    <div
                        id="carousel-img-product"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="https://i.imgur.com/Q12CDlu.png"
                                    className="d-block w-100"
                                    alt="img-bed-1"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.imgur.com/oATc63T.png"
                                    className="d-block w-100"
                                    alt="img-bed-1"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.imgur.com/CIUdrUf.png"
                                    className="d-block w-100"
                                    alt="img-bed-1"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.imgur.com/JbatxhQ.png"
                                    className="d-block w-100"
                                    alt="img-bed-1"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.imgur.com/ceNDrYk.png"
                                    className="d-block w-100"
                                    alt="img-bed-1"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://i.imgur.com/5lpquNF.png"
                                    className="d-block w-100"
                                    alt="img-bed-1"
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-target="#carousel-img-product"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon text-dark"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-target="#carousel-img-product"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                    <div className="list-img-product-small row pt-2 carousel-indicators">
                        <div className="col-2">
                            <img
                                src="https://i.imgur.com/Q12CDlu.png"
                                className="d-block w-100 active img-small"
                                alt="img-small-bed-1"
                                data-target="#carousel-img-product"
                                data-slide-to="0"
                            />
                        </div>
                        <div className="col-2">
                            <img
                                src="https://i.imgur.com/oATc63T.png"
                                className="d-block w-100 img-small"
                                alt="img-small-bed-1"
                                data-target="#carousel-img-product"
                                data-slide-to="1"
                            />
                        </div>
                        <div className="col-2">
                            <img
                                src="https://i.imgur.com/CIUdrUf.png"
                                className="d-block w-100 img-small"
                                alt="img-small-bed-1"
                                data-target="#carousel-img-product"
                                data-slide-to="2"
                            />
                        </div>
                        <div className="col-2">
                            <img
                                src="https://i.imgur.com/JbatxhQ.png"
                                className="d-block w-100 img-small"
                                alt="img-small-bed-1"
                                data-target="#carousel-img-product"
                                data-slide-to="3"
                            />
                        </div>
                        <div className="col-2">
                            <img
                                src="https://i.imgur.com/ceNDrYk.png"
                                className="d-block w-100 img-small"
                                alt="img-small-bed-1"
                                data-target="#carousel-img-product"
                                data-slide-to="4"
                            />
                        </div>
                        <div className="col-2">
                            <img
                                src="https://i.imgur.com/5lpquNF.png"
                                className="d-block w-100 img-small"
                                alt="img-small-bed-1"
                                data-target="#carousel-img-product"
                                data-slide-to="5"
                            />
                        </div>

                    </div>
                </div>
                <div className="info-product col-6"></div>
                <Rating />
            </div>
            <Footer />
        </div>
    );
}

export default PageProduct;
