import { React, useState, useEffect } from "react";
import "../css/rating.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import listBtn from "../dataRatingFake/dataRatingCategory.json";
import listImageUser from "../dataRatingFake/imageUser.json";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const axios = require("axios");
function Rating({id, averageScore}) {
    const [dataRating, setDataRating] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}/ratings`)
            .then(res => setDataRating(res.data))
            .catch(err => console.error("Đây là lỗi: " + err));
    }, [])
    

    const [pick, setPick] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const countPage = 5;

    const handleClick = (props) => {
        setPick(props);
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
        let restScore = 5 - Math.round(props);
        for (let i = 0; i < Math.round(props); i++) {
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
                    className="col-5 col-sm-3 col-md-2 col-lg-2 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center"
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
                    className="col-5 col-sm-3 col-md-4 col-lg-3 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center"
                    id={pick === index ? "pick" : "nonPick"}
                    onClick={() => handleClick(index)}
                >
                    {item}
                </div>
            );
        } else if (index === 6) {
            return (
                <div
                    key={index}
                    className="col-11 col-sm-5 col-md-6 col-lg-5 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center"
                    id={pick === index ? "pick" : "nonPick"}
                    onClick={() => handleClick(index)}
                >
                    {item}
                </div>
            );
        } else {
            return (
                <div
                    key={index}
                    className="col-11 col-sm-5 col-md-7 col-lg-6 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center"
                    id={pick === index ? "pick" : "nonPick"}
                    onClick={() => handleClick(index)}
                >
                    {item}
                </div>
            );
        }
    };
    const productRating = (item, index) => {
        return (
            <div className="col-12 d-block d-md-flex bg-white rating" key={index}>
                <div className="col-8 col-md-2 col-lg-1 px-md-0 pt-2 pt-md-0 d-flex justify-content-center d-md-block rating-avatar mx-auto">
                    <img
                        src={listImageUser[Math.floor(Math.random() * 20)]}
                        className="img-fluid p-md-3 p-lg-0 mt-lg-2 rounded-circle avatar-author"
                        alt="img-reviewer"
                    />
                </div>
                <div className="col-12 col-md-10 p-2 rating-main">
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
                                    className="img-fluid col-2 col-lg-1 p-0 m-1"
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
                        <div className="d-block d-md-flex rating-overview py-4 border border-dark">
                            <div className="col-12 col-md-4 text-warning d-flex align-items-center">
                                <div className="col product-rating-score">
                                    <div className="row align-items-end justify-content-center">
                                        <p className="rating-score mb-0">
                                            {averageScore}
                                        </p>
                                        <p className="rating-score-out-of mb-0">
                                            / 5
                                        </p>
                                    </div>
                                    <div className="row rating-star justify-content-center">
                                        {starAvgScore(averageScore)}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="row categories justify-content-around justify-content-md-start">
                                    {listBtn.map(categories)}
                                </div>
                            </div>
                        </div>
                        <div className="row py-3 rating-cmt-list">
                            {dataRating && dataRating
                                .slice(
                                    (currentPage - 1) * countPage,
                                    currentPage * countPage
                                )
                                .map(productRating)}
                        </div>
                        <div className="pagination-product-rating">
                            <ul className="pagination justify-content-center">
                                {dataRating && paginationRating(dataRating)}
                            </ul>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Rating;
