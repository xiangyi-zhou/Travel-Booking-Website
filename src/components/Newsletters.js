import { Button, Col, Container, Form, Row } from "react-bootstrap";
import classes from "../styles/Newsletter.module.css";
function Newsletters() {
  return (
    <Container fluid className={classes.newsletters}>
      <Row className={classes.row}>
        <Col
          sm={12}
          md={12}
          lg={6}
          xl={6}
          xxl={6}
          className={`${classes.caption}`}
        >
          <h1 className={classes.h1}>Subscribe Our Newsletter</h1>
          <p>
            Subscribe newsletter to get offers and about new places to discover.
          </p>
        </Col>
        <Col sm={12} md={12} lg={6} xl={6} xxl={6} className={classes.input}>
          <Form.Control type="email" placeholder="Enter email" />
          <Button className={classes.btn}>Subscribe</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Newsletters;
