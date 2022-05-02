import React from "react";
import Header from "../Header/Js/Header";
import Footer from "../Footer/Js/Footer";

const WarrantyPolicy = () => {
    return (
        <>
            <Header />
            <div
                className="container mt-3"
                style={{ lineHeight: "35px", fontSize: "18px", color: "#2a3848" }}
            >
                <h1>WARRANTY POLICY</h1>
                <p>
                    All furnitures are guaranteed for 12 months and accessories for 1 month. The
                    warranty covers technical defects only. The warranty does not cover any damage
                    or other defects caused by improper use, lack of required maintenance, spot due
                    to water, wine, grease...
                </p>
                <p>
                    We have the rights to refuse a product that is guaranteed which have become
                    unacceptable regarding quality due to fair wear and tear; misuse; using it in an
                    abnormal way; or failure to take reasonable care.
                </p>
                <p>
                    The warranty does not apply for products that has been discounted, is valid from
                    the date the customer receives the product and is only valuable with the
                    original sales receipt.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default WarrantyPolicy;
