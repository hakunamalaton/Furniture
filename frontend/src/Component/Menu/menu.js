import { Fragment } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Header from "../Header/Js/Header";
import Footer from "../Footer/Js/Footer";
import "./menu.css";
import CartButton from "./CartButton/CartButton";

const Menu = () => {
    return (
        <Fragment>
            <Header />

            <div className="QR_area"></div>

            <div className="cart">
                <div className="tieude">
                    <div className="tieude1">
                        <h1 className="fonts3 tab"> Product</h1>
                    </div>
                </div>
                <div className="list">
                    <div className="listsmall">
                        <a className="fonts3 fonts4" href="#">
                            All
                        </a>
                        <a className="a1 fonts3 fonts5" href="#">
                            Bedding
                        </a>
                        <a className="a1 fonts3 fonts5" href="#">
                            Chair
                        </a>
                        <a className="a1 fonts3 fonts5" href="#">
                            Lamp
                        </a>
                        <a className="a1 fonts3 fonts5" href="#">
                            Sofas
                        </a>
                    </div>
                </div>
                <div>
                    <div className="clearfix-menu padd  d-flex justify-content-around">
                        <Link to="/product-detail/8">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Bedding</span>
                                        <br />
                                        <span className="data2">
                                        Miami bed 1m8 upholstered with Dolce fabric 160
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            1500 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/PYFD5NI.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/product-detail/9">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Bedding</span>
                                        <br />
                                        <span className="data2">
                                        Maxine wooden bed
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            2500 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/wnIV4bA.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/product-detail/10">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Bedding</span>
                                        <br />
                                        <span className="data2">
                                        Mushroom Rattan Leather Bed
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            2000 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/0Uw40Ni.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/product-detail/7">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Bedding</span>
                                        <br />
                                        <span className="data2">
                                        Modern Pio fabric bed 1m6 color 10/WV094
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            1200 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/wPaj0Us.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="clearfix-menu padd  d-flex justify-content-around">
                        <Link to="/product-detail/16">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Chair</span>
                                        <br />
                                        <span className="data2">
                                        Armchair String Gold
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            450 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/Twk2AbY.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/product-detail/17">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Chair</span>
                                        <br />
                                        <span className="data2">
                                        Relax Hailey FABRIC/METAL Chair
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            550 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/LpQSDJo.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/product-detail/18">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Chair</span>
                                        <br />
                                        <span className="data2">
                                        Armchair Paradise L
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            750 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/xgIEhWR.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/product-detail/19">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Chair</span>
                                        <br />
                                        <span className="data2">
                                        Armchair Rattan Fango
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            350 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/Vtg6Rsz.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="clearfix-menu padd  d-flex justify-content-around">
                        <Link to="/product-detail/22">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Lamp</span>
                                        <br />
                                        <span className="data2">
                                        Ginkgo Stand Lamp
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            550 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/8RUKQ5F.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/product-detail/23">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Lamp</span>
                                        <br />
                                        <span className="data2">
                                        Amber Table Lamp
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            350 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/BFjIZtb.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/product-detail/24">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Lamp</span>
                                        <br />
                                        <span className="data2">
                                        Yuks Table Lamp
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            400 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/9lVzDez.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/product-detail/25">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Lamp</span>
                                        <br />
                                        <span className="data2">
                                        Suzette Table Lamp
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            400 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/V9Uy8Of.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="clearfix-menu padd  d-flex justify-content-around">
                        <Link to="/product-detail/12">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Sofas</span>
                                        <br />
                                        <span className="data2">
                                        3 seater sofa PENNY
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            600 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/BUmuFdN.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/product-detail/13">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Sofas</span>
                                        <br />
                                        <span className="data2">
                                        OSAKA 3-seat sofa
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            1000 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/r0GBskt.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/product-detail/14">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Sofas</span>
                                        <br />
                                        <span className="data2">
                                        Modern 3-seat Bridge Sofa
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            900 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/OZB8fIn.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/product-detail/15">
                            <div className="animation">
                                <div className="img-container-menu">
                                    <div className = "ml-3">
                                    <CartButton />
                                    </div>
                                    <div className="dt">
                                        <span className="data1">Sofas</span>
                                        <br />
                                        <span className="data2">
                                        Elegance 3-seater sofa in natural color
                                        </span>
                                    </div>
                                    <div className="money">
                                        <span className="money1">
                                            850 USD
                                        </span>
                                    </div>
                                    <div
                                        className="image-menu image3"
                                        style={{
                                            backgroundImage: `url("https://i.imgur.com/9IyaQIs.png")`
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Link>
                    </div>                        
                </div>
                <div>
                    <div class="pagination" id="rep1">
                        <a href="#">Prev</a>
                        <a className = "active" href="#">1</a>
                        <a href="#">
                            2
                        </a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">Next</a>
                    </div>
                    <div class="pagination" id="rep2">
                        <a href="#">Prev</a>
                        <a href="#">1</a>
                        <a href="#">...</a>
                        <a href="#">6</a>
                        <a href="#">Next</a>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};
export default Menu;
