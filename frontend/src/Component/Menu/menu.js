import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Header from "../Header/Js/Header";
import Footer from "../Footer/Js/Footer";
import "./menu.css";
import { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
const axios = require("axios");
const listBtn = ["All", "Bedding", "Chair", "Lamp", "Sofas"];
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const Menu = ({ match }) => {
    let typeItem = match.params.type;
    let nameItem = ""
    let nameItemPage = ""
    if (typeItem !== "All" && typeItem !== "Bedding" && typeItem !== "Chair" && typeItem !== "Sofas" && typeItem !== "Lamp") {
       nameItem = `&name=${typeItem}` 
       nameItemPage = `&name=${typeItem}` 
    }
    const [totalPageProduct, setTotalPageProduct] = useState(0);
    const [category, setCategory] = useState(typeItem === "Lamp" ? "&type=Light" : typeItem === "Bedding" ? "&type=Bedding" : typeItem === "Chair" ? "&type=Chair" : typeItem === "Sofas" ? "&type=Sofas" : "");
    const [categoryPage, setCategoryPage] = useState(typeItem === "Lamp" ? "?type=Light" : typeItem === "Bedding" ? "?type=Bedding" : typeItem === "Chair" ? "?type=Chair" : typeItem === "Sofas" ? "?type=Sofas" : "");
    if (categoryPage === "") {
        nameItemPage = `?name=${typeItem}`
    }
    const [filterOption, setFilterOption] = useState(0);
    const [bgCategory, setBgCategory] = useState(
        "https://i.imgur.com/PvYsFQu.png"
    );
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
    const [pick, setPick] = useState(0);
    const [dataMenu, setDataMenu] = useState([]);
    const handleFilter = (index) => {
        setPick(index);
        switch (index) {
            case 0:
                setCategory("");
                setCategoryPage("");
                setBgCategory("https://i.imgur.com/PvYsFQu.png");
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
            .get(`${SERVER_URL}/products${categoryPage}${nameItemPage}`)
            .then((res) => setTotalPageProduct(Math.ceil(res.data.total / 12)))
            .catch((err) => console.error("Đây là lỗi: " + err));
        axios
            .get(
                `${SERVER_URL}/products?page=${page}&limit=12${category}${nameItem}`
            )
            .then((res) => {
                if (filterOption === 0) {
                    setDataMenu(res.data.data)
                }
                if (filterOption === 1) {
                    setDataMenu(res.data.data.sort(function (a, b) {
                        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
                    }))
                }
                else if (filterOption === 2) {
                    setDataMenu(res.data.data.sort(function (a, b) {
                        return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1}))
                }
                else if (filterOption === 3) {
                    setDataMenu(res.data.data.sort(function (a, b) {return a.price - b.price}))
                }
                else if (filterOption === 4) {
                    setDataMenu(res.data.data.sort(function (a, b) {return b.price - a.price}))
                }
            })
            .catch((err) => console.error("Đây là lỗi: " + err));
        
    }, [page, category, categoryPage, filterOption, nameItem, nameItemPage]);
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
    const handleFilterProduct = (opt) => {
        setFilterOption(opt);
    };

    return (
        <div className="menu-component">
            <Header />
            <div className="cart d-block pt-0">
                <div
                    className="top-category d-flex justify-content-center"
                    style={{
                        backgroundImage: "url(" + bgCategory + ")",
                    }}
                >
                    <div className="tieude pt-2 col-12 d-flex justify-content-center align-items-center title-category">
                        <div className="tieude1 col-12 d-flex justify-content-center">
                            <h1 className="fonts3 title-menu">
                                {titleCategory}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col-12 px-0">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb rounded-0">
                            <li className="breadcrumb-item">
                                <Link to="/">BK Furniture</Link>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Products
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="list col-12 d-block d-md-flex justify-content-around mt-3">
                    <div className="listsmall col-12 col-md-10 d-flex justify-content-around">
                        {listBtn.map(categories)}
                    </div>
                    <div className="dropdown-filter col-md-2 px-0 d-flex justify-content-start align-items-center">
                        <div className="filter-btn d-flex justify-content-between">
                            <span className="">Filter</span>
                            <span><FontAwesomeIcon icon={faFilter} className="icon-filter" /></span>
                        </div>
                        <div className="filter-content">
                            <div onClick={() => {handleFilterProduct(0)}}>All</div>
                            <div onClick={() => {handleFilterProduct(1)}}>By name: A - Z</div>
                            <div onClick={() => {handleFilterProduct(2)}}>By name: Z - A</div>
                            <div onClick={() => {handleFilterProduct(3)}}>By price: Low - High</div>
                            <div onClick={() => {handleFilterProduct(4)}}>By price: High - Low</div>
                        </div>
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
                                                        <span className="col-12 item-category">
                                                            {item.category ===
                                                            "Light"
                                                                ? "Lamp"
                                                                : item.category}
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
                        <div
                            className="next-prev"
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
                        <div
                            className="next-prev"
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
