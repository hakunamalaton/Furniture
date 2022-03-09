import { React, useState } from "react";
import "../css/rating.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import { faThumbsUp } from "@fortawesome/fontawesome-free-solid";
function Rating() {
    const [pick, setPick] = useState(0);
    const listBtn = [
        "All",
        "5 Stars",
        "4 Stars",
        "3 Stars",
        "2 Stars",
        "1 Star",
        "Have comment",
        "Have image or video",
    ];
    const listNum = [
        150,
        50,
        40,
        30,
        20,
        10,
        60,
        90,
    ];
    const handleClick = (props) => {
        setPick(props);
    };

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
            )
        }
        else if (index >0 && index < 6) {
            return (
                <div
                    key={index}
                    className="col-3 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center"
                    id={pick === index ? "pick" : "nonPick"}
                    onClick={() => handleClick(index)}
                >
                {item + " (" + listNum[index] + ")"}
                </div>
            )
        }
        else {
            return (
                <div
                    key={index}
                    className="col-5 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center"
                    id={pick === index ? "pick" : "nonPick"}
                    onClick={() => handleClick(index)}
                >
                {item + " (" + listNum[index] + ")"}
                </div>
            )
        }
    }
    return (
        <div class="container-fluid d-flex justify-content-center bg-warning">
            <div className="col-8 bg-white">
                <div className="container">
                    <div className="row rating-head">
                        <p>RATING PRODUCT</p>
                    </div>
                    <div className="row rating-overview py-4 border border-dark">
                        <div className="col-4 text-warning d-flex align-items-center">
                            <div className="col">
                                <div className="row align-items-end justify-content-center">
                                    <p class="rating-score">4,9</p>{" "}
                                    <p class="rating-score-out-of"> / 5</p>
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
                                {/* <div
                                    className="col-2 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center "
                                    id={pick1 ? "pick" : "nonPick"}
                                    onClick={() => {
                                        setPick1(true);
                                        setPick2(false);
                                        setPick3(false);
                                        setPick4(false);
                                        setPick5(false);
                                        setPick6(false);
                                        setPick7(false);
                                        setPick8(false);
                                    }}
                                >
                                All
                                </div> */}
                                {/* <div
                                    className="col-3 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center "
                                    id={pick2 ? "pick" : "nonPick"}
                                    onClick={() => {
                                        setPick2(true);
                                        setPick1(false);
                                        setPick3(false);
                                        setPick4(false);
                                        setPick5(false);
                                        setPick6(false);
                                        setPick7(false);
                                        setPick8(false);
                                    }}
                                >
                                    5 Stars (50)
                                </div>
                                <div
                                    className="col-3 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center "
                                    id={pick3 ? "pick" : "nonPick"}
                                    onClick={() => {
                                        setPick3(true);
                                        setPick2(false);
                                        setPick1(false);
                                        setPick4(false);
                                        setPick5(false);
                                        setPick6(false);
                                        setPick7(false);
                                        setPick8(false);
                                    }}
                                >
                                    4 Stars (40)
                                </div>
                                <div
                                    className="col-3 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center "
                                    id={pick4 ? "pick" : "nonPick"}
                                    onClick={() => {
                                        setPick4(true);
                                        setPick2(false);
                                        setPick3(false);
                                        setPick1(false);
                                        setPick5(false);
                                        setPick6(false);
                                        setPick7(false);
                                        setPick8(false);
                                    }}
                                >
                                    3 Stars (30)
                                </div>
                                <div
                                    className="col-3 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center "
                                    id={pick5 ? "pick" : "nonPick"}
                                    onClick={() => {
                                        setPick5(true);
                                        setPick2(false);
                                        setPick3(false);
                                        setPick4(false);
                                        setPick1(false);
                                        setPick6(false);
                                        setPick7(false);
                                        setPick8(false);
                                    }}
                                >
                                    2 Stars (20)
                                </div>
                                <div
                                    className="col-3 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center "
                                    id={pick6 ? "pick" : "nonPick"}
                                    onClick={() => {
                                        setPick6(true);
                                        setPick2(false);
                                        setPick3(false);
                                        setPick4(false);
                                        setPick5(false);
                                        setPick1(false);
                                        setPick7(false);
                                        setPick8(false);
                                    }}
                                >
                                    1 Stars (10)
                                </div>
                                <div
                                    className="col-5 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center "
                                    id={pick7 ? "pick" : "nonPick"}
                                    onClick={() => {
                                        setPick7(true);
                                        setPick2(false);
                                        setPick3(false);
                                        setPick4(false);
                                        setPick5(false);
                                        setPick6(false);
                                        setPick1(false);
                                        setPick8(false);
                                    }}
                                >
                                    Have comment (10000)
                                </div>
                                <div
                                    className="col-6 btn rounded-0 py-1 m-1 d-flex justify-content-center align-items-center "
                                    id={pick8 ? "pick" : "nonPick"}
                                    onClick={() => {
                                        setPick8(true);
                                        setPick2(false);
                                        setPick3(false);
                                        setPick4(false);
                                        setPick5(false);
                                        setPick6(false);
                                        setPick7(false);
                                        setPick1(false);
                                    }}
                                >
                                    Have image or video (100)
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="row py-3 rating-cmt-list">
                        <div className="col d-flex bg-white rating">
                            <div className="col-1 rating-avatar">
                                <img
                                    src="https://i.imgur.com/UikkLus.jpg?1"
                                    class="img-fluid p-2 rounded-circle"
                                    alt="img-reviewer"
                                />
                            </div>
                            <div className="col-11 rating-main">
                                <div className="row font-weight-bold rating-author-name">
                                    Lam Thanh Duong
                                </div>
                                <div className="row text-warning rating-score">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="row text-secondary rating-time py-2">
                                    2022-02-04 23:59 | Category: Ebony, size 2
                                    meters
                                </div>
                                <div className="row pb-2 rating-cmt">
                                    Photos and videos are for the purpose of
                                    collecting coins only. But the item is also
                                    very beautiful, so buy it, everyone
                                </div>
                                <div className="row rating-list-img">
                                    <img
                                        src="https://i.imgur.com/5EtVc9Y.png"
                                        class="img-fluid col-1 p-2"
                                        alt="..."
                                    />
                                    <img
                                        src="https://i.imgur.com/pkyKkCi.png"
                                        class="img-fluid col-1 p-2"
                                        alt="..."
                                    />
                                    <img
                                        src="https://i.imgur.com/xgjF3lk.png"
                                        class="img-fluid col-1 p-2"
                                        alt="..."
                                    />
                                </div>
                                <div className="row rating-action align-items-center">
                                    <div className="btn text-secondary">
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </div>
                                    <div className="text-secondary">
                                        Useful ?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rating;
