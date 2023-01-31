import { Card, Col, Container, Row } from "react-bootstrap";
import { AiOutlineClockCircle, AiTwotoneStar } from "react-icons/ai";

import imgfour from "../assets/images/carliponia2.png";
import imgone from "../assets/images/Carlofornia.png";
import imgtwo from "../assets/images/Londonsss.webp";
import imgthree from "../assets/images/Meme beach.png";
import imgfive from "../assets/images/Saintmartin.png";
import classes from "../styles/Places.module.css";

function Places() {
  return (
    <Container className={classes.place}>
      <h1 className="text-center">Popular Places</h1>
      <p className={classes.p}>
        Suffered alteration in some form, by injected humour or good day
        randomised booth anim 8-bit hella wolf moon beard words.
      </p>
      <Row className={classes.row1}>
        <Col className="mt-4" lg={4} md={6} sm={12}>
          <Card className={classes.card} style={{ width: "100%" }}>
            <h5 className={classes.dollers}>$500</h5>
            <Card.Img variant="top" className={classes.Img} src={imgone} />
            <Card.Body>
              {" "}
              <Card.Title className={classes.h1}>Carlofornia</Card.Title>
              <Card.Text>United State of America</Card.Text>
              <div className={classes.iconmain}>
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <span>(20 Review)</span>
                <AiOutlineClockCircle className={classes.clock} />
                <span className="ms-1">5 day</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col className="mt-4" lg={4} md={6} sm={12}>
          <Card className={classes.card} style={{ width: "100%" }}>
            <h5 className={classes.dollers}>$500</h5>
            <Card.Img variant="top" className={classes.Img} src={imgtwo} />
            <Card.Body>
              <Card.Title className={classes.h1}>London</Card.Title>
              <Card.Text>United State of America</Card.Text>
              <div className={classes.iconmain}>
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <span>(20 Review)</span>
                <AiOutlineClockCircle className={classes.clock} />
                <span className="ms-1">5 day</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-4" lg={4} md={6} sm={12}>
          <Card className={classes.card} style={{ width: "100%" }}>
            <h5 className={classes.dollers}>$500</h5>
            <Card.Img variant="top" className={classes.Img} src={imgthree} />
            <Card.Body>
              <Card.Title className={classes.h1}>Meme Brach</Card.Title>
              <Card.Text>United States</Card.Text>
              <div className={classes.iconmain}>
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <span>(20 Review)</span>
                <AiOutlineClockCircle className={classes.clock} />
                <span className="ms-1">5 day</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col className="mt-4" lg={4} md={6} sm={12}>
          <Card className={classes.card} style={{ width: "100%" }}>
            <h5 className={classes.dollers}>$500</h5>
            <Card.Img variant="top" className={classes.Img} src={imgfour} />
            <Card.Body>
              <Card.Title className={classes.h1}>Carlofornia</Card.Title>
              <Card.Text>United States America</Card.Text>
              <div className={classes.iconmain}>
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <span>(20 Review)</span>
                <AiOutlineClockCircle className={classes.clock} />
                <span className="ms-1">5 day</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-4" lg={4} md={6} sm={12}>
          <Card className={classes.card} style={{ width: "100%" }}>
            <h5 className={classes.dollers}>$500</h5>
            <Card.Img variant="top" className={classes.Img} src={imgfive} />
            <Card.Body>
              <Card.Title className={classes.h1}>Saintmartin</Card.Title>
              <Card.Text>United States America</Card.Text>
              <div className={classes.iconmain}>
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <span>(20 Review)</span>
                <AiOutlineClockCircle className={classes.clock} />
                <span className="ms-1">5 day</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-4" lg={4} md={6} sm={12}>
          <Card className={classes.card} style={{ width: "100%" }}>
            <h5 className={classes.dollers}>$500</h5>
            <Card.Img variant="top" className={classes.Img} src={imgone} />
            <Card.Body>
              <Card.Title className={classes.h1}>Carlofornia</Card.Title>
              <Card.Text>United States</Card.Text>
              <div className={classes.iconmain}>
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <AiTwotoneStar className={classes.icon} />
                <span>(20 Review)</span>
                <AiOutlineClockCircle className={classes.clock} />
                <span className="ms-1">5 day</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Places;
