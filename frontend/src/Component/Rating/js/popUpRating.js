import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/popUpRating.css";
import { faCamera, faStar } from "@fortawesome/free-solid-svg-icons";
const axios = require("axios");
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
function PopUpRating({ idOrder, id, image, name, category, emailUser, rated }) {
    const [currentScore, setCurrentScore] = useState(0);
    const [hoverScore, setHoverScore] = useState(undefined);
    const [popUp, setPopUp] = useState(false);
    let images = [];
    const [listRate, setListRate] = useState([]);

    useEffect(() => {
        axios.get(`${SERVER_URL}/orders/${idOrder}`).then((res) => {
            setListRate(res.data.detail_information.map((a) => {
                return {
                    product_id: a.product_id,
                    rated: a.rated,
                };
            }));
        });
    })

    function checkListRate(arr, id) {
        let temp_arr = arr.filter((a) => a.rated === false);
        if (temp_arr.length > 1) {
            return false;
        } else {
            return temp_arr[0].product_id === id;
        }
    }

    function handleAddRating(e) {
        let score = currentScore;
        let category = [];
        switch (score) {
            case 5:
                category.push("5-star");
                break;
            case 4:
                category.push("4-star");
                break;
            case 3:
                category.push("3-star");
                break;
            case 2:
                category.push("2-star");
                break;
            case 1:
                category.push("1-star");
                break;
            default:
                break;
        }
        let description = document.getElementById(
            `content-cmt-product-${id}`
        ).value;
        if (description) {
            category.push("comment");
        }
        if (images.length > 0) {
            category.push("media");
        }
        e.preventDefault();
        axios.post(`${SERVER_URL}/products/${id}/ratings`, {
            email: emailUser,
            description,
            image: images,
            category,
            star: score,
            order_id: idOrder,
        });
        if (checkListRate(listRate, id) === true) {
            axios
                .patch(`${SERVER_URL}/orders/${idOrder}`, {
                    status: "Evaluated",
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        setPopUp(!popUp);
        setTimeout(() => {
            window.location.href = "/transaction-history";
        }, 1600);
    }

    function pickStarScore() {
        const start = Array(5).fill(0);
        return start.map((_, index) => (
            <FontAwesomeIcon
                icon={faStar}
                key={index}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                className={
                    (hoverScore || currentScore) > index
                        ? "text-warning icon-star-score"
                        : "text-secondary icon-star-score"
                }
                style={{
                    cursor: "pointer",
                }}
            />
        ));
    }
    const handleClick = (props) => {
        if (props === currentScore) {
            setCurrentScore(0);
            return;
        }
        setCurrentScore(props);
    };
    const handlePopUp = (e) => {
        clearImgPreview();
        setPopUp(!popUp);
    };
    const handleMouseOver = (props) => {
        setHoverScore(props);
    };
    const handleMouseLeave = () => {
        setHoverScore(undefined);
    };

    function clearImgPreview() {
        images = [];
        const listFilePrev = document.querySelectorAll(
            `.preview-img-rating-order-${idOrder}`
        );
        listFilePrev.forEach(resetPreviewImg);
    }
    function resetPreviewImg(item, index) {
        item.style.display = "none";
        item.key = index;
    }
    function previewListImg() {
        clearImgPreview();
        const file = document.querySelector(
            `#input-img-rating-order-${idOrder}`
        ).files;
        if (file.length === 0) {
            return;
        }
        for (let i = 0; i < file.length; i++) {
            previewImg(i);
        }
    }
    function previewImg(index) {
        const preview = document.querySelector(
            `#order-${idOrder}-img-rating-upload-${index + 1}`
        );
        console.log(preview);
        var file = document.querySelector(`#input-img-rating-order-${idOrder}`)
            .files[index];
        if (file.size > 51000) {
            document.getElementById(
                `submit-rating-order-${idOrder}`
            ).disabled = true;
        } else {
            document.getElementById(
                `submit-rating-order-${idOrder}`
            ).disabled = false;
        }
        let blobURL = URL.createObjectURL(file);
        preview.style.display = "block";
        preview.style.backgroundImage = "url(" + blobURL.toString() + ")";
        const reader = new FileReader();
        reader.onload = function () {
            images.push(reader.result);
        };
        reader.readAsDataURL(file);
    }
    return (
        <div className={`popup-rating-component`}>
            <div className="row">
                <div className="col-12">
                    <button
                        className={`btn btn-primary btnRating ${
                            rated === false ? "d-block" : "d-none"
                        }`}
                        onClick={handlePopUp}
                    >
                        RATING
                    </button>
                </div>
            </div>
            <div className={popUp ? "open-popup-rating" : "close-popup-rating"}>
                <div className="rating-popup-overlay"></div>
                <div className="col-12 col-md-9 col-xl-8 rating-popup-form d-flex justify-content-center">
                    <div className="bg-white p-3">
                        <div className="row rating-popup-form-header">
                            <h5>RATING PRODUCT</h5>
                        </div>
                        <div className="row rating-popup-form-product py-1">
                            <div className="col-3 col-sm-2 p-0 product-img">
                                <img
                                    src={image}
                                    className="img-fluid"
                                    alt="img-product"
                                />
                            </div>
                            <div className="col-9 col-sm-10 product-info">
                                <div className="row product-name">
                                    <h6>{name}</h6>
                                </div>
                                <div className="row product-category text-secondary">
                                    <p className="m-0">Category: {category} </p>
                                </div>
                            </div>
                        </div>
                        <div className="rating-popup-form-body">
                            <form>
                                <div className="form-group mb-0 rating-choose-score d-flex justify-content-center align-items-center">
                                    {pickStarScore()}
                                </div>
                                <div className="form-group mb-0 rating-enter-cmt">
                                    <textarea
                                        type="content-cmt"
                                        className="form-control"
                                        id={`content-cmt-product-${id}`}
                                        rows="3"
                                        placeholder="Please share more things you like about this product"
                                    />
                                </div>
                                <div className="form-group mb-0">
                                    <div className="input-group col-12 d-inline-block">
                                        <div className="d-block d-sm-flex">
                                            <div className="custom-file col-12 col-sm-5 col-md-5 col-lg-4 col-xl-3 m-1 d-flex align-items-center">
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id={`input-img-rating-order-${idOrder}`}
                                                    accept="image/png, image/jpeg, image/jpg"
                                                    multiple
                                                    onChange={previewListImg}
                                                />
                                                <label
                                                    className="custom-file-label text-primary border-primary rounded-0 d-flex justify-content-center align-items-center"
                                                    htmlFor={`input-img-rating-order-${idOrder}`}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faCamera}
                                                        className="pr-1"
                                                    />{" "}
                                                    Add Images
                                                </label>
                                            </div>
                                            <div className="ml-2 col-12 col-sm-4 d-flex align-items-center">
                                                <div className="row">
                                                    (Max is 6 images. The
                                                    maximum size of each image
                                                    is 50KB.)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row preview-file-rating pt-2">
                                            {[0, 0, 0, 0, 0, 0].map(
                                                (_, index) => {
                                                    return (
                                                        <div
                                                            className={`m-1 preview-img-rating preview-img-rating-order-${idOrder}`}
                                                            id={
                                                                `order-${idOrder}-img-rating-upload-` +
                                                                (index + 1)
                                                            }
                                                            key={index}
                                                            style={{
                                                                display: "none",
                                                            }}
                                                        ></div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row rating-popup-form-footer justify-content-end">
                                    <Link to="/transaction-history">
                                        <button
                                            className="btn btn-secondary m-2 btnCancel"
                                            onClick={handlePopUp}
                                        >
                                            CANCEL
                                        </button>
                                    </Link>

                                    <button
                                        type="submit"
                                        className="btn btn-primary m-2 btnSubmit"
                                        id={`submit-rating-order-${idOrder}`}
                                        onClick={(e) => handleAddRating(e)}
                                    >
                                        COMPLETE
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUpRating;
