import { Col, Container, Row } from "react-bootstrap";
import { FaStreetView } from "react-icons/fa";
import { GiDogHouse, GiJourney } from "react-icons/gi";
import classes from "../styles/Services.module.css";

function Services() {
  return (
    <Container className={classes.service}>
      <Row className={classes.row}>
        <Col sm={12} md={12} lg={4} className="mt-4">
          <GiJourney className={classes.icon} />
          <h4 className="mt-4">Comfortable Journey</h4>
          <p>
            A wonderful serenity has taken to the possession of my entire soul.
          </p>
        </Col>
        <Col sm={12} md={12} lg={4} className="mt-4">
          <GiDogHouse className={classes.icon} />
          <h4 className="mt-4">Luxuries Hotel</h4>
          <p>
            A wonderful serenity has taken to the possession of my entire soul.
          </p>
        </Col>
        <Col sm={12} md={12} lg={4} className="mt-4">
          <FaStreetView className={classes.icon} />
          <h4 className="mt-4">Travel Guide</h4>
          <p>
            A wonderful serenity has taken to the possession of my entire soul.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
