import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Header/Js/Header";
import Footer from "../../Footer/Js/Footer";
import Rating from "../../Rating/js/rating";
import "../css/pageProduct.css";
import {
    faMinus,
    faPlus,
    faStar,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const axios = require("axios");

function PageProduct({ id = 6 }) {
    const [dataProductDetail, setDataProductDetail] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/products/${id}`)
            .then((res) => setDataProductDetail(res.data))
            .catch((err) => console.error("Đây là lỗi: " + err));
    }, [id]);
    const [color, setColor] = useState("");
    const [pickColor, setPickColor] = useState(-1);
    const [pickSize, setPickSize] = useState(-1);
    const [viewDescription, setViewDescription] = useState(false);
    const [viewOverview, setViewOverview] = useState(false);
    const handleViewDescription = () => {
        setViewDescription(!viewDescription);
    };
    const handleViewOverview = () => {
        setViewOverview(!viewOverview);
    };

    const handleColor = (props, index) => {
        setColor(props);
        setPickColor(index);
    };
    const [size, setSize] = useState("");
    const handleSize = (props, index) => {
        setSize(props);
        setPickSize(index);
    };
    const handleNum = (props) => {
        const quantity = document.querySelector(
            "#product-input-quantity"
        ).value;
        if (props === "minus" && quantity > 1) {
            document.querySelector("#product-input-quantity").value =
                parseInt(quantity) - 1;
        } else if (props === "add") {
            document.querySelector("#product-input-quantity").value =
                parseInt(quantity) + 1;
        }
    };
    function starAvgScore(props) {
        const divElement = [];
        let restScore = 5 - Math.round(props);
        for (let i = 0; i < Math.round(props); i++) {
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
    function thirdPartyProduct(props) {
        const indexSeparator = props.indexOf("#");
        const urlThirdParty = props.slice(indexSeparator + 1);
        const nameThirdParty = props.slice(0, indexSeparator);
        return (
            <a
                href={urlThirdParty}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-2 font-weight-bold text-dark"
            >
                {nameThirdParty}
            </a>
        );
    }
    function showStar(value) {
        return value ? (
            <>
                {starAvgScore(dataProductDetail.avg_star)}
                <div className="text-warning pl-2">
                    {dataProductDetail.avg_star}
                </div>
            </>
        ) : (
            <div className="text-warning font-weight-bold">No have review.</div>
        );
    }
    return (
        <div className="page-product-component">
            <Header />
            <div className="container bg-white">
                <div className="paga-product-breadcrumb">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">BK Furniture</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="/bedding">Bedding</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                {dataProductDetail.name}
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="d-block d-lg-flex pt-2">
                    <div className="product-image col-lg-6">
                        <div
                            id="carousel-img-product"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner">
                                {dataProductDetail.image &&
                                    dataProductDetail.image.map(
                                        (item, index) => {
                                            return index === 0 ? (
                                                <div
                                                    className="carousel-item active"
                                                    key={index}
                                                >
                                                    <img
                                                        src={item}
                                                        className="d-block w-100"
                                                        alt="img-bed-1"
                                                    />
                                                </div>
                                            ) : (
                                                <div
                                                    className="carousel-item"
                                                    key={index}
                                                >
                                                    <img
                                                        src={item}
                                                        className="d-block w-100"
                                                        alt="img-bed-1"
                                                    />
                                                </div>
                                            );
                                        }
                                    )}
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
                        <div
                            className="list-img-product-small row justify-content-center py-2"
                            data-ride="carousel"
                        >
                            {dataProductDetail.image &&
                                dataProductDetail.image.map((item, index) => {
                                    return (
                                        <div className="col-2 px-1" key={index}>
                                            <img
                                                src={item}
                                                className="d-block w-100 img-small border border-dark"
                                                alt="img-small-bed-1"
                                                data-target="#carousel-img-product"
                                                data-slide-to={index}
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    <div className="product-info col-lg-6">
                        <div className="row product-name">
                            <h5 className="font-weight-bold">
                                {dataProductDetail.name}
                            </h5>
                        </div>
                        <div className="row product-rating-score align-items-center">
                            {showStar(dataProductDetail.avg_star)}
                        </div>
                        <div className="row product-price font-weight-bold">
                            <h4>{dataProductDetail.price} USD</h4>
                        </div>
                        <div className="product-made-by row">
                            Provide by{" "}
                            {dataProductDetail.third_party &&
                                thirdPartyProduct(
                                    dataProductDetail.third_party
                                )}
                            .
                        </div>
                        <div className="row d-block product-color">
                            <div className="product-color-selected d-flex">
                                <p className="font-weight-bold"> Color</p>{" "}
                                {color ? ": " + color : ":"}
                            </div>
                            <div
                                className="btn-group btn-group-toggle"
                                data-toggle="buttons"
                            >
                                {dataProductDetail.color &&
                                    dataProductDetail.color.map(
                                        (item, index) => {
                                            const indexSeparator =
                                                item.indexOf("#");
                                            const codeColor =
                                                item.slice(indexSeparator);
                                            const nameColor = item.slice(
                                                0,
                                                indexSeparator
                                            );
                                            return (
                                                <label
                                                    key={index}
                                                    className="btn p-0 m-1 rounded-0"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="color"
                                                        id={
                                                            "color" +
                                                            (index + 1)
                                                        }
                                                        onClick={() =>
                                                            handleColor(
                                                                nameColor,
                                                                index
                                                            )
                                                        }
                                                    />{" "}
                                                    <div
                                                        className="product-btn-color"
                                                        style={{
                                                            backgroundColor:
                                                                codeColor,
                                                            // border: "3px solid white",
                                                            outline:
                                                                pickColor ===
                                                                index
                                                                    ? "solid black"
                                                                    : "none",
                                                        }}
                                                    ></div>
                                                </label>
                                            );
                                        }
                                    )}
                            </div>
                        </div>
                        <div className="row d-block product-size">
                            <div className="product-size-selected d-flex">
                                <p className="font-weight-bold"> Size</p>{" "}
                                {size ? ": " + size : ":"}
                            </div>
                            <div
                                className="btn-group btn-group-toggle product-list-size row justify-content-start"
                                data-toggle="buttons"
                            >
                                {dataProductDetail.size &&
                                    dataProductDetail.size.map(
                                        (item, index) => {
                                            const indexFirstSeparator =
                                                item.indexOf("#");
                                            const subItem = item.slice(
                                                indexFirstSeparator + 1
                                            );
                                            const nameSize = item.slice(
                                                0,
                                                indexFirstSeparator
                                            );
                                            const indexSecondarySeparator =
                                                subItem.indexOf("#");
                                            const size = subItem.slice(
                                                0,
                                                indexSecondarySeparator
                                            );
                                            const weight = subItem.slice(
                                                indexSecondarySeparator + 1
                                            );
                                            return (
                                                <label
                                                    key={index}
                                                    className="btn p-0 m-1 rounded-0 col-5"
                                                >
                                                    <input
                                                        type="radio"
                                                        name="size"
                                                        id={
                                                            "size" + (index + 1)
                                                        }
                                                        onClick={() =>
                                                            handleSize(
                                                                nameSize,
                                                                index
                                                            )
                                                        }
                                                    />{" "}
                                                    <div
                                                        className="product-btn-size"
                                                        style={{
                                                            outline:
                                                                pickSize ===
                                                                index
                                                                    ? "solid black"
                                                                    : "none",
                                                        }}
                                                    >
                                                        <p>{size}</p>
                                                        <p>{weight}</p>
                                                    </div>
                                                </label>
                                            );
                                        }
                                    )}
                            </div>
                        </div>
                        <div className="product-quantity pt-2 d-flex col-md-10 col-lg-12 pl-0">
                            <div className="d-flex align-items-center font-weight-bold">
                                Quantity:
                            </div>
                            <div className="col-4  col-md-4 col-lg-5 d-flex">
                                <button
                                    type="button"
                                    className="btn product-btn-decrease-number"
                                    onClick={() => handleNum("minus")}
                                >
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <label
                                    className="sr-only d-none"
                                    htmlFor="product-input-quantity"
                                >
                                    Quantity
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="product-input-quantity"
                                    defaultValue={1}
                                    onChange={() => handleNum("")}
                                />
                                <button
                                    type="button"
                                    className="btn product-btn-increase-number"
                                    onClick={() => handleNum("add")}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                        <div className="product-btn row pt-2">
                            <div className="">
                                <button
                                    type="submit"
                                    className="btn btn-add-to-cart mr-2"
                                >
                                    <FontAwesomeIcon
                                        icon={faCartShopping}
                                        className="pr-2 icon-cart"
                                    />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="product-description pt-2">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex">
                                    <div className="font-weight-bold pr-1">
                                        Description:{" "}
                                    </div>
                                </div>
                                <div
                                    className="product-action-description p-0 flex-grow-1 justify-content-end d-flex"
                                    onClick={handleViewDescription}
                                >
                                    <div className="btn btn-outline-primary">
                                        {viewDescription
                                            ? "Collapse"
                                            : "View more"}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="row product-content-description"
                                style={
                                    viewDescription
                                        ? { display: "block" }
                                        : { display: "none" }
                                }
                            >
                                {dataProductDetail.description}
                            </div>
                        </div>
                        <div className="product-overview d-block pt-2">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex">
                                    <div className="font-weight-bold pr-1">
                                        Overview:{" "}
                                    </div>
                                </div>
                                <div
                                    className="product-action-overview p-0 text-primary flex-grow-1 justify-content-end d-flex"
                                    onClick={handleViewOverview}
                                >
                                    <div className="btn btn-outline-primary">
                                        {viewOverview
                                            ? "Collapse"
                                            : "View more"}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="row product-content-overview"
                                style={
                                    viewOverview
                                        ? { display: "block" }
                                        : { display: "none" }
                                }
                            >
                                <ul>
                                    {dataProductDetail.overview &&
                                        dataProductDetail.overview.map(
                                            (item, index) => (
                                                <li key={index}>{item}</li>
                                            )
                                        )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Rating id={id} averageScore={dataProductDetail.avg_star} />
            </div>
            <Footer />
        </div>
    );
}

export default PageProduct;
