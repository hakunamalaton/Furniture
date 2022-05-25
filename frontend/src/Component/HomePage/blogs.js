import { Link } from "react-router-dom";
import "./blogs.css";
const Blogs = () => {
    return (
        <div className="blogs-component my-5">
            <div className="row justify-content-center mx-0">
                <h1>
                    <strong>INSPIRATION CORNER</strong>
                </h1>
            </div>
            <div className="mt-4">
                <div
                    id="carouselExampleIndicators-blogs"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-target="#carouselExampleIndicators-blogs"
                            data-slide-to="0"
                            className="active"
                            style={{ backgroundColor: "#054c73" }}
                        ></li>
                        <li
                            data-target="#carouselExampleIndicators-blogs"
                            data-slide-to="1"
                            style={{ backgroundColor: "#054c73" }}
                        ></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center">
                                <div className="col-5">
                                    <Link
                                        to="/blogs/save-apartment-space-in-a-smart-way"
                                        className="text-decoration-none text-dark"
                                    >
                                        <div>
                                            <img
                                                src="https://i.imgur.com/jrAJp2P.png"
                                                className="d-block w-100"
                                                alt="..."
                                            />

                                            <div className="title-blog mt-3">
                                                <h3>
                                                    Save apartment space in a
                                                    smart way
                                                </h3>
                                            </div>
                                            <div className="separation">
                                                <div
                                                    style={{
                                                        width: "50px",
                                                        height: "5px",
                                                        backgroundColor:
                                                            "#054c73",
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="sub-content-blog">
                                                <p>
                                                    With apartments, the space
                                                    area will be quite limited
                                                    to be able to optimize the
                                                    space more [...]
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-5">
                                    <Link
                                        to="/blogs/3-ideas-to-fill-in-the-gaps-in-your-room"
                                        className="text-decoration-none text-dark"
                                    >
                                        <div>
                                            <img
                                                src="https://i.imgur.com/PJvA0hf.png"
                                                className="d-block w-100"
                                                alt="..."
                                            />

                                            <div className="title-blog mt-3">
                                                <h3>
                                                    3 ideas to fill in the gaps
                                                    in your room
                                                </h3>
                                            </div>
                                            <div className="separation">
                                                <div
                                                    style={{
                                                        width: "50px",
                                                        height: "5px",
                                                        backgroundColor:
                                                            "#054c73",
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="sub-content-blog">
                                                <p>
                                                    Have you ever felt that your
                                                    room space is still empty
                                                    and want to buy more
                                                    furniture? [...]
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center">
                                <div className="col-5">
                                    <Link
                                        to="/blogs/5-bedroom-models-that-bring-comfort-to-your-sleep"
                                        className="text-decoration-none text-dark"
                                    >
                                        <div>
                                            <img
                                                src="https://i.imgur.com/RQaOQGs.png"
                                                className="d-block w-100"
                                                alt="..."
                                            />

                                            <div className="title-blog mt-3">
                                                <h3>
                                                    5 bedroom models that bring
                                                    comfort to your sleep
                                                </h3>
                                            </div>
                                            <div className="separation">
                                                <div
                                                    style={{
                                                        width: "50px",
                                                        height: "5px",
                                                        backgroundColor:
                                                            "#054c73",
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="sub-content-blog">
                                                <p>
                                                    Sleep is the most important
                                                    thing in human's daily life.
                                                    [...]
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-5">
                                    <Link
                                        to="/blogs/decorate-the-living-room-for-the-new-season"
                                        className="text-decoration-none text-dark"
                                    >
                                        <div>
                                            <img
                                                src="https://i.imgur.com/A8HXKkd.png"
                                                className="d-block w-100"
                                                alt="..."
                                            />

                                            <div className="title-blog mt-3">
                                                <h3>
                                                    Decorate the living room for the new season
                                                </h3>
                                            </div>
                                            <div className="separation">
                                                <div
                                                    style={{
                                                        width: "50px",
                                                        height: "5px",
                                                        backgroundColor:
                                                            "#054c73",
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="sub-content-blog">
                                                <p>
                                                    Rearranging and renewing
                                                    living space is also one of
                                                    the fastest ways to bring a
                                                    feeling of freshness,
                                                    happiness [...]
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
