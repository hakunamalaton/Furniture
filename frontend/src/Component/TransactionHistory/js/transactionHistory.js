import { useState } from "react";
import style from "../css/transactionHistory.module.css";
import Header from "../../Header/Js/Header";
import Footer from "../../Footer/Js/Footer";
import orders from "../data/order.json";
import products from "../data/product.json";
import orderProducts from "../data/orderProduct.json";
import buttons from "../data/orderCategory.json";
function TransactionHistory() {
    const [pick, setPick] = useState(0);
    const handleFilter = (index) => {
        setPick(index);
    };
    const categories = (item, index) => {
        return (index === 0) ? (
            <div
                key={index}
                className={`col-1 btn rounded-0 d-flex justify-content-center align-items-center ${
                    pick === index ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => handleFilter(index)}
            >
                {item}
            </div>
        ) : (
            <div
                key={index}
                className={`col-2 btn rounded-0 d-flex justify-content-center align-items-center ${
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
                    <div className="headerTitle text-primary">
                        TRANSACTION HISTORY
                    </div>
                    <div className="row justify-content-center">
                        <div className="filterOrder d-flex col-11 justify-content-around mb-1">
                            {buttons.map(categories)}
                        </div>
                    </div>
                </div>
                <div className="transBody"></div>
            </div>
            <Footer />
        </div>
    );
}

export default TransactionHistory;
