import React from "react";
import Header from "./Component/Header/Js/Header";
import Footer from "./Component/Footer/Js/Footer";
import './homepage.css'

const HomePage = () => {
    return (
        <>
        <Header />
        <div >
            <img className="image image1" src={require('./picture/decorate.png')}  alt=""/>
            <img className="image image2" src={require('./picture/decoratemobile.png')}  alt=""/>
        </div>
        <div id="word">
            <h1 className="font font1">Choose by kind of room</h1>
            <h1 className="font font2">Filling the home with the beautiful creation of wood.</h1>
        </div>
        <div className="clearfix" style={{"marginTop": "50px"}}>
            <div className="img-container">
                <img className="image image3" src={require('./picture/diningroom.png')} alt = "" />
                <h1 className="font font3">Kitchen</h1>
            </div>
            <div className="img-container">
                <img className="image image3" src={require('./picture/livingroom.png')} alt = "" />
                <h1 className="font font3">Living room</h1>
            </div>
            <div className="img-container">
                <img className="image image3" src={require('./picture/bedroom.png')} alt = "" />
                <h1 className="font font3">Bedroom</h1>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default HomePage;
