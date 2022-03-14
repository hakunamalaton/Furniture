import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faVideo, faCamera } from "@fortawesome/fontawesome-free-solid";
import "../css/popUpRating.css";
function PopUpRating({ imageProduct, nameProduct, categoryProduct }) {
    const [currentScore, setCurrentScore] = useState(0);
    const [hoverScore, setHoverScore] = useState(undefined);
    const [popUp, setPopUp] = useState(false);
    const [upImageFile, setUpImageFile] = useState(false);
    const [upVideoFile, setUpVideoFile] = useState(false);
    function pickStarScore(props) {
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
                        : "text-secondary"
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
    const handlePopUp = () => {
        setPopUp(!popUp);
    };
    const handleMouseOver = (props) => {
        setHoverScore(props);
    };
    const handleMouseLeave = () => {
        setHoverScore(undefined);
    };
    function previewFileImg() {
        var preview = document.querySelector("#img-up-rating-1");
        document.querySelector("#img-up-rating-1").style.display = "block";
        var file = document.querySelector("#inputImageFile").files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            preview.src = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }
    function previewFileVideo() {
        let file = document.querySelector("#inputVideoFile").files[0];
        let blobURL = URL.createObjectURL(file);
        document.querySelector("video").style.display = "block";
        document.querySelector("video").src = blobURL;
    }
    return (
        <div className="popupRatingComponent">
            <div className="row">
                <div className="col-2">
                    <button className="btn btn-primary" onClick={handlePopUp}>
                        RATING PRODUCT
                    </button>
                </div>
            </div>
            <div className={popUp ? "open-popup-rating" : "close-popup-rating"}>
                <div className="rating-popup-overlay"></div>
                <div className="container rating-popup-form d-flex justify-content-center">
                    <div className="col-11 bg-white p-3">
                        <div className="row rating-popup-form-header">
                            <h5>RATING PRODUCT</h5>
                        </div>
                        <div className="row rating-popup-form-product py-3">
                            <div className="col-2 product-img">
                                <img
                                    src={imageProduct}
                                    className="img-fluid"
                                    alt="img-product"
                                />
                            </div>
                            <div className="col-10 product-info">
                                <div className="row product-name">
                                    <h6>{nameProduct}</h6>
                                </div>
                                <div className="row product-category text-secondary">
                                    <p>{categoryProduct} </p>
                                </div>
                            </div>
                        </div>
                        <div className="rating-popup-form-body">
                            <form>
                                <div className="form-group rating-choose-score d-flex justify-content-center align-items-center">
                                    {pickStarScore(currentScore)}
                                </div>
                                <div className="form-group rating-enter-cmt">
                                    <textarea
                                        type="content-cmt"
                                        className="form-control"
                                        id="content-cmt"
                                        rows="4"
                                        placeholder="Please share more things you like about this product"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="input-group col-12 d-inline-block">
                                        <div className="row">
                                            <div className="custom-file col-3 m-1 d-flex align-items-center">
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="inputImageFile"
                                                    accept="image/png, image/jpeg, image/jpg"
                                                    onChange={previewFileImg}
                                                />
                                                <label
                                                    className="custom-file-label text-primary border-primary rounded-0"
                                                    htmlFor="inputImageFile"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faCamera}
                                                    />{" "}
                                                    Add Images
                                                </label>
                                            </div>
                                            <div className="custom-file col-3 m-1 d-flex align-items-center">
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="inputVideoFile"
                                                    accept="video/mp4,video/x-m4v,video/*"
                                                    onChange={previewFileVideo}
                                                />
                                                <label
                                                    className="custom-file-label text-primary border-primary rounded-0"
                                                    htmlFor="inputVideoFile"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faVideo}
                                                    />{" "}
                                                    Add Video
                                                </label>
                                            </div>
                                            <div className="col-4 d-flex align-items-center">
                                                <div className="row">(Max is 5-images and 1-video.)</div>
                                            </div>
                                        </div>
                                        <div className="row previewFile pt-2">
                                            <div className="col-2">
                                                <img
                                                    src=""
                                                    alt="PreviewImage"
                                                    id="img-up-rating-1"
                                                    className="img-fluid"
                                                    style={{display:"none"}}
                                                />
                                            </div>
                                            <div className="col-2">
                                                <video
                                                    style={{display:"none"}}
                                                    controls
                                                    autoplay
                                                >
                                                    Your browser does not
                                                    support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row rating-popup-form-footer justify-content-end">
                                    <Link to="/">
                                        <button
                                            className="btn btn-outline-secondary m-2"
                                            onClick={handlePopUp}
                                        >
                                            CANCEL
                                        </button>
                                    </Link>
                                    <button
                                        type="submit"
                                        className="btn btn-primary m-2"
                                        onClick={handlePopUp}
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
