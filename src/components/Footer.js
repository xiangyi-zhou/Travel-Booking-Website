import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
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
          <h4 className={classes.logopart}>Travel War</h4>
          <div className={classes.gaps}>
            <li>5th flora, 700/D kings road, green</li>
            <li>lane New York-1782</li>
            <li className="mt-2">+10 367 826 2567</li>
            <li className="mt-2">contact@carpenter.com</li>
            <div className={classes.icon}>
              <FaFacebookF className={classes.i} />
              <FiInstagram className={`${classes.i} ms-3`} />
              <FaLinkedinIn className={`${classes.i} ms-3`} />
              <FaYoutube className={`${classes.i} ms-3`} />
              <AiOutlineTwitter className={`${classes.i} ms-3`} />
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
                <li>Indonesia</li>
                <li className="mt-3">India</li>
                <li className="mt-3">Italy</li>
                <li className="mt-3">Franch</li>
              </Col>
              <Col>
                <li>America</li>
                <li className="mt-3">Switzerland</li>
                <li className="mt-3">Canada</li>
                <li className="mt-3">England</li>
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
