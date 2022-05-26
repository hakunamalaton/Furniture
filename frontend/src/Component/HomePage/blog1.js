import React from "react";
import Header from "../Header/Js/Header";
import Footer from "../Footer/Js/Footer";
import {Link} from "react-router-dom"
const Blog1 = () => {
    return (
        <>
            <Header />
            <div
                className="container mt-3"
                style={{
                    lineHeight: "35px",
                    fontSize: "18px",
                    color: "#2a3848",
                }}
            >
                <div className="d-flex justify-content-center">
                    <div>
                        <div className="d-flex justify-content-center">
                            <h6>INSPIRATION CORNER</h6>
                        </div>
                        <h1 className="text-center">Save apartment space in a smart way</h1>
                        <div className="d-flex justify-content-center mt-3">
                            <div class="separation">
                                <div
                                    style={{
                                        width: "50px",
                                        height: "5px",
                                        backgroundColor: "#054c73",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <p>With apartments, the space area will be quite limited to be able to optimize the space more. Finding and designing an apartment that is both cool, comfortable, versatile and stylish is a need that many people are interested in. Let's join Nha Xinh to bring you some interesting ideas to bring your apartment to a new level, both beautiful and present, sophisticated.</p>
                </div>
                <div className="row">
                    <img src="https://i.imgur.com/DhGHpGJ.jpg" className="d-block w-100" alt="" />
                </div>
                <div className="row justify-content-center mt-5">
                    <h2>Use special designs for small spaces</h2>
                </div>
                <div className="row">
                Furniture because the demand for space saving increases, the supply gradually adapts and develops, giving birth to products with a more compact, flexible and light size but still ensuring the effectiveness of the furniture. Therefore, you can absolutely find a compact sofa that is easy to move to suit the room space suitable in optimizing the living room space but still has a unique elegance, or a The round dining table is still just enough for your family to gather warmly.
                </div>
                <div className="row d-block d-lg-flex justify-content-between mt-5">
                    <div className="col-12 col-lg-6 pl-0">
                        <div>
                            <h2>Use multi-function items</h2>
                            <p>Multi-function furniture are items that are designed and integrated with many different functions, helping a product to bring many effects and be used in many cases. For example, a bed can be integrated with storage by adding drawers under the bed, or a water table with drawers for storing small items.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 pr-0">
                        <img src="https://i.imgur.com/ppFOsEg.jpg" className="d-block w-100" alt="" />
                    </div>
                </div>
                <div className="row">
                With these designs, an item will bring more benefits to the owner, making the apartment space more comfortable, more modern and creating a feeling of spaciousness and comfort.
                </div>
                <div className="row d-block d-lg-flex justify-content-between mt-5">
                    <div className="col-lg-7 col-12 pl-0">
                        <img src="https://i.imgur.com/9tV1HPm.jpg" className="d-block w-100" alt="" />
                    </div>
                    <div className="col-lg-5 col-12 pr-0 pl-0">
                        <div>
                            <h2>Wall cabinets save space</h2>
                            <p>Both luxurious and space-saving, wall cabinets are the perfect furniture for modern apartments.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                By taking advantage of the space inside the walls, these cabinets will provide a spacious space for storing things without affecting the overall area of a room. With a wall cabinet, you can easily increase the continuity of the whole room, making the living space both luxurious and beautiful, airy and comfortable. It can be said that wall cabinets are an indispensable item in a modern room, and with a variety of colors and designs, wall cabinets will be suitable for any type of apartment.
                </div>
                <div className="row d-block d-lg-flex justify-content-between align-items-center mt-5">
                    <div className="col-lg-5 col-12 pl-0">
                        <div>
                            <p>A wall-mounted bookshelf will help you have space to display and store books while still keeping the room airy, or you can completely display green plants on the wall, while bringing a natural and airy look. cool, modern and creative.</p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12 pr-0 d-flex justify-content-center">
                        <img src="https://i.imgur.com/ZyPGGyw.jpg" className="d-block w-100 col-10" alt="" />
                    </div>
                </div>
                <div className="row justify-content-center my-5">
                    <div className="col-5 d-flex justify-content-center">
                        <Link to="/menu/All">
                        <div className="btn btn-dark rounded-0">
                            GO SHOP!
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog1;
