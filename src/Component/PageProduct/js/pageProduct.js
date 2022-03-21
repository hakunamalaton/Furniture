import { React, useState } from "react";
import Header from "../../Header/Js/Header";
import Footer from "../../Footer/Js/Footer";
import Rating from "../../Rating/js/rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/pageProduct.css";
import Product from "./dataFakeProduct.json";
import {
    faMinus,
    faPlus,
    faStar,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function PageProduct() {
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
    const [num, setNum] = useState(1);
    const handleNum = (props) => {
        if (props === 0) {
            return;
        }
        setNum(props);
    };
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
    const colorProduct = (item, index) => {
        const indexSeparator = item.indexOf("#");
        const codeColor = item.slice(indexSeparator);
        const nameColor = item.slice(0, indexSeparator);
        return (
            <label className="btn p-0 m-1 rounded-0">
                <input
                    type="radio"
                    name="color"
                    key={index}
                    id={"color" + (index + 1)}
                    onClick={() => handleColor(nameColor, index)}
                />{" "}
                <div
                    className="product-btn-color"
                    style={{
                        backgroundColor: codeColor,
                        border: "3px solid white",
                        outline: pickColor === index ? "solid black" : "none",
                    }}
                ></div>
            </label>
        );
    };
    const sizeProduct = (item, index) => {
        const indexFirstSeparator = item.indexOf("#");
        const subItem = item.slice(indexFirstSeparator + 1);
        const nameSize = item.slice(0, indexFirstSeparator);
        const indexSecondarySeparator = subItem.indexOf("#");
        const size = subItem.slice(0, indexSecondarySeparator);
        const weight = subItem.slice(indexSecondarySeparator + 1);
        return (
            <label className="btn p-0 m-1 rounded-0 col-5">
                <input
                    type="radio"
                    name="size"
                    key={index}
                    id={"size" + (index + 1)}
                    onClick={() => handleSize(nameSize, index)}
                />{" "}
                <div className="product-btn-size" style={{
                        outline: pickSize === index ? "solid black" : "none",
                    }}>
                    <p>{size}</p>
                    <p>{weight}</p>
                </div>
            </label>
        );
    };
    return (
        <div className="page-product-component">
            <Header />
            <div className="container bg-white">
                <div className="d-flex pt-2">
                    <div className="product-image col-6">
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
                        <div
                            className="list-img-product-small row justify-content-center py-2"
                            data-ride="carousel"
                        >
                            <div className="col-2 ">
                                <img
                                    src="https://i.imgur.com/Q12CDlu.png"
                                    className="d-block w-100 img-small border border-dark"
                                    alt="img-small-bed-1"
                                    data-target="#carousel-img-product"
                                    data-slide-to="0"
                                />
                            </div>
                            <div className="col-2">
                                <img
                                    src="https://i.imgur.com/oATc63T.png"
                                    className="d-block w-100 img-small border border-dark"
                                    alt="img-small-bed-1"
                                    data-target="#carousel-img-product"
                                    data-slide-to="1"
                                />
                            </div>
                            <div className="col-2">
                                <img
                                    src="https://i.imgur.com/CIUdrUf.png"
                                    className="d-block w-100 img-small border border-dark"
                                    alt="img-small-bed-1"
                                    data-target="#carousel-img-product"
                                    data-slide-to="2"
                                />
                            </div>
                            <div className="col-2">
                                <img
                                    src="https://i.imgur.com/JbatxhQ.png"
                                    className="d-block w-100 img-small border border-dark"
                                    alt="img-small-bed-1"
                                    data-target="#carousel-img-product"
                                    data-slide-to="3"
                                />
                            </div>
                            <div className="col-2">
                                <img
                                    src="https://i.imgur.com/ceNDrYk.png"
                                    className="d-block w-100 img-small border border-dark"
                                    alt="img-small-bed-1"
                                    data-target="#carousel-img-product"
                                    data-slide-to="4"
                                />
                            </div>
                            <div className="col-2">
                                <img
                                    src="https://i.imgur.com/5lpquNF.png"
                                    className="d-block w-100 img-small border border-dark"
                                    alt="img-small-bed-1"
                                    data-target="#carousel-img-product"
                                    data-slide-to="5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="product-info col-6">
                        <div className="row product-name">
                            <h5 className="font-weight-bold">{Product.name}</h5>
                        </div>
                        <div className="row product-rating-score">
                            <div className="d-flex align-items-center">
                                {starAvgScore(Product.rating)}
                                <div className="text-warning pl-2">
                                    {Product.rating}
                                </div>
                                <div className="product-num-previews pl-3">
                                    ({Product.numReviews} reviews)
                                </div>
                            </div>
                        </div>
                        <div className="row product-price font-weight-bold">
                            <h4>$ {Product.price}</h4>
                        </div>
                        <div className="product-made-by row">
                            Provide by {thirdPartyProduct(Product.third_party)}.
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
                                {Product.color.map(colorProduct)}
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
                                {Product.size.map(sizeProduct)}
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="d-flex align-items-center font-weight-bold">
                                Quantity:
                            </div>
                            <div className="col-4 d-flex">
                                <button
                                    type="button"
                                    className="btn product-btn-decrease-number"
                                    onClick={() => handleNum(num - 1)}
                                >
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <label
                                    className="sr-only"
                                    htmlFor="product-input-number"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="product-input-number"
                                    defaultValue={num}
                                />
                                <button
                                    type="button"
                                    className="btn product-btn-increase-number"
                                    onClick={() => handleNum(num + 1)}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="">
                                <button
                                    type="submit"
                                    className="btn product-btn-add-to-cart mr-2"
                                >
                                    <FontAwesomeIcon
                                        icon={faCartShopping}
                                        className="pr-2"
                                    />
                                    Add to Cart
                                </button>
                            </div>
                            <div className="">
                                <button
                                    type="submit"
                                    className="btn product-btn-buy-now"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                        <div className=" pt-2">
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
                                            : "View all"}
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
                                {Product.description}
                            </div>
                        </div>
                        <div className="d-block pt-2">
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
                                        {viewOverview ? "Collapse" : "View all"}
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
                                    {Product.overview.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Rating />
            </div>
            <Footer />
        </div>
    );
}

export default PageProduct;
