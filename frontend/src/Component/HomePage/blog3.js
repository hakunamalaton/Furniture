import React from "react";
import Header from "../Header/Js/Header";
import Footer from "../Footer/Js/Footer";
import { Link } from "react-router-dom";
const Blog3 = () => {
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
                        <h1>
                            Five bedroom models that bring comfort to your sleep
                        </h1>
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
                    <p>
                        Sleep is the most important thing in human's daily life.
                        A good sleep will bring many great effects, giving the
                        body a good health and spirit, achieving high
                        performance in study and work. Therefore, the design of
                        a bedroom space that is reasonable, creating a sense of
                        comfort but equally aesthetic has received a lot of
                        attention. So, let's take a look at a few bedroom
                        designs that are suitable for this 2022.
                    </p>
                </div>
                <div className="row justify-content-between mt-5">
                    <div className="col-3 pl-0">
                        <div>
                            <h2>1. Victorian bedroom</h2>
                            <p>
                                Inspired by Europe's Victorian era, the bedroom
                                is designed to emulate the aristocracy inherent
                                in magnificent castles, creating a magical
                                appeal to your bedroom. With bright colors as
                                the main theme for the whole, with an elegant
                                and luxurious design, carved details on the legs
                                and headboard, combined with a bedside table
                                with a similar design, model This bedroom will
                                bring a sense of nobility, creating a palace in
                                your own room.
                            </p>
                        </div>
                    </div>
                    <div className="col-8 pr-0">
                        <img
                            src="https://i.imgur.com/GP3tDqU.jpg"
                            className="d-block w-100"
                            alt=""
                        />
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    <div className="col-7 pl-0">
                        <img
                            src="https://i.imgur.com/y6RY2Xc.jpg"
                            className="d-block w-100"
                            alt=""
                        />
                    </div>
                    <div className="col-4 pr-0">
                        <div>
                            <h2>2. Rattan leather bedroom</h2>
                            <p>
                                Returning to the classic elegance of Vietnam,
                                suitable for those who want to find cozy and
                                peaceful spaces but still exude luxury and
                                modernity. With the combination of rattan and
                                melaleuca wood, this bedroom model also creates
                                strength and sustainability over time.
                            </p>
                            <p>
                                The classic brown color when combined with the
                                natural yellow color of the rattan fibers has
                                brought warmth and a feeling of closeness to the
                                bedroom. In addition, the foot of the bed is
                                covered with metallic metal to help increase the
                                elegance of the overall room.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    <div className="col-4 pl-0">
                        <div>
                            <h2>3. Modern bedroom with upholstered bed</h2>
                            <p>
                                Contrary to using the space of the drawer bed,
                                if your bedroom has a spacious space and are
                                looking for a bedroom with a modern and liberal
                                style, this will be the number 1 choice for you.
                            </p>
                        </div>
                    </div>
                    <div className="col-7 pr-0">
                        <img
                            src="https://i.imgur.com/JNgFSwr.jpg"
                            className="d-block w-100"
                            alt=""
                        />
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    <div className="col-6 pl-0">
                        <img
                            src="https://i.imgur.com/FUVqJVI.jpg"
                            className="d-block w-100"
                            alt=""
                        />
                    </div>
                    <div className="col-5 pr-0">
                        <div>
                            <h2>4. Bedroom with a pull-out bed</h2>
                            <p>
                                Created with the same orientation to make the
                                most of space, bringing neatness to the room,
                                this will be a suitable design for small and
                                medium apartments, making the room more spacious
                                and convenient.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <h2>5. Wooden bed bedroom</h2>
                </div>
                <div className="row">
                    With Nordic style and innovation in emphasizing warm tones,
                    the bedroom with wooden bed will be a modern private space
                    but still has a cozy and warm touch.
                </div>
                <div className="row justify-content-between mt-5">
                    <img
                        src="https://i.imgur.com/ZXznG2T.jpg"
                        className="d-block w-100"
                        alt=""
                    />
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

export default Blog3;
