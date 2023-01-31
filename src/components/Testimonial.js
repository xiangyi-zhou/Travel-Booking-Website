import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Component } from "react";
import { Container } from "react-bootstrap";
import { ImQuotesRight } from "react-icons/im";
import OwlCarousel from "react-owl-carousel";
import imgone from "../assets/images/Testmonial.webp";
import "../styles/Testimonial.css";

export class Owldemo1 extends Component {
  render() {
    return (
      <div className="tesimonial">
        <Container fluid className="container-fluidses">
          <OwlCarousel
            items={1}
            className="owl-theme"
            loop
            autoplay={true}
            margin={8}
          >
            <div className="cardss">
              <img
                className="imgases"
                src={imgone}
                alt="imgone"
                style={{ width: "110px" }}
              />
              <ImQuotesRight className="quata" />
              <p className="dummy mt-3 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="dummy mt-2 text-muted">- Tom Mouse</p>
            </div>
            <div className="cardss">
              <img
                className="imgases"
                src={imgone}
                alt="imgone"
                style={{ width: "110px" }}
              />
              <ImQuotesRight className="quata" />
              <p className="dummy mt-3 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="dummy mt-2 text-muted">- Tom Mouse</p>
            </div>
            <div className="cardss">
              <img
                className="imgases position-relative"
                src={imgone}
                alt="imgone"
                style={{ width: "110px" }}
              />
              <ImQuotesRight className="quata" />
              <p className="dummy mt-3 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p className="dummy mt-2 text-muted">- Tom Mouse</p>
            </div>
          </OwlCarousel>
        </Container>
      </div>
    );
  }
}

export default Owldemo1;
