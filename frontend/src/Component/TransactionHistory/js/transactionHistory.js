import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../css/transactionHistory.module.css";
import Header from "../../Header/Js/Header";
import Footer from "../../Footer/Js/Footer";
import buttons from "../data/orderCategory.json";
import PopUpRating from "../../Rating/js/popUpRating";

const axios = require("axios");

function TransactionHistory() {
    /**
     * Backend return token = user's id
     */
    const idUser = useSelector((state) => state.account.token);
    const emailUser = useSelector((state) => state.account.email);
    const [pick, setPick] = useState(0);
    const [category, setCategory] = useState("");
    const handleFilter = (index) => {
        setPick(index);
        switch (index) {
            case 0:
                setCategory("");
                break;
            case 1:
                setCategory("?status=Payed");
                break;
            case 2:
                setCategory("?status=Shipped");
                break;
            case 3:
                setCategory("?status=Cancel");
                break;
            default:
                break;
        }
    };

    const [dataOrderList, setDataOrderList] = useState([]);
    const [dataOrderDetailList, setDataOrderDetailList] = useState([]);

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_SERVER_URL}/users/${idUser}/orders${category}`
            )
            .then((res) => {
                setDataOrderList(res.data.orders.map((item) => item.id));
            })
            .catch((err) => console.error("Đây là lỗi: " + err));
    }, [category, idUser]);

    useEffect(() => {
        setDataOrderDetailList([]);
        for (const key in dataOrderList) {
            axios
                .get(
                    `${process.env.REACT_APP_SERVER_URL}/orders/${dataOrderList[key]}`
                )
                .then((res) => {
                    setDataOrderDetailList((prev) => [...prev, res.data]);
                })
                .catch((err) => console.error("Đây là lỗi: " + err));
        }
        // const getDataOrderDetailList = async (id) => {
        //     try {
        //         const res = await axios.get(
        //             `${process.env.REACT_APP_SERVER_URL}/orders/${id}`
        //         );
        //         setDataOrderDetailList((prev) => [...prev, res.data]);
        //     } catch (e) {
        //         console.log(e);
        //     }
        // };
        // for (const key in dataOrderList) {
        //     getDataOrderDetailList(dataOrderList[key]);
        // }
    }, [dataOrderList]);

    const infoOrder = (item, index) => {
        return (
            <div
                className={`order_${index + 1} ${style.order} my-3`}
                key={index}
            >
                <div
                    className={`${style.transBody_titleOrder} d-flex justify-content-between p-3`}
                >
                    <div className="col-8 col-md-9 col-lg-10">
                        <div className="row">
                            <h5>{`Order number: ${item.order.id}`}</h5>
                        </div>
                        <div className="row">
                            <h6>{`Purchase date: ${item.order.created_at}`}</h6>
                        </div>
                        <div
                            className={`row ${
                                item.order.status === "Shipped" ||
                                item.order.status === "Evaluated"
                                    ? "d-flex"
                                    : "d-none"
                            }`}
                        >
                            <h6>{`Received date: ${item.order.updated_at}`}</h6>
                        </div>
                        <div className="row">
                            <h6>{`Address: ${item.order.address}`}</h6>
                        </div>
                        <div className="row">
                            <h6>{`Description: ${item.order.description}`}</h6>
                        </div>
                    </div>
                    <div className="col-4 col-md-3 col-lg-2 d-flex align-items-center justify-content-center">
                        <div
                            className={`${
                                style.statusOrder
                            } text-white rounded col-10 d-flex align-items-center justify-content-center p-1 ${
                                item.order.status === "Shipped"
                                    ? "bg-success"
                                    : item.order.status === "Payed"
                                    ? "bg-warning"
                                    : item.order.status === "Evaluated"
                                    ? "bg-info"
                                    : "bg-danger"
                            }`}
                        >
                            {item.order.status}
                        </div>
                    </div>
                </div>
                <div className={style.transBody_infoProduct}>
                    {item.detail_information &&
                        showListProduct(
                            item.detail_information,
                            item.order.status,
                            item.order.id,
                            emailUser
                        )}
                </div>
                <div
                    className={`d-flex justify-content-end align-items-center py-2`}
                >
                    <div className="col-6 d-flex justify-content-end">
                        <h5 className="m-0">{`Total price: ${item.order.total_price} USD`}</h5>
                    </div>
                    <div
                        className={`${
                            item.order.status === "Evaluated" ||
                            item.order.status === "Shipped"
                                ? "d-flex"
                                : "d-none"
                        } justify-content-end pr-2`}
                    >
                        <Link to="/menu/All">
                            <div
                                className={`btn ${
                                    style.btnBuyAgain
                                } btn-outline-primary ${
                                    item.order.status === "Evaluated" ||
                                    item.order.status === "Shipped"
                                        ? "d-flex"
                                        : "d-none"
                                }`}
                            >
                                BUY AGAIN
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
    function infoProduct(idOrder, status, item, index, emailUser, last) {
        return (
            <div
                key={index}
                className={`${style.infoProductCpn} row col-12 m-1`}
            >
                <div className="col-3 col-lg-2">
                    <img
                        src={item.image ?? item.image}
                        className="img-fluid p-1"
                        alt="img-product"
                    />
                </div>
                <div className="col-9 col-lg-10 d-flex justify-content-between">
                    <div className="col-9">
                        <div className="row font-weight-bold">{item.name}</div>
                        <div className="row text-secondary">
                            {`Category: ${item.color}, ${item.size}`}
                        </div>
                        <div className="row">{`Quantity: ${item.quantity}`}</div>
                    </div>
                    <div className="col-3 d-block">
                        <div className="d-flex justify-content-center align-items-center">
                            {`${item.price} USD`}
                        </div>
                        <div
                            className={`justify-content-center ${
                                status === "Shipped" ? "d-flex" : "d-none"
                            }`}
                        >
                            <PopUpRating
                                id={item.product_id}
                                idOrder={idOrder}
                                image={item.image}
                                name={item.name}
                                category={`${item.color}, ${item.size}`}
                                emailUser={emailUser}
                                last={last}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    const categories = (item, index) => {
        return (
            <div
                key={index}
                className={`col-2 btn m-2 rounded-0 ${
                    style.btnCategoryRating
                } d-flex justify-content-center align-items-center ${
                    pick === index ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => handleFilter(index)}
            >
                {item}
            </div>
        );
    };
    function showListOrder(array) {
        if (array.length === 0) {
            return (
                <div className="d-flex justify-content-center">
                    <h5>No have order.</h5>
                </div>
            );
        } else {
            return array.map(infoOrder);
        }
    }
    function showListProduct(array, status, idOrder, emailUser) {
        if (array.length === 0) {
            return (
                <div className="d-flex justify-content-center">
                    <h5>No have product.</h5>
                </div>
            );
        } else {
            var last = array.length;
            return array.map((product, index) => {
                return infoProduct(
                    idOrder,
                    status,
                    product,
                    index,
                    emailUser,
                    last
                );
            });
        }
    }
    return (
        <div className={style.transHisComponent}>
            <Header />
            <div className="container bg-white">
                <div className="transHisHeader">
                    <div className="headerTitle text-primary pt-2">
                        <h4>TRANSACTION HISTORY</h4>
                    </div>
                    <div className="row justify-content-center">
                        <div
                            className={`${style.filterOrder} d-flex col-11 justify-content-around mb-1`}
                        >
                            {buttons.map(categories)}
                        </div>
                    </div>
                </div>
                <div className="transBody">
                    {showListOrder(dataOrderDetailList)}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TransactionHistory;
