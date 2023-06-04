import { Card, Col, Container, Row } from "react-bootstrap";
import { AiOutlineClockCircle, AiTwotoneStar } from "react-icons/ai";
import classes from "../styles/Places.module.css";
import { placesData } from "../data/placesData";

function Places() {
  return (
    <Container className={classes.place}>
      <h1 className="text-center">Popular Places</h1>
      <p className={classes.p}>
        Discover the stunning natural beauty and rich cultural heritage of
        Yichang with our curated travel experiences.
      </p>
      <Row className={classes.row1}>
        {placesData.map((place, index) => (
          <Col className="mt-4" lg={4} md={6} sm={12} key={index}>
            <Card className={classes.card} style={{ width: "100%" }}>
              <h5 className={classes.dollers}>${place.price}</h5>
              <Card.Img
                variant="top"
                className={classes.Img}
                src={place.image}
              />
              <Card.Body>
                <Card.Title className={classes.h1}>{place.name}</Card.Title>
                <Card.Text>{place.location}</Card.Text>
                <div className={classes.iconmain}>
                  <AiTwotoneStar className={classes.icon} />
                  <AiTwotoneStar className={classes.icon} />
                  <AiTwotoneStar className={classes.icon} />
                  <AiTwotoneStar className={classes.icon} />
                  <AiTwotoneStar className={classes.icon} />
                  <span>({place.reviews} Reviews)</span>
                  <AiOutlineClockCircle className={classes.clock} />
                  <span className="ms-1">{place.duration} day</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Places;