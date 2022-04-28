import { Fragment } from 'react';
import React from "react";
import Header from "../Header/Js/Header";
import Footer from "../Footer/Js/Footer";
import './menu.css';
import CartButton from "./CartButton/CartButton";

const Menu = () => {
    return (
        <Fragment>
        <Header/>

        <div className="QR_area">
        </div>
        
        <div className="cart">
            <div className="tieude">
                <div className="tieude1">
                    <h1 className="fonts3 tab"> Sản phẩm</h1>
                </div>
            </div>
            <div className="list">
                <div className="listsmall">
                    <a className="fonts3 fonts4" href="#">Tất cả</a>
                    <a className="a1 fonts3 fonts5" href="#">Giường</a>
                    <a className="a1 fonts3 fonts5" href="#">Ghế</a>
                    <a className="a1 fonts3 fonts5" href="#">Đèn</a>
                    <a className="a1 fonts3 fonts5" href="#">Sofa</a>
                </div>
            </div>
            <div>
                <div className="clearfix-menu padd">

                    <div className='animation'>
                    <div className="img-container-menu">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Chair</span><br/>
                            <span className="data2">Glossy Cube</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/chair1.png')} alt = "" />
                    </div>
                    </div>

                    <div className='animation'>
                    <div className="img-container-menu">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Chair</span><br/>
                            <span className="data2">Louis XVI</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/chair2.png')} alt = "" />
                    </div>
                    </div>

                    <div className='animation'>
                    <div className="img-container-menu">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Chair</span><br/>
                            <span className="data2">Shellton Mindel</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/chair3.png')} alt = "" />
                    </div>
                    </div>

                    <div className='animation'>
                    <div className="img-container-menu">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Chair</span><br/>
                            <span className="data2">Nuemeyeri</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/chair4.png')} alt = "" />
                    </div>
                    </div>
                </div>

                <div className="clearfix-menu">
                    
                <div className='animation'>
                    <div className="img-container-menu x">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Lamp</span><br/>
                            <span className="data2">Chelsea pendant</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/lamp1.png')} alt = "" />
                    </div>
                    </div>


                    <div className='animation'>
                    <div className="img-container-menu x">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Lamp</span><br/>
                            <span className="data2">Kuta floor</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/lamp2.png')} alt = "" />
                    </div>
                    </div>

                  <div className='animation'>
                    <div className="img-container-menu x">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Lamp</span><br/>
                            <span className="data2">Aerial pendant</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/lamp3.png')} alt = "" />
                    </div>
                    </div>

                  <div className='animation'>
                    <div className="img-container-menu x">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Lamp</span><br/>
                            <span className="data2">Three chandelier</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/lamp4.png')} alt = "" />
                    </div>
                    </div>

                </div>
                <div className="clearfix-menu">
                    
                <div className='animation'>
                    <div className="img-container-menu x">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Bed</span><br/>
                            <span className="data2">Milligan</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/bed1.png')} alt = "" />
                    </div>
                    </div>


                    <div className='animation'>
                    <div className="img-container-menu x">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Bed</span><br/>
                            <span className="data2">Sanaya</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/bed2.png')} alt = "" />
                    </div>
                    </div>

                  <div className='animation'>
                    <div className="img-container-menu x">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Bed</span><br/>
                            <span className="data2">Suhavy Tufted</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/bed3.png')} alt = "" />
                    </div>
                    </div>

                  <div className='animation'>
                    <div className="img-container-menu x">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Bed</span><br/>
                            <span className="data2">Tianna</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/bed4.png')} alt = "" />
                    </div>
                    </div>

                </div>
                <div className="clearfix-menu">
                    
                <div className='animation'>
                    <div className="img-container-menu x">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Sofa</span><br/>
                            <span className="data2">Black Lacquer</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/sofa1.png')} alt = "" />
                    </div>
                    </div>


                    <div className='animation'>
                    <div className="img-container-menu x">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Sofa</span><br/>
                            <span className="data2">Ovan Mono</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/sofa2.png')} alt = "" />
                    </div>
                    </div>

                  <div className='animation'>
                    <div className="img-container-menu x">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Sofa</span><br/>
                            <span className="data2">La Debutante</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/sofa3.png')} alt = "" />
                    </div>
                    </div>

                  <div className='animation'>
                    <div className="img-container-menu x">
                        <CartButton />
                        <div className="dt">
                            <span className="data1">Sofa</span><br/>
                            <span className="data2">Cezanne Relax</span>
                        </div>
                        <div className="money"><span className="money1">1.000.000 VND</span></div>
                        <img className="image-menu image3" src={require('../../picture/sofa4.png')} alt = "" />
                    </div>
                    </div>

                </div>
            </div>
            
            <div>
                <div class="pagination" id="rep1">
                    <a href="#">Trang trước</a>
                    <a href="#">1</a>
                    <a class="active" href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">Trang sau</a>
                </div>
                <div class="pagination" id="rep2">
                    <a href="#">Trang trước</a>
                    <a href="#">1</a>
                    <a href="#">...</a>
                    <a href="#">6</a>
                    <a href="#">Trang sau</a>
                </div>
            </div>
        </div>
        <Footer />
        </Fragment>
    );
};
export default Menu;