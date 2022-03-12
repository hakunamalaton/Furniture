import { React, useState } from "react";
import "../css/rating.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import { faThumbsUp } from "@fortawesome/fontawesome-free-solid";
import listBtn from "../dataRatingFake/dataRatingCategory.json";
import listRating from "../dataRatingFake/dataProductRating.json";
import Header from "../../Header/Js/Header";
function Rating() {
    const [pick, setPick] = useState(0);
    const [changePage, setChangePage] = useState(1);
    const handleClick = (props) => {
        setPick(props);
    };
    const handleChangePage = (index, maxIndex) => {
        if (index === 0) {
            if (changePage === 1) {return}
            setChangePage(changePage - 1);
        } else if (index === maxIndex) {
            if (changePage === maxIndex - 1) {return}
            setChangePage(changePage + 1);
        } else {
            setChangePage(index);
        }
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
            <div className="col-12 d-flex bg-white rating" key={index}>
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
                        <div
                            className="btn"
                            id={
                                item.listLike.indexOf("Lam Thanh Duong") !== -1
                                    ? "like"
                                    : "nonLike"
                            }
                            onClick={() => {
                                alert("Liked, thank you.");
                            }}
                        >
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                        <div className="text-secondary">
                            {item.listLike.indexOf("Lam Thanh Duong") !== -1
                                ? item.listLike.length
                                : "Useful ?"}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    function paginationRating(props) {
        if (props.length !== 0) {
            const countPage = Math.ceil(props.length / 5);
            const listPage = [];
            listPage.push("Prev");
            for (let i = 0; i < countPage; i++) {
                listPage.push(i + 1);
            }
            listPage.push("Next");
            return listPage.map((item, index) => (
                <li className="page-item" key={index}>
                    <p
                        className="btn rounded-0 border border-0 page-link"
                        id={
                            changePage === index &&
                            changePage > 0 &&
                            changePage < listPage.length - 1
                                ? "change"
                                : "nonChange"
                        }
                        onClick={() => handleChangePage(index, listPage.length - 1)}
                    >
                        {item}
                    </p>
                </li>
            ));
        }
    }
    return (
        <div className="ratingComponent">
            <Header />
            <div className="container-fluid d-flex justify-content-center bg-warning">
                <div className="col-8 bg-white">
                    <div className="container">
                        <div className="row rating-head">
                            <h5>RATING PRODUCT</h5>
                        </div>
                        <div className="row rating-overview py-4 border border-dark">
                            <div className="col-4 text-warning d-flex align-items-center">
                                <div className="col">
                                    <div className="row align-items-end justify-content-center">
                                        <p className="rating-score">4,9</p>
                                        <p className="rating-score-out-of">
                                            / 5
                                        </p>
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
                                {paginationRating(listRating)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rating;
