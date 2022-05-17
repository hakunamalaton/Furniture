/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from "./Banner.module.css";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <section className={classes.summary}>
            <div className="column">
                <div className="columnsmall">
                    <div>
                        <h1 className="fonts">
                            We Design World Best Furnitures
                        </h1>
                    </div>
                    <div style={{ marginTop: "1.5vw" }}>
                        <Link to="/menu"></Link>
                        <h1 className="fonts1">
                            {" "}
                            Let's explore the rich models of each product type.{" "}
                        </h1>
                    </div>
                    <div class="list-kind-product">
                        <div className={classes.kindProduct}></div>
                    </div>
                </div>
                <div className="columnbig">
                    <div className="column1">
                        <div className="square"></div>
                        <div className="content">
                            <div>
                                <h1 className="fonts">BEDDING</h1>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <h1 className="fonts1 pa">
                                    {" "}
                                    The softest beds!
                                </h1>
                                <a href="./menu/Bedding">View more Beds</a>
                            </div>
                        </div>
                    </div>
                    <div className="column1">
                        <div className="square"></div>
                        <div className="content">
                            <div>
                                <h1 className="fonts">SOFAS</h1>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <h1 className="fonts1 pa">
                                    {" "}
                                    The comfortable sofas!{" "}
                                </h1>
                                <a href="./menu/Sofas">View more Sofas</a>
                            </div>
                        </div>
                    </div>
                    <div className="column1 ad">
                        <div className="square"></div>
                        <div className="content">
                            <div>
                                <h1 className="fonts">LAMP</h1>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <h1 className="fonts1 pa">
                                    Modern and elegant lamps.
                                </h1>
                                <a href="./menu/Light">View more Lamps</a>
                            </div>
                        </div>
                    </div>
                    <div className="column1 ad">
                        <div className="square"></div>
                        <div className="content">
                            <div>
                                <h1 className="fonts">CHAIR</h1>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <h1 className="fonts1 pa">
                                    The chairs are simple but sustainable.
                                </h1>
                                <a href="./menu/Chair">View more Chairs</a>
                            </div>
                        </div>
                    </div>
                    <div className="mobile">
                        <a
                            style={{ textDecoration: "none" }}
                            className="fonts3 fonts5 fonts6"
                            href="#"
                        >
                            Xem thêm...
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
