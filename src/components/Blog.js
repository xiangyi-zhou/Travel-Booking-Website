import { Col, Container, Row } from "react-bootstrap";
import imgone from "../assets/images/trips1.webp";
import imgtwo from "../assets/images/trips2.webp";
import imgthree from "../assets/images/trips3.webp";
import classes from "../styles/Blog.module.css";

function Blog() {
  return (
    <Container className={classes.blog}>
      <h1 className="text-center">Recent Trips</h1>
      <Row className={classes.blog2}>
        <Col className={classes.column} sm={12} md={12} lg={4}>
          <img className={classes.cardimg} src={imgone} alt="img" />
          <p className="mt-3 text-muted">Oct 12, 2019</p>
          <h5 className="mt-2">Journey Are The Best Measured in New Friends</h5>
        </Col>
        <Col className={classes.column} sm={12} md={12} lg={4} xl={4}>
          <img className={classes.cardimg} src={imgtwo} alt="img" />
          <p className="mt-3 text-muted">Oct 12, 2019</p>
          <h5 className="mt-2">Journey Are The Best Measured in New Friends</h5>
        </Col>
        <Col className={classes.column} sm={12} md={12} lg={4}>
          <img className={classes.cardimg} src={imgthree} alt="img" />
          <p className="mt-3 text-muted">Oct 12, 2019</p>
          <h5 className="mt-2">Journey Are The Best Measured in New Friends</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
