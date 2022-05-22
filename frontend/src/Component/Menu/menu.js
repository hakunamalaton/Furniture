import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Header from "../Header/Js/Header";
import Footer from "../Footer/Js/Footer";
import "./menu.css";
import { useLayoutEffect } from "react";
const axios = require("axios");
const listBtn = ["All", "Bedding", "Chair", "Lamp", "Sofas"];
const Menu = ({ match }) => {
    const typeItem = match.params.type;
    const [totalPageProduct, setTotalPageProduct] = useState(0);
    const [category, setCategory] = useState("");
    const [categoryPage, setCategoryPage] = useState("");
    const [bgCategory, setBgCategory] = useState("https://i.imgur.com/T7b69BX.png");
    const [titleCategory, setTitleCategory] = useState("LIST OF PRODUCTS");
    const [page, setPage] = useState(1);
    const handleSwitchPage = (data) => {
        console.log(data);
        if (data === "prev" && page > 1) {
            setPage((prev) => prev - 1);
        } else if (data === "next" && page < totalPageProduct) {
            setPage((prev) => prev + 1);
        } else if (typeof data !== "string") {
            setPage(data);
        }
    };
    console.log(listBtn.indexOf(typeItem));
    const [pick, setPick] = useState(0);
    const [dataMenu, setDataMenu] = useState([]);
    const handleFilter = (index) => {
        setPick(index);
        switch (index) {
            case 0:
                setCategory("");
                setCategoryPage("");
                setBgCategory("https://i.imgur.com/T7b69BX.png");
                setTitleCategory("LIST OF PRODUCTS");
                break;
            case 1:
                setCategory("&type=Bedding");
                setCategoryPage("?type=Bedding");
                setBgCategory("https://i.imgur.com/jWaLsE6.png");
                setTitleCategory("LIST OF BEDDINGS");
                break;
            case 2:
                setCategory("&type=Chair");
                setCategoryPage("?type=Chair");
                setBgCategory("https://i.imgur.com/9PMKLux.png");
                setTitleCategory("LIST OF CHAIRS");
                break;
            case 3:
                setCategory("&type=Light");
                setCategoryPage("?type=Light");
                setBgCategory("https://i.imgur.com/b2tyaBl.png");
                setTitleCategory("LIST OF LAMPS");
                break;
            case 4:
                setCategory("&type=Sofas");
                setCategoryPage("?type=Sofas");
                setBgCategory("https://i.imgur.com/1B384Gh.png");
                setTitleCategory("LIST OF SOFAS");
                break;
            default:
                break;
        }
    };
    useLayoutEffect(() => {
        handleFilter(listBtn.indexOf(typeItem));
    }, [typeItem]);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/products${categoryPage}`)
            .then((res) => setTotalPageProduct(Math.ceil(res.data.total / 12)))
            .catch((err) => console.error("Đây là lỗi: " + err));
        axios
            .get(
                `http://localhost:8000/products?page=${page}&limit=12${category}`
            )
            .then((res) => {
                setDataMenu(res.data.data);
            })
            .catch((err) => console.error("Đây là lỗi: " + err));
    }, [page, category, categoryPage]);
    let listPage = [];
    for (let i = 0; i < totalPageProduct; i++) {
        listPage.push(1);
    }
    const categories = (item, index) => {
        return (
            <div
                key={index}
                className={`col-2 btn m-2 rounded-0 btnCategoryRating d-flex justify-content-center align-items-center ${
                    pick === index ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => handleFilter(index)}
            >
                {item}
            </div>
        );
    };

    return (
        <div className="menu-component">
            <Header />
            <div className="cart d-block pt-0">
                <div className = "top-category d-flex justify-content-center"
                    style={{
                        backgroundImage: "url(" +bgCategory + ")"
                    }}
                >
                    <div className="tieude pt-2 col-12 d-flex justify-content-center align-items-center title-category">
                        <div className="tieude1 col-12 d-flex justify-content-center">
                            <h1 className="fonts3 title-menu">{titleCategory}</h1>
                        </div>
                    </div>
                </div>
                <div className="list col-12 d-flex justify-content-around mt-3">
                    <div className="listsmall d-flex justify-content-around">
                        {listBtn.map(categories)}
                    </div>
                </div>
                <div className="row mx-0">
                    <div className="row-card-menu col-12 d-block d-md-flex justify-content-start">
                        {dataMenu &&
                            dataMenu.map((item, index) => {
                                return (
                                    <div
                                        className="col-12 col-md-6 col-lg-4 col-xl-3"
                                        key={index}
                                    >
                                        <Link
                                            to={`/product-detail/${item.id}`}
                                            className="text-decoration-none"
                                        >
                                            <div className="animation">
                                                <div className="img-container-menu m-3">
                                                    <div className="d-flex justify-content-end p-2">
                                                        <img
                                                            src={require("./Image/AddToCartButton.png")}
                                                            style={{
                                                                width: "45px",
                                                                height: "45px",
                                                            }}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="name-category">
                                                        <span className="item-category">
                                                            {item.category}
                                                        </span>
                                                        <br />
                                                        <span className="item-name col-12 d-flex justify-content-start">
                                                            <h4>{item.name}</h4>
                                                        </span>
                                                    </div>

                                                    <div className="item-image mt-5 d-flex justify-content-center pt-3">
                                                        <img
                                                            src={item.image[0]}
                                                            className="d-block w-100"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="item-price">
                                                        <div className="col-6 ml-2 mb-2 rounded-pill price p-2 d-flex justify-content-center">
                                                            <b>
                                                                {item.price} USD
                                                            </b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                    </div>

                    
                </div>
                <div>
                    <div className="pagination d-flex justify-content-lg-end justify-content-center">
                        <div className="next-prev"
                            onClick={() => {
                                handleSwitchPage("prev");
                            }}
                        >
                            Prev
                        </div>
                        {listPage.map((item, index) => {
                            return (
                                <div
                                    className={`${
                                        index + 1 === page ? "active" : ""
                                    } page page-${index + 1}`}
                                    key={index}
                                    onClick={() => {
                                        handleSwitchPage(index + 1);
                                    }}
                                >
                                    {index + 1}
                                </div>
                            );
                        })}
                        <div className="next-prev"
                            onClick={() => {
                                handleSwitchPage("next");
                            }}
                        >
                            Next
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Menu;
