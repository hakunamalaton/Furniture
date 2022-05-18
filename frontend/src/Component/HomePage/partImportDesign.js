/* eslint-disable jsx-a11y/anchor-is-valid */
import "./partImportDesign.css";
const PartImportDesign = () => {
    return (
        <div className="part-import-design-component my-5">
            <div className="col-12 d-flex justify-content-between  px-0">
                <div className="col-6 d-flex justify-content-start animation-hover px-0">
                    <img
                        src="https://i.imgur.com/DvlaW8X.png"
                        className="d-block"
                        alt=""
                    />
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <div className="col-10 mt-5">
                        <h1 className="">
                            <strong>YOUR DESIGN</strong>
                        </h1>
                        <h5 className="font-weight-normal">
                            You can send product samples that you design
                            yourself to the store, our staff has produced
                            according to your needs. With a team of professional
                            staff will guide or advise to help customers fulfill
                            their wishes.
                        </h5>
                        <div className="mt-5">
                            <a href="/import-design">
                                <div className="btn btn-dark rounded-0">
                                    SUBMIT NOW!
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-3 animation-hover d-flex justify-content-end px-0">
                    <img
                        src="https://i.imgur.com/xQV8tW6.png"
                        className="d-block"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default PartImportDesign;
