import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/popUpRating.css";
import { faCamera, faStar } from "@fortawesome/free-solid-svg-icons";
const axios = require("axios");

function PopUpRating({ id, image, name, category }) {
    const [currentScore, setCurrentScore] = useState(0);
    const [hoverScore, setHoverScore] = useState(undefined);
    const [popUp, setPopUp] = useState(false);
    let images=[];
    
    function handleAddRating(e) {
        let score = currentScore;
        let category = "5 stars";
        let description = document.getElementById("content-cmt").value;

        e.preventDefault();
        axios
            .post(`http://localhost:8000/products/${id}/ratings`, {
                email: "duong@gmail.com",
                description,
                image: images,
                category,
                star: score,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        window.location.href = "/transaction-history";
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
        setPopUp(!popUp);
    };
    const handleMouseOver = (props) => {
        setHoverScore(props);
    };
    const handleMouseLeave = () => {
        setHoverScore(undefined);
    };

    function clearImgPreview() {
        const listFilePrev = document.querySelectorAll(".preview-img-rating");
        listFilePrev.forEach(resetPreviewImg);
    }
    function resetPreviewImg(item, index) {
        item.style.display = "none";
        item.key = index;
    }
    function previewListImg() {
        clearImgPreview();
        const file = document.querySelector("#input-img-rating").files;
        if (file.length === 0) {
            return;
        }
        for (let i = 0; i < file.length; i++) {
            previewImg(i);
        }
    }
    function previewImg(index) {
        const preview = document.querySelector(
            "#img-rating-upload-" + (index + 1)
        );
        
        var file = document.querySelector("#input-img-rating").files[index];
        let blobURL = URL.createObjectURL(file);
        preview.style.display = "block";
        preview.style.backgroundImage = "url(" + blobURL.toString() + ")";
        let image = JSON.stringify(file);
        images.push(image);
    }
    return (
        <div className="popup-rating-component">
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-primary" onClick={handlePopUp}>
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
                                        id="content-cmt"
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
                                                    id="input-img-rating"
                                                    accept="image/png, image/jpeg, image/jpg"
                                                    multiple
                                                    onChange={previewListImg}
                                                />
                                                <label
                                                    className="custom-file-label text-primary border-primary rounded-0 d-flex justify-content-center align-items-center"
                                                    htmlFor="input-img-rating"
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
                                                    (Max is 6 images.)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row preview-file-rating pt-2">
                                            {[0, 0, 0, 0, 0, 0].map(
                                                (_, index) => {
                                                    return (
                                                        <div
                                                            className="m-1 preview-img-rating"
                                                            id={
                                                                "img-rating-upload-" +
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
                                            className="btn btn-secondary m-2"
                                            onClick={handlePopUp}
                                        >
                                            CANCEL
                                        </button>
                                    </Link>
                                    <button
                                        type="submit"
                                        className="btn btn-primary m-2"
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
