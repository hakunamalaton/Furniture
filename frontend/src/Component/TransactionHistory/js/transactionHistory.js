import { useLayoutEffect, useState } from "react";
import style from "../css/transactionHistory.module.css";
import Header from "../../Header/Js/Header";
import Footer from "../../Footer/Js/Footer";
import orders from "../data/order.json";
import products from "../data/product.json";
import orderProducts from "../data/orderProduct.json";
import buttons from "../data/orderCategory.json";
import PopUpRating from "../../Rating/js/popUpRating";
function TransactionHistory() {
    const [pick, setPick] = useState(0);
    const [orderList, setOrderList] = useState([]);
    const handleFilter = (index) => {
        setPick(index);
    };
    useLayoutEffect(() => {
        const listOrderExpand = [];
        const lenOrders = orders.length;
        for (let index = 0; index < lenOrders; index++) {
            let idProducts = orderProducts.filter(
                (item) => item.order_id === orders[index].id
            );
            let listItemTemp = [];
            const lenIdProduct = idProducts.length;
            for (let i = 0; i < lenIdProduct; i++) {
                let items = products.filter(
                    (item) => item.id === idProducts[i].product_id
                );
                let [item] = items;
                listItemTemp[i] = {
                    ...item,
                    size: idProducts[i].size,
                    color: idProducts[i].color,
                    quantity: idProducts[i].quantity,
                };
            }
            listOrderExpand.push({ ...orders[index], products: listItemTemp });
        }
        setOrderList([...listOrderExpand]);
    }, []);
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
                            <h5>{`Order number: ${index}`}</h5>
                        </div>
                        <div className="row">
                            <h6>{`Purchase date: ${item.created_at}`}</h6>
                        </div>
                        <div
                            className={`row ${
                                item.status === "Shipped" ? "d-flex" : "d-none"
                            }`}
                        >
                            <h6>{`Received date: ${item.updated_at}`}</h6>
                        </div>
                        <div className="row">
                            <h6>{`Address: ${item.address}`}</h6>
                        </div>
                        <div className="row">
                            <h6>{`Description: ${item.description}`}</h6>
                        </div>
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-center">
                        <div
                            className={`text-white rounded col-10 d-flex align-items-center justify-content-center p-1 ${
                                item.status === "Shipped"
                                    ? "bg-success"
                                    : item.status === "Paid"
                                    ? "bg-warning"
                                    : item.status === "Evaluated"
                                    ? "bg-info"
                                    : "bg-danger"
                            }`}
                        >
                            {item.status}
                        </div>
                    </div>
                </div>
                <div className={style.transBody_infoProduct}>
                    {item.products.map((product, index) => infoProduct(item.status, product, index))}
                </div>
                <div
                    className={`d-flex justify-content-end`}
                >
                    <div className="col-6 d-flex justify-content-end p-1">
                        <h5>{`Total price: $ ${item.total_price}`}</h5>
                    </div>
                </div>
                <div className={`${item.status === "Evaluated" || item.status === "Shipped" ? "d-flex" : "d-none"} justify-content-end p-1`}>
                    <div className="btn btn-outline-primary">
                        BUY AGAIN
                    </div>
                </div>
            </div>
        );
    };
    const infoProduct = (status, item, index) => {
        return (
            <div key={index} className="row col-12 m-1">
                <div className="col-2">
                    <img
                        src={item.image[0] ?? item.image[0]}
                        className="img-fluid p-1"
                        alt="img-product"
                    />
                </div>
                <div className="col-10 d-flex justify-content-between">
                    <div className="col-10">
                        <div className="row font-weight-bold">{item.name}</div>
                        <div className="row text-secondary">
                            {`Category: ${item.color}, ${item.size}`}
                        </div>
                        <div className="row">{`Quantity: ${item.quantity}`}</div>
                    </div>
                    <div className="col-2 d-block">
                        <div className="d-flex justify-content-center align-items-center">
                            {`$ ${item.price}`}
                        </div>
                        <div className={`justify-content-center ${status === "Shipped" ? "d-flex" : "d-none"}`}>
                            <PopUpRating
                            id = {6}
                            image={item.image[0]}
                            name={item.name}
                            category={`${item.color}, ${item.size}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
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
                <div className="transBody">{orderList.map(infoOrder)}</div>
            </div>
            <Footer />
        </div>
    );
}

export default TransactionHistory;
