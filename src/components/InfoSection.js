import { Col, Container, Row } from "react-bootstrap";
import { BsPlayFill } from "react-icons/bs";
import styled from "styled-components";
import second from "../assets/images/2nd.webp";
import classes from "../styles/Infosection.module.css";

const Icon = styled(BsPlayFill)`
  color: #cd853f;
  font-size: 40px;
  margin-top: 40px;
  border: 2px solid #c1c2be;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid #cd853f;
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
          <img className={`${classes.imgs}`} src={second} alt="img" />
        </Col>
        <Col className={classes.col2} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <h1>Welcome To Our Website</h1>
          <p className={classes.p}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className={classes.p2}>
            {" "}
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className={classes.icon}>
            <Icon></Icon>
            <Text>
              <p className={classes.p3}>Watch the video</p>
            </Text>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoSection;
