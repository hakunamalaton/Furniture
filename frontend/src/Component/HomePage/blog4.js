import React from "react";
import Header from "../Header/Js/Header";
import Footer from "../Footer/Js/Footer";
import { Link } from "react-router-dom";
const Blog4 = () => {
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
                        <h1>Decorate the living room for the new season</h1>
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
                <div className="row justify-content-between mt-5">
                    <div className="col-4 pl-0">
                        <div>
                            <p>
                                Rearranging and renewing your living space is
                                also one of the fastest ways to bring a feeling
                                of freshness, happiness, and energy to you and
                                your family members. Now, let's explore the
                                elements that make up a unique, modern living
                                room to add a new perspective to your space.
                            </p>
                        </div>
                    </div>
                    <div className="col-7 pr-0">
                        <img
                            src="https://i.imgur.com/w5IX5hk.jpg"
                            className="d-block w-100"
                            alt=""
                        />
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    <div className="col-6 pl-0">
                        <img
                            src="https://i.imgur.com/SaTK8v9.jpg"
                            className="d-block w-100"
                            alt=""
                        />
                    </div>
                    <div className="col-5 pr-0">
                        <div>
                            <h2>Full light, bright colors</h2>
                            <p>
                                A beautiful living room space must first be a
                                space with full of light, creating a pleasant
                                feeling and enhancing the colors and materials
                                of interior products. If possible, you should
                                take advantage of natural light because this is
                                the light source that gives the most realistic
                                colors.
                            </p>
                            <p>
                                Besides, to create a fresh and modern feeling
                                for the living room, color coordination is also
                                very important. In addition to the usual neutral
                                tones, you can create more accents with
                                stronger, more prominent colors.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    <div className="col-5">
                        <div>
                            <h2>
                                Caring for every detail, creating a luxurious
                                look
                            </h2>
                            <p>
                                Sparkling, metallic details always create
                                luxurious and impressive accents as soon as you
                                look at them. You can choose products with
                                metallic legs or edges with metallic colors to
                                cleverly combine and elevate your living room
                                space.
                            </p>
                            <p>
                                Every delicate little detail when properly
                                arranged will create a perfect whole. Besides
                                metallic materials, leather materials will also
                                help create a subtle, warm feeling for your
                                space. Not only ensuring the aesthetic and
                                trendy factor, but the leather material also
                                brings softness and comfort to the touch.
                            </p>
                        </div>
                    </div>
                    <div className="col-7 pl-0">
                        <img
                            src="https://i.imgur.com/8es9dXS.jpg"
                            className="d-block w-100"
                            alt=""
                        />
                    </div>
                </div>
                <div className="row mt-2">
                    <img
                        src="https://i.imgur.com/8wh3JkP.jpg"
                        className="d-block w-100"
                        alt=""
                    />
                </div>
                <div className="row justify-content-between mt-5">
                    <div className="col-6">
                        <div>
                            <h2>
                            Natural elements, flowers and grass
                            </h2>
                            <p>
                            Not only in recent years, but for a long time, connecting with nature and plants has become a sustainable, global trend. In interior decoration, blue is also a very important factor to bring freshness and harmony to architectural space.
                            </p>
                            <p>
                            To create a green area in the house, especially in the living room space, you can take advantage of the corners of the room to place green plants. Or choose small potted plants to place on the tea table, water table or can also be replaced with twigs or dried flowers according to your preferences.
                            </p>
                        </div>
                    </div>
                    <div className="col-6 pl-0">
                        <img
                            src="https://i.imgur.com/dztpREV.jpg"
                            className="d-block w-100"
                            alt=""
                        />
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    <div className="col-8 pl-0">
                        <img
                            src="https://i.imgur.com/sfY515H.jpg"
                            className="d-block w-100"
                            alt=""
                        />
                    </div>
                    <div className="col-3 pr-0">
                        <div>
                            <h2>Creativity, Breakthrough</h2>
                            <p>
                            With modern spaces, to make an impression, it is necessary to have breakthroughs of creative and novel designs. Take a look at new trends, discover products with novel and special designs to make your space unique.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    <div className="col-6 pl-0">
                        <img
                            src="https://i.imgur.com/OEu4ZgL.jpg"
                            className="d-block w-100"
                            alt=""
                        />
                    </div>
                    <div className="col-6 pr-0">
                        <div>
                            <p>
                            You can also put more pictures on the empty walls, both increasing the color and showing the high aesthetic taste of the homeowner. The subject of the painting can be inspired by movies, nature, people... according to your preferences but must match the overall space in terms of both color and style.
                            </p>
                            <p>
                            Each beautiful space is like an affirmation of the owner's care and brings visual satisfaction to both the owner as well as the visitors. Continue to be creative and constantly find inspiration to perfect your living space.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-5 d-flex justify-content-center">
                        <Link to="/menu/All">
                            <div className="btn btn-dark">GO SHOP!</div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog4;
