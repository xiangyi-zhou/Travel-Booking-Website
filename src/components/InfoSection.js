import { Col, Container, Row } from "react-bootstrap";
import { BsPlayFill } from "react-icons/bs";
import styled from "styled-components";
import info_image from "../assets/images/travel_backpack.jpg";
import classes from "../styles/Infosection.module.css";

const Icon = styled(BsPlayFill)`
  color: #b99b6b;
  font-size: 40px;
  margin-top: 40px;
  border: 2px solid #c1c2be;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid #b99b6b;
  }
`;
const Text = styled.div`
  color: black;
`;

function InfoSection() {
  return (
    <Container className={classes.second}>
      <Row>
        <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
          <img className={`${classes.imgs}`} src={info_image} alt="img" />
        </Col>
        <Col className={classes.col2} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <h1>Welcome to Yichang!</h1>
          <p className={classes.p}>
            Nestled in the heart of China, Yichang offers stunning natural
            scenery and rich cultural heritage. Come explore our city and
            discover the hidden gems that await you.
          </p>
          <p className={classes.p2}>
            From the mighty Yangtze River to ancient temples and historic sites,
            Yichang has something for everyone. Immerse yourself in the local
            culture and experience the beauty of our region. Let us be your
            guide to the adventure of a lifetime!
          </p>

          <div className={classes.icon}>
            <Icon></Icon>
            <Text>
              <p className={classes.p3}>Watch the video</p>
            </Text>
          </div>
        </Col>
      </Row>
      <Row>
        <br />
        <br />
      </Row>
    </Container>
  );
}

export default InfoSection;
