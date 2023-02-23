import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Component} from "react";
import {Container} from "react-bootstrap";
import {ImQuotesRight} from "react-icons/im";
import OwlCarousel from "react-owl-carousel";
import testimonialImg1 from "../assets/images/Testmonial.webp";
import testimonialImg2 from "../assets/images/Testmonial.webp";
import testimonialImg3 from "../assets/images/Testmonial.webp";
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
                                src={testimonialImg1}
                                alt="testimonialImg1"
                                style={{width: "110px"}}
                            />
                            <ImQuotesRight className="quata"/>
                            <p className="dummy mt-3 ">
                                Yichang's natural beauty left me speechless. The stunning landscapes and rich cultural
                                heritage were truly unforgettable.
                            </p>
                            <p className="dummy mt-2 text-muted">- Sarah Lee</p>
                        </div>

                        <div className="cardss">
                            <img
                                className="imgases"
                                src={testimonialImg2}
                                alt="testimonialImg2"
                                style={{width: "110px"}}
                            />
                            <ImQuotesRight className="quata"/>
                            <p className="dummy mt-3 ">
                                The luxury accommodations in Yichang were beyond my expectations. From the comfortable
                                rooms to the world-class amenities, every detail was perfect.
                            </p>
                            <p className="dummy mt-2 text-muted">- John Smith</p>
                        </div>

                        <div className="cardss">
                            <img
                                className="imgases"
                                src={testimonialImg3}
                                alt="testimonialImg3"
                                style={{width: "110px"}}
                            />
                            <ImQuotesRight className="quata"/>
                            <p className="dummy mt-3 ">
                                Yichang's expert guides helped me discover hidden gems and learn about the city's rich
                                history and culture. I couldn't have asked for a better travel experience.
                            </p>
                            <p className="dummy mt-2 text-muted">- Rachel Chen</p>
                        </div>

                    </OwlCarousel>
                </Container>
            </div>
        );
    }
}

export default Owldemo1;
