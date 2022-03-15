import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/fontawesome-free-solid";
import Header from "../../Header/Js/Header";
import "../css/importDesign.css"
function ImportDesign() {
    function previewListImg() {
        const file = document.querySelector("#inputImageFile").files;
        for (let i = 0; i < file.length; i++) {
            previewImg(i);
        }
    }
    function previewImg(index) {
        const preview = document.querySelector("#img-up-rating-" + (index + 1));
        var file = document.querySelector("#inputImageFile").files[index];
        console.log(file);
        let blobURL = URL.createObjectURL(file);
        preview.style.display = "block";
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
                        <div className="row frame-import justify-content-center">
                            <div className="col-8 d-flex align-items-center justify-content-center border border-secondary">
                                <h5>Your design...</h5>
                            </div>
                        </div>
                        <div className="import-ds-form-body">
                            <form>
                                <div className="form-group">
                                    <div className="input-group col-12 d-inline-block">
                                        <div className="row">
                                            <div className="custom-file col-3 m-1 d-flex align-items-center">
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
                                                    (You can import more than 1 file.)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row previewFile pt-2">
                                            {[0, 0, 0, 0, 0, 0].map(
                                                (_, index) => {
                                                    return (
                                                        <div
                                                            className="previewImage"
                                                            id={
                                                                "img-up-rating-" +
                                                                (index + 1)
                                                            }
                                                            style={{
                                                                display: "none",
                                                            }}
                                                        ></div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImportDesign;
