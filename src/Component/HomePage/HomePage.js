import React from "react";
import Header from "../Header/Js/Header";
import Footer from "../Footer/Js/Footer"
import './homepage.css'
import Banner from './Banner';

const HomePage = () => {
    return (
        <>
        <Header />
        <div >
            <img className="image image1" src={require('../../picture/decorate.png')}  alt=""/>
            <img className="image image2" src={require('../../picture/decoratemobile.png')}  alt=""/>
        </div>
        <Banner />
        <div id="word">
            <h1 className="font font1">Chọn theo phòng</h1>
            <h1 className="font font2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
        </div>
        <div className="clearfix" style={{"marginTop": "50px"}}>
            <div className="img-container">
                <img className="image image3" src={require('../../picture/diningroom.png')} alt = "" />
                <h1 className="font font3">Phòng ăn</h1>
            </div>
            <div className="img-container">
                <img className="image image3" src={require('../../picture/livingroom.png')} alt = "" />
                <h1 className="font font3">Phòng khách</h1>
            </div>
            <div className="img-container">
                <img className="image image3" src={require('../../picture/bedroom.png')} alt = "" />
                <h1 className="font font3">Phòng ngủ</h1>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default HomePage;
