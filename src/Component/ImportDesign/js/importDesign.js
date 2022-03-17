import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPaperPlane } from "@fortawesome/fontawesome-free-solid";
import Header from "../../Header/Js/Header";
import Footer from "../../Footer/Js/Footer";
import "../css/importDesign.css";
function ImportDesign() {

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
        const previewContent = document.querySelector("#preview-content-import");
        previewContent.style.display = "none";
        for (let i = 0; i < file.length; i++) {
            previewImg(i);
        }
    }

    function previewImg(index) {
        const preview = document.querySelector("#img-import-upload" + (index + 1));
        var file = document.querySelector("#input-img-import").files[index];
        let blobURL = URL.createObjectURL(file);
        preview.style.height = "calc(45px*2)";
        preview.style.width = "calc(45px*2)";
        preview.style.display = "block";
        preview.style.backgroundImage = "url(" + blobURL.toString() + ")";
    }
    return (
        <div className="import-design-component">
            <Header />
            <div className="container import-ds-form">
                <div className="bg-white p-3">
                    <div className="row import-ds-form-header p-2">
                        <h5>IMPORT YOUR DESIGN</h5>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10 frame-import border border-secondary">
                            <h5
                                id="preview-content-import"
                                className="d-flex justify-content-center"
                            >
                                Your design...
                            </h5>
                            <div className="row box-import">
                                {Array(100)
                                    .fill(0)
                                    .map((_, index) => (
                                        <div
                                            key={index}
                                            className={"m-2 preview-img-import"}
                                            id={"img-import-upload" + (index + 1)}
                                            style={{
                                                display: "none",
                                            }}
                                        ></div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="import-ds-form-body">
                        <form>
                            <div className="form-group d-inline">
                                <div className="input-group">
                                    <div className="row justify-content-center">
                                        <div className="col-10 d-flex">
                                        <div className="custom-file col-4 m-3 d-flex align-items-center">
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="input-img-import"
                                                accept="image/png, image/jpeg, image/jpg"
                                                multiple
                                                onChange={previewListImg}
                                            />
                                            <label
                                                className="custom-file-label text-primary border-primary rounded-0"
                                                htmlFor="input-img-import"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCamera}
                                                />{" "}
                                                Add Images
                                            </label>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="row">
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
                                    className="btn col-2 mt-2 btn-primary"
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
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ImportDesign;
