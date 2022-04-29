import { useEffect, useState } from "react";
import style from "../css/transactionHistory.module.css";
import Header from "../../Header/Js/Header";
import Footer from "../../Footer/Js/Footer";
import buttons from "../data/orderCategory.json";
import PopUpRating from "../../Rating/js/popUpRating";

const axios = require("axios");

function TransactionHistory() {
    const [dataOrderList, setDataOrderList] = useState([]);
    const [dataOrderDetailList, setDataOrderDetailList] = useState([]);
    const [dataDetailList, setDataDetailList] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/users/3/orders`)
            .then((res) => {
                setDataOrderList(res.data.orders.map((item) => item.id));
            })
            .catch((err) => console.error("Đây là lỗi: " + err));
    }, []);

    useEffect(() => {
        let len = dataOrderList.length;
        let arrOrder = [];
        for (let i = 0; i < len; i++) {
            axios
                .get(`http://localhost:8000/orders/${dataOrderList[i]}`)
                .then((res) => {
                    arrOrder.push(res.data);
                    setDataOrderDetailList(() => [...arrOrder]);
                })
                .catch((err) => console.error("Đây là lỗi: " + err));
        }
    }, [dataOrderList]);
    useEffect(() => {
        let listOrder = dataOrderDetailList;
        let lenOrder = listOrder.length;
        let arr1 = [];
        for (let i = 0; i < lenOrder; i++) {
            let listProduct = listOrder[i].detail_information;
            let lenProduct = listProduct.length;
            let arr2 = [];
            for (let k = 0; k < lenProduct; k++) {
                axios
                    .get(
                        `http://localhost:8000/products/${listProduct[k].product_id}`
                    )
                    .then((res) => {
                        arr2.push({
                            ...res.data,
                            size: listProduct[k].size,
                            color: listProduct[k].color,
                            quantity: listProduct[k].quantity,
                        });
                    })
                    .catch((err) => console.error("Đây là lỗi: " + err));
            }
            arr1.push({order: listOrder[i].order, product: arr2})
        }
        setDataDetailList([...arr1])
    }, [dataOrderDetailList]);
    console.log(dataDetailList)
    const [pick, setPick] = useState(0);
    const handleFilter = (index) => {
        setPick(index);
    };
    const infoOrder = (item, index) => {
        return (
            <div
                className={`order_${index + 1} ${style.order} my-3`}
                key={index}
            >
                <div
                    className={`${style.transBody_titleOrder} d-flex justify-content-between p-3`}
                >
                    <div className="col-10">
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
                    <div className="col-2 d-flex align-items-center justify-content-center">
                        <div
                            className={`text-white rounded col-10 d-flex align-items-center justify-content-center p-1 ${
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
                    {item.product &&
                        showListProduct(item.product, item.order.status)}
                </div>
                <div className={`d-flex justify-content-end`}>
                    <div className="col-6 d-flex justify-content-end p-1">
                        <h5>{`Total price: $ ${item.order.total_price}`}</h5>
                    </div>
                </div>
                <div
                    className={`${
                        item.status === "Evaluated" || item.status === "Shipped"
                            ? "d-flex"
                            : "d-none"
                    } justify-content-end p-1`}
                >
                    <div className="btn btn-outline-primary">BUY AGAIN</div>
                </div>
            </div>
        );
    };
    function infoProduct(status, item, index) {
        return (
            // <div key={index} className="row col-12 m-1">
            //     <div className="col-2">
            //         <img
            //             src={item.image[0]}
            //             className="img-fluid p-1"
            //             alt="img-product"
            //         />
            //     </div>
            //     <div className="col-10 d-flex justify-content-between">
            //         <div className="col-10">
            //             <div className="row font-weight-bold">{item.name}</div>
            //             <div className="row text-secondary">
            //                 {`Category: ${item.color}, ${item.size}`}
            //             </div>
            //             <div className="row">{`Quantity: ${item.quantity}`}</div>
            //         </div>
            //         <div className="col-2 d-block">
            //             <div className="d-flex justify-content-center align-items-center">
            //                 {`${item.price} USD`}
            //             </div>
            //             <div
            //                 className={`justify-content-center ${
            //                     status === "Shipped" ? "d-flex" : "d-none"
            //                 }`}
            //             >
            //                 <PopUpRating
            //                     id={item.id}
            //                     image={item.image[0]}
            //                     name={item.name}
            //                     category={`${item.color}, ${item.size}`}
            //                 />
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div>a</div>
        );
    }
    const categories = (item, index) => {
        return (
            <div
                key={index}
                className={`col-2 btn m-2 rounded-0 d-flex justify-content-center align-items-center ${
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
    function showListProduct(array, status) {
        console.log(array)
        if (array.length === 0) {
            return (
                <div className="d-flex justify-content-center">
                    <h5>No have product.</h5>
                </div>
            );
        } else {
            return array.map((product, index) => {
                return infoProduct(status, product, index);
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
                    {showListOrder(dataDetailList)}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TransactionHistory;
