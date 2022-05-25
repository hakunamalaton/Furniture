import React from "react";
import Header from "../Header/Js/Header";
import Footer from "../Footer/Js/Footer";

const DeliveryPolicy = () => {
    return (
        <>
            <Header />
            <div
                className="container mt-3"
                style={{ lineHeight: "35px", fontSize: "18px", color: "#2a3848" }}
            >
                <h1>DELIVERY POLICIES</h1>
                <p>
                Once an order is placed, our staff will contact you to confirm the order by phone or email.
                </p>
                <p>
                Delivery time starts from the time your order is successfully confirmed.
                </p>
                <p>
                    <span style={{ fontWeight: "bold" }}>
                    Shipping time for other provinces of Vietnam{" "}
                    </span>
                    (except Ho Chi Minh City) specifically as follows:
                </p>
                <div className="row mt-4 mb-2">
                    <div className="col-2" style={{ fontWeight: "bold" }}></div>
                    <div style={{ fontWeight: "bold" }}>Time</div>
                </div>
                <div className="row">
                    <div className="col-2" style={{ fontWeight: "bold" }}>
                    South
                    </div>
                    <div>4 - 7 working days</div>
                </div>
                <div className="row">
                    <div className="col-2" style={{ fontWeight: "bold" }}>
                    Central
                    </div>
                    <div>5 – 9 working days</div>
                </div>
                <div className="row">
                    <div className="col-2" style={{ fontWeight: "bold" }}>
                    Northern
                    </div>
                    <div>6 – 10 working days</div>
                </div>

                <p className="mt-5">
                    <span style={{ fontWeight: "bold" }}>South: </span>
                    Binh Duong, Dong Nai, Ba Ria - Vung Tau, An Giang, Bac Lieu, Ben Tre, Binh Thuan, Binh Phuoc, Ca Mau, Can Tho, Dong Thap, Hau Giang, Kien Giang, Lam Dong, Long An, Ninh Thuan , Tay Ninh, Tien Giang, Tra Vinh, Soc Trang, Vinh Long.
                </p>
                <p>
                    <span style={{ fontWeight: "bold" }}>Central: </span>
                    Da Nang, Binh Dinh, Dak Lak, Dak Nong, Gia Lai, Thua Thien Hue, Kon Tum, Khanh Hoa, Phu Yen, Quang Nam, Quang Ngai, Quang Tri, Quang Binh.
                </p>
                <p>
                    <span style={{ fontWeight: "bold" }}>Northern: </span>
                    Hanoi, Bac Ninh, Ha Nam, Ha Tinh, Hai Duong, Hai Phong, Nam Dinh, Ninh Binh, Nghe An, Quang Ninh, Thanh Hoa, Vinh Phuc, Bac Can, Bac Giang, Cao Bang, Dien Bien, Ha Giang , Hung Yen, Hoa Binh, Lao Cai, Lai Chau, Lang Son, Phu Tho, Son La, Thai Binh, Thai Nguyen, Tuyen Quang, Yen Bai.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default DeliveryPolicy;
