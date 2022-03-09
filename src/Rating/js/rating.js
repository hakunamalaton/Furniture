import React from "react";
import "../css/rating.css"
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/fontawesome-free-solid'
function Rating() {
    return (
        <div class="container-fluid d-flex justify-content-center">
            <div className="col-8">
                <div className="container">
                    <div className="row">
                        <p>RATING PRODUCT</p>
                    </div>
                    <div className="row rating-overview py-4 border border-1">
                        <div className="col-4 text-warning d-flex align-items-center">
                            <div className="col">
                                <div className="row align-items-end justify-content-center">
                                    <p>4,9</p> <p>/</p> <p>5</p>
                                </div>
                                <div className="row justify-content-center">
                                    <FontAwesomeIcon icon={faStar}/> 
                                    <FontAwesomeIcon icon={faStar}/> 
                                    <FontAwesomeIcon icon={faStar}/> 
                                    <FontAwesomeIcon icon={faStar}/> 
                                    <FontAwesomeIcon icon={faStar}/> 
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row categories">
                                <button className="col-2 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center border border-1 ">
                                    All
                                </button>
                                <button className="col-3 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center border border-1">
                                    5 Stars (50)
                                </button>
                                <button className="col-3 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center border border-1">
                                    4 Stars (40)
                                </button>
                                <button className="col-3 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center border border-1">
                                    3 Stars (30)
                                </button>
                                <button className="col-3 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center border border-1">
                                    2 Stars (20)
                                </button>
                                <button className="col-3 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center border border-1">
                                    1 Stars (10)
                                </button>
                                <button className="col-5 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center border border-1">
                                    Have comment (10000)
                                </button>
                                <button className="col-6 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center border border-1">
                                    Have image or video (100)
                                </button>
                            </div>
                        </div>    
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default Rating;
