import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/fontawesome-free-solid";
import Header from "../../Header/Js/Header";
import Footer from "../../Footer/Js/Footer";
import "../css/importDesign.css";
function ImportDesign() {
    const [listImagePreview, setListImagePreview] = useState([]);
    function previewListImg() {
        const file = document.querySelector("#inputImageFile").files;
        if (file.length === 0) {return;}
        console.log(file);
        setListImagePreview(Array(file.length).fill(0));
        console.log(listImagePreview);
        for (let i = 0; i < file.length; i++) {
            previewImg(i);
        }
    }
    function previewImg(index) {
        const previewContent = document.querySelector("#previewContent");
        const preview = document.querySelector("#img-up-import-" + (index + 1));
        var file = document.querySelector("#inputImageFile").files[index];
        let blobURL = URL.createObjectURL(file);
        preview.style.display = "block";
        previewContent.style.display = "none";
        preview.style.backgroundImage = "url(" + blobURL.toString() + ")";
    }
    return (
        <div className="importDesignComponent">
            <Header />
            <div className="container-fluid import-ds-form">
                <div className="container d-flex justify-content-center">
                    <div className="col-11 bg-white p-3">
                        <div className="row import-ds-form-header p-2">
                            <h5>IMPORT YOUR DESIGN</h5>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-8 frame-import d-flex align-items-center justify-content-center border border-secondary">
                                <h5 
                                    id="previewContent"
                                    style={{
                                        display: "block",
                                    }}
                                >
                                    Your design...
                                </h5>
                                {listImagePreview.map((_, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="previewImage"
                                            id={"img-up-import-" + (index + 1)}
                                            style={{
                                                display: "none",
                                            }}
                                        ></div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="import-ds-form-body">
                            <form>
                                <div className="form-group">
                                    <div className="input-group col-12 d-inline-block">
                                        <div className="row justify-content-center">
                                            <div className="custom-file col-2 m-1 d-flex align-items-center">
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="inputImageFile"
                                                    accept="image/png, image/jpeg, image/jpg"
                                                    multiple
                                                    onChange={previewListImg}
                                                />
                                                <label
                                                    className="custom-file-label text-primary border-primary rounded-0"
                                                    htmlFor="inputImageFile"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faCamera}
                                                    />{" "}
                                                    Add Images
                                                </label>
                                            </div>
                                            <div className="col-4 d-flex align-items-center">
                                                <div className="row">
                                                    (You can import more than 1
                                                    file.)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ImportDesign;
