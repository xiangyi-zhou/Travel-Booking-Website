import {Col, Container, Row} from "react-bootstrap";
import imgOne from "../assets/images/trips1.webp";
import imgTwo from "../assets/images/trips2.webp";
import imgThree from "../assets/images/trips3.webp";
import classes from "../styles/Blog.module.css";

function Blog() {
    return (
        <Container className={classes.blog}>
            <h1 className="text-center">Recent Trips to Yichang</h1>
            <Row className={classes.blog2}>
                <Col className={classes.column} sm={12} md={12} lg={4}>
                    <img className={classes.cardimg} src={imgOne} alt="yichangImg1"/>
                    <p className="mt-3 text-muted">Aug 12, 2022</p>
                    <h5 className="mt-2">Exploring Yichang's Breathtaking Landscapes</h5>
                </Col>
                <Col className={classes.column} sm={12} md={12} lg={4} xl={4}>
                    <img className={classes.cardimg} src={imgTwo} alt="yichangImg2"/>
                    <p className="mt-3 text-muted">Aug 25, 2022</p>
                    <h5 className="mt-2">Discovering Yichang's Rich History and Culture</h5>
                </Col>
                <Col className={classes.column} sm={12} md={12} lg={4}>
                    <img className={classes.cardimg} src={imgThree} alt="yichangImg3"/>
                    <p className="mt-3 text-muted">Sep 2, 2022</p>
                    <h5 className="mt-2">Cruising the Mighty Yangtze River in Yichang</h5>
                </Col>
            </Row>

        </Container>
    );
}

export default Blog;
