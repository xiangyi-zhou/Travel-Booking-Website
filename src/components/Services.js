import {Col, Container, Row} from "react-bootstrap";
import {FaHotel, FaMapMarkerAlt, FaMountain} from "react-icons/fa";
import classes from "../styles/Services.module.css";

function Services() {
    return (
        <Container className={classes.service}>
            <Row className={classes.row}>
                <Col sm={12} md={12} lg={4} className="mt-4">
                    <FaMountain className={classes.icon}/>
                    <h4 className="mt-4">Scenic Tours</h4>
                    <p>Explore breathtaking landscapes with our tours.</p>
                </Col>
                <Col sm={12} md={12} lg={4} className="mt-4">
                    <FaHotel className={classes.icon}/>
                    <h4 className="mt-4">Accommodations</h4>
                    <p>Stay in style with luxury accommodations.</p>
                </Col>
                <Col sm={12} md={12} lg={4} className="mt-4">
                    <FaMapMarkerAlt className={classes.icon}/>
                    <h4 className="mt-4">Expert Guides</h4>
                    <p>Discover hidden gems with expert guides.</p>
                </Col>
            </Row>

        </Container>
    );
}

export default Services;
