import { React, useState } from "react";
import "../css/rating.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import { faThumbsUp } from "@fortawesome/fontawesome-free-solid";
import listBtn from "../dataRatingFake/dataRatingCategory.json"
import listRating from "../dataRatingFake/dataProductRating.json"
function Rating() {
    const [pick, setPick] = useState(0);
    const [like, setLike] = useState(0);
    const handleClick = (props) => {
        setPick(props);
    };
    const handleLike = (props) => {
        setPick(1);
    };
    function starScore(props) {
        const divElement = [];
        for (let i = 1; i <= props; i++) {
            divElement.push(<FontAwesomeIcon icon={faStar} />);
        }
        return divElement.map((item, index) => <div key={index}>{item}</div>);
    }
    const categories = (item, index) => {
        if (index === 0) {
            return (
                <div
                    key={index}
                    className="col-2 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center"
                    id={pick === index ? "pick" : "nonPick"}
                    onClick={() => handleClick(index)}
                >
                    {item.title}
                </div>
            );
        } else if (index > 0 && index < 6) {
            return (
                <div
                    key={index}
                    className="col-3 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center"
                    id={pick === index ? "pick" : "nonPick"}
                    onClick={() => handleClick(index)}
                >
                    {item.title + " (" + item.value + ")"}
                </div>
            );
        } else {
            return (
                <div
                    key={index}
                    className="col-5 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center"
                    id={pick === index ? "pick" : "nonPick"}
                    onClick={() => handleClick(index)}
                >
                    {item.title + " (" + item.value + ")"}
                </div>
            );
        }
    };
    const productRating = (item, index) => {
        return (
            <div className="row bg-white rating" key={index}>
                <div className="col-1 rating-avatar">
                    <img
                        src={item.avatar}
                        className="img-fluid p-2 rounded-circle"
                        alt="img-reviewer"
                    />
                </div>
                <div className="col-11 rating-main">
                    <div className="row font-weight-bold rating-author-name">
                        {item.name}
                    </div>
                    <div className="row text-warning rating-score">
                        {starScore(item.score)}
                    </div>
                    <div className="row text-secondary rating-time py-2">
                        {item.time}
                    </div>
                    <div className="row pb-2 rating-cmt">
                        {item.description}
                    </div>
                    <div className="row rating-list-img">
                        {item.listImg.map((i, index) => {
                            return (
                                <img
                                    key={index}
                                    src={i}
                                    className="img-fluid col-1 p-2"
                                    alt={"Image product rating " + index}
                                />
                            );
                        })}
                    </div>
                    <div className="row rating-action align-items-center">
                        <div className="btn text-secondary">
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                        <div className="text-secondary">Useful ?</div>
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div className="container-fluid d-flex justify-content-center bg-warning">
            <div className="col-8 bg-white">
                <div className="container">
                    <div className="row rating-head">
                        <p>RATING PRODUCT</p>
                    </div>
                    <div className="row rating-overview py-4 border border-dark">
                        <div className="col-4 text-warning d-flex align-items-center">
                            <div className="col">
                                <div className="row align-items-end justify-content-center">
                                    <p className="rating-score">4,9</p>{" "}
                                    <p className="rating-score-out-of"> / 5</p>
                                </div>
                                <div className="row rating-star justify-content-center">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row categories">
                                {listBtn.map(categories)}
                            </div>
                        </div>
                    </div>
                    <div className="row py-3 rating-cmt-list">
                        {listRating.map(productRating)}
                    </div>
                    <div className="pagination-product-rating">
                        <ul className="pagination justify-content-end">
                            <li className="page-item">
                                <p className="page-link">Previous</p>
                            </li>
                            <li className="page-item">
                                <p className="page-link">1</p>
                            </li>
                            <li className="page-item">
                                <p className="page-link">2</p>
                            </li>
                            <li className="page-item">
                                <p className="page-link">3</p>
                            </li>
                            <li className="page-item">
                                <p className="page-link">Next</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rating;
