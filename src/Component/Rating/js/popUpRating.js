import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faVideo, faCamera } from "@fortawesome/fontawesome-free-solid";
import "../css/popUpRating.css";
function PopUpRating({ image, name, category }) {
    const [currentScore, setCurrentScore] = useState(0);
    const [hoverScore, setHoverScore] = useState(undefined);
    const [popUp, setPopUp] = useState(false);

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
                        : "text-secondary"
                }
                style={{
                    cursor: "pointer",
                }}
            />
        ));
    };
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

    function clearImgPreview() {
        const listFilePrev = document.querySelectorAll(".preview-img-rating");
        listFilePrev.forEach(resetPreviewImg);
    };
    function resetPreviewImg(item, index) {
        item.style.display = "none";
    };
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
        const preview = document.querySelector("#img-rating-upload-" + (index + 1));
        var file = document.querySelector("#input-img-rating").files[index];
        console.log(file);
        let blobURL = URL.createObjectURL(file);
        preview.style.display = "block";
        preview.style.backgroundImage = "url(" + blobURL.toString() + ")";
    }
    function previewFileVideo() {
        let file = document.querySelector("#input-video-rating").files[0];
        let videoURL = URL.createObjectURL(file);
        document.querySelector("video").style.display = "block";
        document.querySelector("video").src = videoURL;
    }
    return (
        <div className="popup-rating-component">
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
                                    src={image}
                                    className="img-fluid"
                                    alt="img-product"
                                />
                            </div>
                            <div className="col-10 product-info">
                                <div className="row product-name">
                                    <h6>{name}</h6>
                                </div>
                                <div className="row product-category text-secondary">
                                    <p>Category: {category} </p>
                                </div>
                            </div>
                        </div>
                        <div className="rating-popup-form-body">
                            <form>
                                <div className="form-group rating-choose-score d-flex justify-content-center align-items-center">
                                    {pickStarScore()}
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
                                                    id="input-img-rating"
                                                    accept="image/png, image/jpeg, image/jpg"
                                                    multiple
                                                    onChange={previewListImg}
                                                />
                                                <label
                                                    className="custom-file-label text-primary border-primary rounded-0"
                                                    htmlFor="input-img-rating"
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
                                                    id="input-video-rating"
                                                    accept="video/mp4,video/x-m4v,video/*"
                                                    onChange={previewFileVideo}
                                                />
                                                <label
                                                    className="custom-file-label text-primary border-primary rounded-0"
                                                    htmlFor="input-video-rating"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faVideo}
                                                    />{" "}
                                                    Add Video
                                                </label>
                                            </div>
                                            <div className="col-4 d-flex align-items-center">
                                                <div className="row">
                                                    (Max is 5-images and
                                                    1-video.)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row preview-file-rating pt-2">
                                            {[0, 0, 0, 0, 0, 0].map(
                                                (_, index) => {
                                                    return index !== 5 ? (
                                                        <div
                                                            className="preview-img-rating"
                                                            id={
                                                                "img-rating-upload-" +
                                                                (index + 1)
                                                            }
                                                            style={{
                                                                display: "none",
                                                            }}
                                                        ></div>
                                                    ) : (
                                                        <video
                                                            className="preview-video-rating m-1"
                                                            style={{
                                                                display: "none",
                                                            }}
                                                            controls
                                                            autoPlay
                                                        >
                                                            Your browser does
                                                            not support the
                                                            video tag.
                                                        </video>
                                                    );
                                                }
                                            )}
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
