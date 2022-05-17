import { Link} from "react-router-dom";
import { React, useState, useEffect } from "react";
import Header from "../Header/Js/Header";
import Footer from "../Footer/Js/Footer";
import "./menu.css";
import CartButton from "./CartButton/CartButton";
import { useLayoutEffect } from "react";
const axios = require("axios");
const listBtn = ["All", "Bedding", "Chair", "Lamp", "Sofas"];
const Menu = ({match}) => {
    const typeItem = match.params.type;
    const [totalPageProduct, setTotalPageProduct] = useState(0);
    const [category, setCategory] = useState(`${typeItem === "all" ? "" : "&type=" + typeItem}`);
    const [categoryPage, setCategoryPage] = useState("");
    const [titleCategory, setTitleCategory] = useState("LIST OF PRODUCTS");
    const [page, setPage] = useState(1);
    const handleSwitchPage = (data) => {
        console.log(data)
        if (data === "prev" && page > 1) {
            setPage(prev => prev - 1);
        }
        else if (data === "next" && page < totalPageProduct) {
            setPage(prev => prev + 1);
        }
        else if (typeof data !== "string") {
            setPage(data)
        }
    }
    console.log(listBtn.indexOf(typeItem))
    const [pick, setPick] = useState(0);
    const [list1, setList1] = useState([]);
    const [list2, setList2] = useState([]);
    const [list3, setList3] = useState([]);
    const handleFilter = (index) => {
        setPick(index);
        switch (index) {
            case 0:
                setCategory("");
                setCategoryPage("");
                setTitleCategory("LIST OF PRODUCTS");
                break;
            case 1:
                setCategory("&type=Bedding");
                setCategoryPage("?type=Bedding");
                setTitleCategory("LIST OF BEDDINGS");
                break;
            case 2:
                setCategory("&type=Chair");
                setCategoryPage("?type=Chair");
                setTitleCategory("LIST OF CHAIRS");
                break;
            case 3:
                setCategory("&type=Light");
                setCategoryPage("?type=Light");
                setTitleCategory("LIST OF LAMPS");
                break;
            case 4:
                setCategory("&type=Sofas");
                setCategoryPage("?type=Sofas");
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
                setList1([])
                setList2([])
                setList3([])
                if (res.data.data.length <= 4) {
                    setList1(res.data.data.slice(0, res.data.data.length));
                } else if (res.data.data.length <= 8) {
                    setList1(res.data.data.slice(0, 4));
                    setList2(res.data.data.slice(4, res.data.data.length));
                } else {
                    setList1(res.data.data.slice(0, 4));
                    setList2(res.data.data.slice(4, 8));
                    setList3(res.data.data.slice(8, res.data.data.length));
                }
            })
            .catch((err) => console.error("Đây là lỗi: " + err));
        
    }, [page, category, categoryPage]);
    let listPage  = []
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

            <div className="cart d-block pt-2">
                <div className="tieude pt-2 rol-12 d-flex justify-content-center">
                    <div className="tieude1 rol-12 d-flex justify-content-center">
                        <h1 className="fonts3 tab">{titleCategory}</h1>
                    </div>
                </div>
                <div className="list rol-12 d-flex justify-content-center">
                    <div className="listsmall d-flex justify-content-around">
                        {listBtn.map(categories)}
                    </div>
                </div>
                <div className="row">
                    <div className="clearfix-menu padd  d-flex justify-content-start">
                        {list1 && list1.map((item, index) => {
                            return (
                                <div
                                    className="clearfix-menu padd m-1"
                                    key={index}
                                >
                                    <Link to={`/product-detail/${item.id}`}>
                                        <div className="animation">
                                            <div className="img-container-menu">
                                                <div className="ml-3">
                                                    <CartButton />
                                                </div>
                                                <div className="dt">
                                                    <span className="data1">
                                                        {item.category}
                                                    </span>
                                                    <br />
                                                    <span className="data2">
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <div className="money">
                                                    <span className="money1">
                                                        {item.price} USD
                                                    </span>
                                                </div>
                                                <div
                                                    className="image-menu image3"
                                                    style={{
                                                        backgroundImage: `url(${item.image[0]})`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    <div className="clearfix-menu padd  d-flex justify-content-start">
                        {list2 && list2.map((item, index) => {
                            return (
                                <div
                                    className="clearfix-menu padd m-1 d-flex justify-content-start"
                                    key={index}
                                >
                                    <Link to={`/product-detail/${item.id}`}>
                                        <div className="animation">
                                            <div className="img-container-menu">
                                                <div className="ml-3">
                                                    <CartButton />
                                                </div>
                                                <div className="dt">
                                                    <span className="data1">
                                                        {item.category}
                                                    </span>
                                                    <br />
                                                    <span className="data2">
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <div className="money">
                                                    <span className="money1">
                                                        {item.price} USD
                                                    </span>
                                                </div>
                                                <div
                                                    className="image-menu image3"
                                                    style={{
                                                        backgroundImage: `url(${item.image[0]})`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    <div className="clearfix-menu padd  d-flex justify-content-start">
                        {list3 && list3.map((item, index) => {
                            return (
                                <div
                                    className="clearfix-menu padd m-1 d-flex justify-content-start"
                                    key={index}
                                >
                                    <Link to={`/product-detail/${item.id}`}>
                                        <div className="animation">
                                            <div className="img-container-menu">
                                                <div className="ml-3">
                                                    <CartButton />
                                                </div>
                                                <div className="dt">
                                                    <span className="data1">
                                                        {item.category}
                                                    </span>
                                                    <br />
                                                    <span className="data2">
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <div className="money">
                                                    <span className="money1">
                                                        {item.price} USD
                                                    </span>
                                                </div>
                                                <div
                                                    className="image-menu image3"
                                                    style={{
                                                        backgroundImage: `url(${item.image[0]})`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <div className="pagination" id="rep1">
                        <div onClick={() => {handleSwitchPage("prev")}}>Prev</div>
                        {listPage.map((item, index) => {
                            return (
                                <div className={`${index + 1 === page ? "active" : ""} page-${index + 1}`} key={index} onClick={() => {handleSwitchPage(index + 1)}}>
                                    {index + 1}
                                </div>
                            );
                        })}
                        <div onClick={() => {handleSwitchPage("next")}}>Next</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Menu;
