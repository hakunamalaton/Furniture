/* eslint-disable jsx-a11y/anchor-is-valid */
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
        {/* <Banner /> */}
        <div className="QR_area">
            <CartButton />
        </div>
        <div className="cart">
            <div className="tieude">
                <div className="tieude1">
                    <h1 className="fonts3 tab"> Sản phẩm</h1>
                </div>
                {/* <div className="tieude2">
                    <a style={{"textDecoration":"none"}} className="fonts3 fonts5 fonts6" href="#">Xem tất cả {'>'}</a>
                </div> */}
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
                    <div className="img-container-menu">
                        <img className="image-menu image3" src={require('../../picture/1.png')} alt = "" />
                    </div>
                    <div className="img-container-menu">
                        <img className="image-menu image3" src={require('../../picture/2.png')} alt = "" />
                    </div>
                    <div className="img-container-menu">
                        <img className="image-menu image3 y" src={require('../../picture/3.png')} alt = "" />
                    </div>
                    <div className="img-container-menu x">
                        <img className="image-menu image3" src={require('../../picture/4.png')} alt = "" />
                    </div>
                </div>
                <div className="clearfix-menu">
                    <div className="img-container-menu x">
                        <img className="image-menu image3" src={require('../../picture/1.png')} alt = "" />
                    </div>
                    <div className="img-container-menu x">
                        <img className="image-menu image3" src={require('../../picture/2.png')} alt = "" />
                    </div>
                    <div className="img-container-menu x">
                        <img className="image-menu image3" src={require('../../picture/3.png')} alt = "" />
                    </div>
                    <div className="img-container-menu x">
                        <img className="image-menu image3" src={require('../../picture/4.png')} alt = "" />
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
            {/* <div className="mail">
                <h1 className="fonts7">Join Our Mailing List</h1>
                <h1 className="fonts8">Sign up to receive inspiration, product updates, and special offers from our team.</h1>
            </div>
            <div className="add-the-center">
                <div class="input-group mb-3 add">
                    <input type="text" class="form-control form-add" placeholder="example@gmail.com" aria-label="example@gmail.com" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary btn1" type="button"><span className="fonts8 add1">Submit</span></button>
                </div>
                </div>
            </div> */}
        </div>
        <Footer />
        </Fragment>
    );
};
export default Menu;