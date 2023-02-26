import { useEffect, useRef, useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import styled, { css } from "styled-components/macro";

const Hero = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const Herowrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 10%,
      rgba(0, 0, 0, 0.4) 70%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  font-size: 17px;
  max-width: 160px;
  border: 1px solid white;
  padding: 11px;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #B99B6B;
    color: white;
    cursor: pointer;
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  margin-top: 5rem;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 0.9rem;
  }
  p {
    margin-bottom: 2rem;
  }
`;

const Arrow = styled(MdNavigateNext)``;

const SliderButton = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
const arrowButton = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #B99B6B;
    transform: scale(1.05);
  }
`;

const PreArrow = styled(IoArrowBack)`
  ${arrowButton}
`;
const NextArrow = styled(IoArrowForward)`
  ${arrowButton}
`;

const Herosection = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 5000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const PreSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <Hero>
      <Herowrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <h1>{slide.subtitle}</h1>
                    <p>{slide.price}</p>
                    <Button to={slide.path}>{slide.label}</Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButton>
          <PreArrow onClick={PreSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButton>
      </Herowrapper>
    </Hero>
  );
};

export default Herosection;
