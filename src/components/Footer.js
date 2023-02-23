import {Col, Container, Row} from "react-bootstrap";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaFacebookF, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import imgone from "../assets/images/insta1.webp";
import imgtwo from "../assets/images/insta2.webp";
import imgthree from "../assets/images/insta3.webp";
import imgfour from "../assets/images/insta4.webp";
import imgfive from "../assets/images/insta5.webp";
import imgsix from "../assets/images/insta6.webp";
import classes from "../styles/Footer.module.css";

function Footer() {
    return (
        <Container fluid className={classes.footer}>
            <Row className={classes.secondfoot}>
                <Col className="mt-4" sm={12} md={12} lg={3} xxl={3}>
                    <h4 className={classes.logopart}>Yichang Discovery</h4>
                    <div className={classes.gaps}>
                        <li>No.123 Fake Street, Yichang City</li>
                        <li>Hubei Province, China</li>
                        <li className="mt-2">+86 123 4567 8901</li>
                        <li className="mt-2">info@yichangtravel.com</li>
                        <li className="mt-2">Note: Please note that this contact information is for demonstration
                            purposes only and is not a real contact. We apologize for any confusion this may cause.
                        </li>
                        <div className={classes.icon}>
                            <FaFacebookF className={classes.i}/>
                            <FiInstagram className={`${classes.i} ms-3`}/>
                            <FaLinkedinIn className={`${classes.i} ms-3`}/>
                            <FaYoutube className={`${classes.i} ms-3`}/>
                            <AiOutlineTwitter className={`${classes.i} ms-3`}/>
                        </div>
                    </div>
                </Col>
                <Col className="mt-4" sm={12} md={12} lg={2} xxl={3}>
                    <h4>Company</h4>
                    <div className={classes.gaps}>
                        <li>Pricing</li>
                        <li className="mt-3">About</li>
                        <li className="mt-3">Gallery</li>
                        <li className="mt-3">Contact</li>
                    </div>
                </Col>
                <Col className="mt-4" sm={12} md={12} lg={3} xxl={3}>
                    <h4>Popular Destination</h4>
                    <div className={classes.gaps}>
                        <Row>
                            <Col>
                                <li>Three Gorges Dam</li>
                                <li className="mt-3">Xiling Gorge</li>
                                <li className="mt-3">Huangling Temple</li>
                                <li className="mt-3">Yiling Square</li>
                            </Col>
                            <Col>
                                <li>Gezhouba Dam</li>
                                <li className="mt-3">Chinese Sturgeon Museum</li>
                                <li className="mt-3">Sanyou Cave</li>
                                <li className="mt-3">Yichang Museum</li>
                            </Col>

                        </Row>
                    </div>
                </Col>
                <Col className={`${classes.insta} mt-4`} sm={12} md={12} lg={4} xxl={3}>
                    <h4>Instagram</h4>
                    <Row className={classes.instarow}>
                        <Col>
                            <img
                                className={`${classes.instaimg} mt-3`}
                                src={imgone}
                                alt="img"
                            />
                        </Col>
                        <Col>
                            <img
                                className={`${classes.instaimg} mt-3`}
                                src={imgtwo}
                                alt="img"
                            />
                        </Col>
                        <Col>
                            <img
                                className={`${classes.instaimg} mt-3`}
                                src={imgthree}
                                alt="img"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img
                                className={`${classes.instaimg} mt-3`}
                                src={imgfour}
                                alt="img"
                            />
                        </Col>
                        <Col>
                            <img
                                className={`${classes.instaimg} mt-3`}
                                src={imgfive}
                                alt="img"
                            />
                        </Col>
                        <Col>
                            <img
                                className={`${classes.instaimg} mt-3`}
                                src={imgsix}
                                alt="img"
                            />
                        </Col>
                    </Row>
                </Col>
                <hr className={classes.hr}></hr>
                <li className={classes.copyright}>
                    Copyright ©2023 All rights reserved <br/>
                    <span className={classes.creater}> Xiangyi</span>
                </li>
            </Row>
        </Container>
    );
}

export default Footer;
