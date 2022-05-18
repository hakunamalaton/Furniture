/* eslint-disable jsx-a11y/anchor-is-valid */
import "./trendDesign.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faCartShopping } from "@fortawesome/free-solid-svg-icons";
const TrendDesign = () => {
    return (
        <div className="trend-design-component d-flex py-5">
            <div className="row col-12 justify-content-around">
                <div className="col-8">
                    <div className="trend1 col-12 d-flex">
                        <div className="col-9">
                            <div
                                id="carouselExampleControls-trend-design-1"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={
                                                "https://i.imgur.com/j6VZaeL.png"
                                            }
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={
                                                "https://i.imgur.com/pJSrHzJ.png"
                                            }
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={
                                                "https://i.imgur.com/gF9QCht.png"
                                            }
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={
                                                "https://i.imgur.com/4tOhfir.png"
                                            }
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-target="#carouselExampleControls-trend-design-1"
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
                                    data-target="#carouselExampleControls-trend-design-1"
                                    data-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="sr-only">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-3 ml-2">
                            <h4 className="row">
                                <strong>MODERN PRODUCT LINE</strong>
                            </h4>
                            <div className="row">
                                With the current trend, the use of furniture and
                                cumbersome patterns has become outdated, but
                                instead, priority is given to a simple and
                                elegant modernity for the room.
                            </div>
                            <a
                                href="/menu/all"
                                className="row align-items-center text-decoration-none"
                            >
                                <div className="btn btn-primary mt-2">
                                    EXPLORE NOW!{" "}
                                    <FontAwesomeIcon
                                        icon={faBookOpen}
                                        className="pl-1"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="trend1 col-12 d-flex justify-content-end mt-5">
                        <div className="col-6 mr-2">
                            <h4 className="row">
                                <strong>MINIMALIST STYLE PRODUCT LINE</strong>
                            </h4>
                            <div className="row">
                            Minimalist style is the most prominent design trend in the past year because of the simplicity and neatness of the interior layout. Characteristic colors such as beige, white, nude create a cozy and relaxing feeling in your own home.
                            </div>
                            <a
                                href="/menu/all"
                                className="row align-items-center text-dark text-decoration-none"
                            >
                                <strong>
                                What are you waiting for?
                                </strong>
                                <div className="btn btn-primary ml-2 mt-2">
                                    BUY IT NOW{" "}
                                    <FontAwesomeIcon
                                        icon={faBookOpen}
                                        className="pl-1"
                                    />
                                </div>
                            </a>
                        </div>
                        <div className="col-6">
                            <div
                                id="carouselExampleControls-trend-design-2"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={
                                                "https://i.imgur.com/K0cz3l0.png"
                                            }
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={
                                                "https://i.imgur.com/PwOvqnL.png"
                                            }
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={
                                                "https://i.imgur.com/u2eMxp9.png"
                                            }
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={
                                                "https://i.imgur.com/v0amMHU.png"
                                            }
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-target="#carouselExampleControls-trend-design-2"
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
                                    data-target="#carouselExampleControls-trend-design-2"
                                    data-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="sr-only">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trend2 col-3">
                    <div className="row">
                        <div
                            id="carouselExampleControls-trend-design-3"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src={"https://i.imgur.com/G9FSpqg.png"}
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={"https://i.imgur.com/P3PSLLj.png"}
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={"https://i.imgur.com/7Gyajt9.png"}
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={"https://i.imgur.com/pxp7VfR.png"}
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src={"https://i.imgur.com/VQGjopL.png"}
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-target="#carouselExampleControls-trend-design-3"
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
                                data-target="#carouselExampleControls-trend-design-3"
                                data-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h4 className="row">
                            <strong>PRODUCT COVERED LINE</strong>
                        </h4>
                        <div className="row">
                            Using furniture such as sofa covered with velvet
                            helps to exude a luxurious and classy beauty for the
                            whole space. The colors used for these items are
                            also extremely diverse depending on the user's
                            preferences such as blue, oil yellow, gray, red,
                            etc.
                        </div>
                        <a
                            href="/menu/all"
                            className="row align-items-center text-decoration-none"
                        >
                            <div className="btn btn-primary mt-2">
                                BUY NOW!{" "}
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                    className="pl-1"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendDesign;
