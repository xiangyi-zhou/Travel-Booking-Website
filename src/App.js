import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Blog from "./components/Blog";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Newsletters from "./components/Newsletters";
import Places from "./components/Places";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Video from "./components/Video";
import { SliderData } from "./data/Slider";
import GlobalStyle from "./globalstyle";

function App() {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <HeroSection slides={SliderData} />
      <InfoSection />
      <Newsletters />
      <Places />
      <Video />
      <Services />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
