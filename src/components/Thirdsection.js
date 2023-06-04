import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "../../src/App.css";
import america from "../assets/images/amrica.webp";
import brazil from "../assets/images/Brazil.png";
import indonesia from "../assets/images/Indonesia.png";
import italy from "../assets/images/italy.png";
import london from "../assets/images/london.webp";
import maldivs from "../assets/images/Maldivs.png";
import nepal from "../assets/images/Nepal.png";
import classes from "../styles/Third.module.css";

const Effect = styled.div`
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    height: 89vh;
    width: 13.5%;
    bottom: 1vh;

    opacity: 0.3;
    background: linear-gradient(
      to bottom,
      rgba(4, 14, 39, 0) 0%,
      rgba(4, 14, 39, 0.7) 100%
    );
  }
`;

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={classes.third}>
        <div className={classes.slider}>
          <h1 className={classes.caption}>Popular Destination</h1>

          <p xl={12} sm={1} className={classes.p}>
            {" "}
            Suffered alteration in some form, by injected humour or good day
            randomised booth anim 8-bit hella wolf moon beard words.
          </p>

          <Slider className={classes.mainslider} {...settings}>
            <Effect>
              <div className={classes.img}>
                <h4 className={classes.imgCap}>Italy</h4>
                <img className={classes.imgtag} src={italy} alt="italy"></img>
              </div>
            </Effect>
            <Effect>
              <div>
                <h4 className={classes.imgCap}>Brazil</h4>
                <img className={classes.imgtag} src={brazil} alt="italy"></img>
              </div>
            </Effect>
            <Effect>
              <div>
                <h4 className={classes.imgCap}>Maldivs</h4>
                <img className={classes.imgtag} src={nepal} alt="italy"></img>
              </div>
            </Effect>
            <Effect>
              <div>
                <h4 className={classes.imgCap}>Nepal</h4>
                <img className={classes.imgtag} src={maldivs} alt="italy"></img>
              </div>
            </Effect>
            <Effect>
              <div>
                <h4 className={classes.imgCap}>Vutan</h4>
                <img
                  className={classes.imgtag}
                  src={indonesia}
                  alt="italy"
                ></img>
              </div>
            </Effect>
            <Effect>
              <div>
                <h4 className={classes.imgCap}>America</h4>
                <img className={classes.imgtag} src={america} alt="italy"></img>
              </div>
            </Effect>
            <Effect>
              <div>
                <h4 className={classes.imgCap}>London</h4>
                <img className={classes.imgtag} src={london} alt="italy"></img>
              </div>
            </Effect>
          </Slider>
        </div>
      </div>
    );
  }
}