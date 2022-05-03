import { React } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../Header/Js/Header";
import Footer from "../../Footer/Js/Footer";
import "../css/importDesign.css";
import { faPaperPlane, faCamera } from "@fortawesome/free-solid-svg-icons";
const axios = require("axios");

function ImportDesign() {
    const name = useSelector((state) => state.name);
    const email = useSelector((state) => state.email);
    function handleImportDesign(e) {
        const divAlert = document.querySelector("#alert-import-design");

        divAlert.style.display = "block";
        e.preventDefault();
        // setTimeout(() => {
            axios
                .post("https://rails-gmail.herokuapp.com/users", {
                    user: {
                        name: name ? name : "Lam Duong",
                        email: email ? email : "lamduong11201@gmail.com",
                        login: email ? email : "lamduong11201@gmail.com",
                    },
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            setTimeout(() => {
                
                window.location.href = "/import-design";
            }, 2000);
        // }, 3000);
    }

    function clearImgPreview() {
        const listFilePrev = document.querySelectorAll(".preview-img-import");
        listFilePrev.forEach(resetPreviewImg);
    }
    function resetPreviewImg(item, index) {
        item.style.display = "none";
    }

    function previewListImg() {
        clearImgPreview();
        const file = document.querySelector("#input-img-import").files;
        if (file.length === 0) {
            return;
        }
        const previewContent = document.querySelector(
            "#preview-content-import"
        );
        previewContent.style.display = "none";
        for (let i = 0; i < file.length; i++) {
            previewImg(i);
        }
    }

    function previewImg(index) {
        const preview = document.querySelector(
            "#img-import-upload" + (index + 1)
        );
        var file = document.querySelector("#input-img-import").files[index];
        let blobURL = URL.createObjectURL(file);
        preview.style.display = "block";
        preview.style.backgroundImage = "url(" + blobURL.toString() + ")";
    }
    return (
        <div className="import-design-component">
            <div
                className="alert m-0 alert-primary alert-dismissible fade show"
                id="alert-import-design"
                style={{ display: "none" }}
                role="alert"
            >
                <strong>Send your design successfully!</strong> We'll get in
                touch with you to confirm the details. Check your gmail inbox as
                well as your spam folder.
                <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <Header />
            <div className="container import-ds-form">
                <div className="bg-white p-3">
                    <div className="row import-ds-form-header p-2">
                        <h5>IMPORT YOUR DESIGN</h5>
                    </div>
                    <div className="import-ds-form-body">
                        <form>
                            <div className="form-group d-block">
                                <div className="input-group align-items-center justify-content-center">
                                    <div className="row justify-content-center">
                                        <div className="col-10 p-0 d-block mx-auto mt-2 d-md-flex justify-content-md-center">
                                            <div className="custom-file col-12 col-md-4 mx-auto d-flex align-items-center">
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="input-img-import"
                                                    accept="image/png, image/jpeg, image/jpg"
                                                    multiple
                                                    onChange={previewListImg}
                                                />
                                                <label
                                                    className="custom-file-label d-flex justify-content-center align-items-center text-primary border-primary rounded-0"
                                                    htmlFor="input-img-import"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faCamera}
                                                        className="pr-1"
                                                    />{" "}
                                                    Add Images
                                                </label>
                                            </div>
                                            <div className="d-flex col-md-7 mx-auto mx-md-0  align-items-center">
                                                <div className="row mx-auto mx-md-0">
                                                    (You can import more than 1
                                                    file.)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <button
                                    type="submit"
                                    className="btn col-6 col-sm-4 col-md-3 col-lg-2 mb-2 btn-primary"
                                    onClick={handleImportDesign}
                                >
                                    <FontAwesomeIcon
                                        className="text-white"
                                        icon={faPaperPlane}
                                    />{" "}
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10 frame-import border border-secondary">
                            <h5
                                id="preview-content-import"
                                className="justify-content-center"
                                style={{ display: "flex" }}
                            >
                                Your design...
                            </h5>
                            <div className="row box-import m-1">
                                {Array(100)
                                    .fill(0)
                                    .map((_, index) => (
                                        <div
                                            key={index}
                                            className={"m-1 preview-img-import"}
                                            id={
                                                "img-import-upload" +
                                                (index + 1)
                                            }
                                            style={{
                                                display: "none",
                                            }}
                                        ></div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ImportDesign;
