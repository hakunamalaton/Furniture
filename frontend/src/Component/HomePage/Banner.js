/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Banner.css";
const Banner = () => {
    return (
        <section className="banner-component">
            <div className="column d-block d-lg-flex">
                <div className="col-12 col-lg-5 col-xl-4">
                    <div className="d-flex justify-content-center">
                        <div className="title-banner text-lg-center">
                            We Design World Best Furnitures
                        </div>
                    </div>
                    <div
                        style={{ marginTop: "1.5vw" }}
                        className="d-flex justify-content-center"
                    >
                        <div className="font-weight-normal desc-banner text-lg-center">
                            {" "}
                            Let's explore the rich models of each product type.{" "}
                        </div>
                    </div>
                    <div className="list-kind-product d-flex justify-content-center mt-3">
                        <div className="kindProduct"></div>
                    </div>
                </div>
                <div className="d-block col-lg-7 col-xl-8 justify-content-around">
                    <div className="col-12 d-flex">
                        <div className="d-flex col-6 m-2">
                            <div className="square"></div>
                            <div className="content pl-2">
                                <div className="title-kind m-0">BEDDING</div>
                                <div className="desc-kind m-0">
                                    {" "}
                                    The softest beds!
                                </div>
                                <a href="./menu/Bedding">View more Beds</a>
                            </div>
                        </div>
                        <div className="d-flex col-6 m-2">
                            <div className="square"></div>
                            <div className="content pl-2">
                                <div className="title-kind m-0">SOFAS</div>
                                <div className="desc-kind m-0">
                                    {" "}
                                    The softest beds!
                                </div>
                                <a href="./menu/Bedding">View more Sofas</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex">
                        <div className="d-flex col-6 m-2">
                            <div className="square"></div>
                            <div className="content pl-2">
                                <div className="title-kind m-0">LAMP</div>

                                <div className="desc-kind m-0">
                                    {" "}
                                    Modern and elegant lamps.
                                </div>
                                <a href="./menu/Bedding">View more Lamps</a>
                            </div>
                        </div>
                        <div className="d-flex col-6 m-2">
                            <div className="square"></div>
                            <div className="content pl-2">
                                <div className="title-kind m-0">CHAIR</div>

                                <div className="desc-kind m-0">
                                    {" "}
                                    The chairs are simple but sustainable.
                                </div>
                                <a href="./menu/Bedding">View more Chairs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
