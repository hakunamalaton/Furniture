import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./qrcode.css";
function QrCode() {
    const handleCloseQR = () => {
        const divQrBig = document.querySelector(".qrcode-more");
        divQrBig.style.display = "none";
        const divQrSmall = document.querySelector(".qrcode-less");
        divQrSmall.style.display = "block";
    };
    const handleOpenQR = () => {
        const divQrBig = document.querySelector(".qrcode-more");
        divQrBig.style.display = "block";
        const divQrSmall = document.querySelector(".qrcode-less");
        divQrSmall.style.display = "none";
    };
    return (
        <>
            <div
                className="qrcode qrcode-more m-4 px-3 py-1"
                style={{ display: "block" }}
            >
                <div
                    className="row justify-content-end"
                    onClick={handleCloseQR}
                >
                    <FontAwesomeIcon icon={faCircleXmark} className="pr-1" />
                </div>
                <div className="row px-0 pb-3">
                    <img
                        className="qrcode-img col-4 px-0 img-fluid"
                        src="https://i.imgur.com/uuK0UWC.png"
                        alt=""
                    />
                    <div className="intro-app-ar ml-2 col-7 d-block">
                        <div className="row text-primary"><strong>AR Furniture App</strong></div>
                        <div className="row">
                            This is our augmented reality app, which you can use
                            along with the website. It assists you in
                            determining where the item should be placed in your
                            home. Scan the QR code to get started!
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="qrcode qrcode-less m-4 px-3 py-1"
                style={{ display: "none" }}
            >
                <div className="row" onClick={handleOpenQR}>
                    <img
                        className="qrcode-img col-3 px-0 img-fluid"
                        src="https://i.imgur.com/uuK0UWC.png"
                        alt=""
                    />
                    <div className="intro-app-ar col-9 d-flex justify-content-start align-items-center text-primary">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <strong>AR Furniture</strong>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QrCode;
