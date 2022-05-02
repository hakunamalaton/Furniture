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
                    Khi một đơn hàng được đặt, nhân viên của Casanha sẽ liên lạc để xác nhận đơn
                    hàng qua điện thoại hoặc email.
                </p>
                <p>
                    Thời gian giao hàng được bắt đầu tính từ lúc đơn hàng của bạn được xác nhận
                    thành công.
                </p>
                <p>
                    <span style={{ fontWeight: "bold" }}>
                        Thời gian vận chuyển đối với các tỉnh thành khác của Việt Nam{" "}
                    </span>
                    (ngoại trừ Thành phố Hồ Chí Minh) cụ thể như sau:
                </p>
                <div className="row mt-4 mb-2">
                    <div className="col-2" style={{ fontWeight: "bold" }}></div>
                    <div style={{ fontWeight: "bold" }}>Thời gian</div>
                </div>
                <div className="row">
                    <div className="col-2" style={{ fontWeight: "bold" }}>
                        Miền Nam
                    </div>
                    <div>4 – 7 ngày làm việc</div>
                </div>
                <div className="row">
                    <div className="col-2" style={{ fontWeight: "bold" }}>
                        Miền Trung
                    </div>
                    <div>5 – 9 ngày làm việc</div>
                </div>
                <div className="row">
                    <div className="col-2" style={{ fontWeight: "bold" }}>
                        Miền Bắc
                    </div>
                    <div>6 – 10 ngày làm việc</div>
                </div>

                <p className="mt-5">
                    <span style={{ fontWeight: "bold" }}>Miền Nam: </span>
                    Bình Dương, Đồng Nai, Bà Rịa – Vũng Tàu, An Giang, Bạc Liêu, Bến Tre, Bình
                    Thuận, Bình Phước, Cà Mau, Cần Thơ, Đồng Tháp, Hậu Giang, Kiên Giang, Lâm Đồng,
                    Long An, Ninh Thuận, Tây Ninh, Tiền Giang, Trà Vinh, Sóc Trăng, Vĩnh Long.
                </p>
                <p>
                    <span style={{ fontWeight: "bold" }}>Miền Trung: </span>
                    Đà Nẵng, Bình Định, Đắk Lắk, Đắk Nông, Gia Lai, Thừa Thiên Huế, Kon Tum, Khánh
                    Hòa, Phú Yên, Quảng Nam, Quảng Ngãi, Quảng Trị, Quảng Bình.
                </p>
                <p>
                    <span style={{ fontWeight: "bold" }}>Miền Bắc: </span>
                    Hà Nội, Bắc Ninh, Hà Nam, Hà Tĩnh, Hải Dương, Hải Phòng, Nam Định, Ninh Bình,
                    Nghệ An, Quảng Ninh, Thanh Hóa, Vĩnh Phúc, Bắc Cạn, Bắc Giang, Cao Bằng, Điện
                    Biên, Hà Giang, Hưng Yên, Hòa Bình, Lào Cai, Lai Châu, Lạng Sơn, Phú Thọ, Sơn
                    La, Thái Bình, Thái Nguyên, Tuyên Quang, Yên Bái.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default DeliveryPolicy;
