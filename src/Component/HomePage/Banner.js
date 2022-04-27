/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from './Banner.module.css';

const Banner = () => {
  return (
    <section className={classes.summary}>
        <div className="column">
            <div className="columnsmall">
                <div>
                    <h1 className="fonts">We Design World Best Furnitures</h1>
                </div>
                <div style={{"marginTop":"1.5vw"}}>
                    <h1 className="fonts1"> Lorem ipsum dolor sit amet, consectetur. </h1>
                </div>
                <div class="lienket">
                    <a href="#" className="buton"><h1 className="fonts2">Contact Us</h1></a>
                </div>
            </div>
            <div className="columnbig">
                <div className="column1">
                    <div className="square"></div>
                    <div className="content">
                        <div>
                            <h1 className="fonts">Lorem ipsum</h1>
                        </div>
                        <div style={{"marginTop":"10px"}}>
                            <h1 className="fonts1 pa"> Lorem ipsum dolor sit amet, consectetur. </h1>
                        </div>
                    </div>
                </div>
                <div className="column1">
                    <div className="square"></div>
                    <div className="content">
                        <div>
                            <h1 className="fonts">Lorem ipsum</h1>
                        </div>
                        <div style={{"marginTop":"10px"}}>
                            <h1 className="fonts1 pa"> Lorem ipsum dolor sit amet, consectetur. </h1>
                        </div>
                    </div>
                </div>
                <div className="column1 ad">
                    <div className="square"></div>
                    <div className="content">
                        <div>
                            <h1 className="fonts">Lorem ipsum</h1>
                        </div>
                        <div style={{"marginTop":"10px"}}>
                            <h1 className="fonts1 pa"> Lorem ipsum dolor sit amet, consectetur. </h1>
                        </div>
                    </div>
                </div>
                <div className="column1 ad">
                    <div className="square"></div>
                    <div className="content">
                        <div>
                            <h1 className="fonts">Lorem ipsum</h1>
                        </div>
                        <div style={{"marginTop":"10px"}}>
                            <h1 className="fonts1 pa"> Lorem ipsum dolor sit amet, consectetur. </h1>
                        </div>
                    </div>
                </div>
                <div className="mobile">
                    <a style={{"textDecoration":"none"}} className="fonts3 fonts5 fonts6" href="#">Xem thêm...</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Banner;