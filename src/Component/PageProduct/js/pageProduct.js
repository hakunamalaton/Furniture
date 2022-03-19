import { React, useState } from "react";
import Header from "../../Header/Js/Header";
import Footer from "../../Footer/Js/Footer";
import Rating from "../../Rating/js/rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/pageProduct.css";
import { faMinus, faPlus, faStar,faCartShopping  } from "@fortawesome/free-solid-svg-icons";

function PageProduct() {
    const [color, setColor] = useState("");
    const [pickColor, setPickColor] = useState(-1);
    const [pickSize, setPickSize] = useState(-1);
    const handleColor = (props,index) => {
        setColor(props);
        setPickColor(index);
    };
    const [size, setSize] = useState("");
    const handleSize = (props,index) => {
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
                            <h5 className="font-weight-bold">
                                Josie Upholstered Low Profile Platform Bed
                            </h5>
                        </div>
                        <div className="row product-rating-score">
                            <div className="d-flex align-items-center">
                                {starAvgScore(4.7)}
                                <div className="text-warning pl-2">4.7</div>
                                <div className="product-num-previews pl-3">
                                    (150 reviews)
                                </div>
                            </div>
                        </div>
                        <div className="row product-price font-weight-bold">
                            <h4>$ 599.99</h4>
                        </div>
                        <div className="product-made-by row">
                            Provide by{" "}
                            <p className="pl-2 font-weight-bold">
                                Carbono Design
                            </p>
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
                                <label className="btn p-0 m-1 rounded-0">
                                    <input
                                        type="radio"
                                        name="color"
                                        id="color1"
                                        onClick={() =>
                                            handleColor("Charcoal Gray")
                                        }
                                    />{" "}
                                    <div
                                        className="product-btn-color"
                                        style={{ backgroundColor: "#36454F" }}
                                    ></div>
                                </label>
                                <label className="btn p-0 m-1 rounded-0">
                                    <input
                                        type="radio"
                                        name="color"
                                        id="color2"
                                        onClick={() => handleColor("Blue")}
                                    />{" "}
                                    <div
                                        className="product-btn-color"
                                        style={{ backgroundColor: "#000080" }}
                                    ></div>
                                </label>
                            </div>
                        </div>
                        <div className="row d-block product-size">
                            <div className="product-size-selected d-flex">
                                <p className="font-weight-bold"> Size</p>{" "}
                                {size ? ": " + size : ":"}
                            </div>
                            <div
                                className="btn-group btn-group-toggle product-list-size row"
                                data-toggle="buttons"
                            >
                                <label className="btn p-0 m-1 rounded-0 col-5">
                                    <input
                                        type="radio"
                                        name="size"
                                        id="size1"
                                        onClick={() => handleSize("Full Size")}
                                    />{" "}
                                    <div className="product-btn-size">
                                        <p>42.5'' H x 58.5'' W x 80.5'' L</p>
                                        <p> 83.5 lb</p>
                                    </div>
                                </label>
                                <label className="btn p-0 m-1 rounded-0 col-5">
                                    <input
                                        type="radio"
                                        name="size"
                                        id="size2"
                                        onClick={() => handleSize("King Size")}
                                    />{" "}
                                    <div className="product-btn-size">
                                        <p> 39.5'' H x 78.5'' W x 84.5'' L</p>
                                        <p> 95.5 lb</p>
                                    </div>
                                </label>
                                <label className="btn p-0 m-1 rounded-0 col-5">
                                    <input
                                        type="radio"
                                        name="size"
                                        id="size3"
                                        onClick={() => handleSize("Queen Size")}
                                    />{" "}
                                    <div className="product-btn-size">
                                        <p> 42.5'' H x 64.5'' W x 85.5'' L</p>
                                        <p> 88 lb</p>
                                    </div>
                                </label>
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
                                    for="product-input-number"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="product-input-number"
                                    value={num}
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
                            <div className="col-5">
                                <button
                                    type="submit"
                                    className="btn product-btn-add-to-cart"
                                >
                                    <FontAwesomeIcon
                                        icon={faCartShopping}
                                        className="pr-2"
                                    />
                                    Add to Cart
                                </button>
                            </div>
                            <div className="col-4">
                                <button
                                    type="submit"
                                    className="btn product-btn-buy-now"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="font-weight-bold">Description: </div>
                            <div className="row product-content-decription">
                            You can stop browsing the internet right now; the Josie Upholstered Bed is the mid-century modern frame you have been looking for! With a soft velvet upholstery and a horizontal ribbed tufting pattern in the headboard, this upholstered bed will make the perfect addition to your master, guest, or teen’s bedroom. Built on a strong metal frame that features metal side rails and an additional center metal leg, this bed frame also includes a bentwood slat system and sturdy plastic legs to provide mattress support and allow for mattress breathability. The slats also remove the need for you to purchase any additional box spring or foundation. No matter the room, Josie’s simple yet trendy design will complement your existing furniture pieces and bring your bedroom décor to the next level. Available in multiple sizes and color options, there is the perfect Josie Upholstered Bed available for you!
                            </div>
                        </div>
                        <div className="d-block pt-2">
                            <div className="font-weight-bold">Overview: </div>
                            <div className="row product-content-overview">
                            <ul>
                                <li>Headboard Included</li>
                                <li>Footboard Included</li>
                                <li>Center Supports Included</li>
                                <li>Warranty Length: 1 Year</li>
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
