import { React, useState } from "react";
import "../css/rating.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import listBtn from "../dataRatingFake/dataRatingCategory.json";
import listRating from "../dataRatingFake/dataProductRating.json";
import PopUpRating from "./popUpRating"
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Rating() {
    let listNumKindRating = [];
    listNumKindRating.push(listRating.length);
    listNumKindRating.push(listRating.filter((r) => r.score === 5).length);
    listNumKindRating.push(listRating.filter((r) => r.score === 4).length);
    listNumKindRating.push(listRating.filter((r) => r.score === 3).length);
    listNumKindRating.push(listRating.filter((r) => r.score === 2).length);
    listNumKindRating.push(listRating.filter((r) => r.score === 1).length);
    listNumKindRating.push(
        listRating.filter((r) => r.description !== "").length
    );
    listNumKindRating.push(
        listRating.filter((r) => r.listImg.length !== 0).length
    );

    let sumScore = 0;
    for (let i = 0; i < listRating.length; i++) {
        sumScore += listRating[i].score;
    }
    let averageScore = Math.round((sumScore / listRating.length) * 100) / 100;

    const [pick, setPick] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [productRatings, setProductRatings] = useState(listRating);
    const countPage = 5;

    const handleClick = (props) => {
        setPick(props);
        if (props === 0) {
            setProductRatings(listRating);
        } else if (props === 1) {
            setProductRatings(listRating.filter((e) => e.score === 5));
        } else if (props === 2) {
            setProductRatings(listRating.filter((e) => e.score === 4));
        } else if (props === 3) {
            setProductRatings(listRating.filter((e) => e.score === 3));
        } else if (props === 4) {
            setProductRatings(listRating.filter((e) => e.score === 2));
        } else if (props === 5) {
            setProductRatings(listRating.filter((e) => e.score === 1));
        } else if (props === 6) {
            setProductRatings(listRating.filter((e) => e.description !== ""));
        } else if (props === 7) {
            setProductRatings(listRating.filter((e) => e.listImg.length !== 0));
        }
    };
    const handleCurrentPage = (index, maxIndex) => {
        if (index === 0) {
            if (currentPage === 1) {
                return;
            }
            setCurrentPage(currentPage - 1);
        } else if (index === maxIndex) {
            if (currentPage === maxIndex - 1) {
                return;
            }
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(index);
        }
    };
    function starScore(props) {
        const divElement = [];
        for (let i = 1; i <= props; i++) {
            divElement.push(<FontAwesomeIcon icon={faStar} />);
        }
        return divElement.map((item, index) => <div key={index}>{item}</div>);
    }
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
    const categories = (item, index) => {
        if (index === 0) {
            return (
                <div
                    key={index}
                    className="col-2 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center"
                    id={pick === index ? "pick" : "nonPick"}
                    onClick={() => handleClick(index)}
                >
                    {item}
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
                    {item + " (" + listNumKindRating[index] + ")"}
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
                    {item + " (" + listNumKindRating[index] + ")"}
                </div>
            );
        }
    };
    const productRating = (item, index) => {
        return (
            <div className="col-12 d-flex bg-white rating" key={index}>
                <div className="col-2 rating-avatar">
                    <img
                        src={item.avatar}
                        className="img-fluid p-4 rounded-circle"
                        alt="img-reviewer"
                    />
                </div>
                <div className="col-10 p-2 rating-main">
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
                            currentPage === index &&
                            currentPage > 0 &&
                            currentPage < listPage.length - 1
                                ? "change"
                                : "nonChange"
                        }
                        onClick={() =>
                            handleCurrentPage(index, listPage.length - 1)
                        }
                    >
                        {item}
                    </p>
                </li>
            ));
        }
    }
    return (
        <div className="rating-component">
            <div className="d-flex justify-content-center">
                <div className="col-12">
                        <div className="row rating-head pt-2">
                            <h5>RATING PRODUCT</h5>
                        </div>
                        <div className="row rating-overview py-4 border border-dark">
                            <div className="col-4 text-warning d-flex align-items-center">
                                <div className="col">
                                    <div className="row align-items-end justify-content-center">
                                        <p className="rating-score">
                                            {averageScore}
                                        </p>
                                        <p className="rating-score-out-of">
                                            / 5
                                        </p>
                                    </div>
                                    <div className="row rating-star justify-content-center">
                                        {starAvgScore(averageScore)}
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
                            {productRatings
                                .slice(
                                    (currentPage - 1) * countPage,
                                    currentPage * countPage
                                )
                                .map(productRating)}
                        </div>
                        <div className="pagination-product-rating">
                            <ul className="pagination justify-content-center">
                                {paginationRating(productRatings)}
                            </ul>
                        </div>
                    
                </div>
            </div>
            <PopUpRating image="https://i.imgur.com/Q12CDlu.png" name="Josie Upholstered Low Profile Platform Bed" category="Blue, Full"></PopUpRating>
        </div>
    );
}

export default Rating;
