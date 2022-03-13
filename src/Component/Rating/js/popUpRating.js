import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faVideo,
    faCamera,
} from "@fortawesome/fontawesome-free-solid";
import "../css/popUpRating.css";
function PopUpRating() {
    return (
        <div className="container rating-popup-form border border-secondary d-flex justify-content-center">
            <div className="col-11 bg-white p-3">
                <div className="row rating-popup-form-header">
                    <h5>Rating Product</h5>
                </div>
                <div className="row rating-popup-form-product py-3">
                    <div className="col-2 product-img">
                        <img
                            src="https://i.imgur.com/Q12CDlu.png"
                            className="img-fluid"
                            alt="img-product"
                        />
                    </div>
                    <div className="col-10 product-info">
                        <div className="row product-name">
                            <h6>Josie Upholstered Low Profile Platform Bed</h6>
                        </div>
                        <div className="row product-category">
                            <p>Category: Light Gray, Full </p>
                        </div>
                    </div>
                </div>
                <div className="rating-popup-form-body">
                    <form action="#" method="post">
                        <div class="form-group rating-choose-score text-secondary d-flex justify-content-center">
                            <FontAwesomeIcon icon={faStar} className="icon-star-score" data-toggle="tooltip"
                                data-placement="top"
                                title="So Bad"/>
                            <FontAwesomeIcon icon={faStar} className="icon-star-score" data-toggle="tooltip"
                                data-placement="top"
                                title="Poor"/>
                            <FontAwesomeIcon icon={faStar} className="icon-star-score" data-toggle="tooltip"
                                data-placement="top"
                                title="Avarage"/>
                            <FontAwesomeIcon icon={faStar} className="icon-star-score"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Good"/>
                            <FontAwesomeIcon icon={faStar} className="icon-star-score" data-toggle="tooltip"
                                data-placement="top"
                                title="Excellent"/>
                        </div>
                        <div class="form-group rating-enter-cmt">
                            <textarea
                                type="content-cmt"
                                class="form-control"
                                id="content-cmt"
                                rows="4"
                                placeholder="Please share more things you like about this product"
                            />
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="custom-file col-2 m-1">
                                    <input
                                        type="file"
                                        class="custom-file-input"
                                        id="inputGroupFile04"
                                        accept="image/png, image/jpeg, image/jpg"
                                        multiple
                                    />
                                    <label
                                        class="custom-file-label text-primary border-primary rounded-0"
                                        for="inputGroupFile04"
                                    >
                                        <FontAwesomeIcon icon={faCamera} /> Add
                                        Images
                                    </label>
                                </div>
                                <div class="custom-file col-2 m-1 ">
                                    <input
                                        type="file"
                                        class="custom-file-input"
                                        id="inputGroupFile04"
                                        accept="video/mp4,video/x-m4v,video/*"
                                        multiple
                                    />
                                    <label
                                        class="custom-file-label text-primary border-primary rounded-0"
                                        for="inputGroupFile04"
                                    >
                                        <FontAwesomeIcon icon={faVideo} /> Add
                                        Video
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row rating-popup-form-footer justify-content-end">
                            <Link to="/">
                                <button className="btn btn-outline-secondary m-2">
                                    CANCEL
                                </button>
                            </Link>
                            <button type="submit" class="btn btn-primary m-2">
                                COMPLETE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopUpRating;
