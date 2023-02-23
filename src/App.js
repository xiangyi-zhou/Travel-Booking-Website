import { useState } from "react";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Thirdsection from "../src/components/Thirdsection";
import Blog from "./components/Blog";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import Newsletters from "./components/Newsletters";
import Places from "./components/Places";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Video from "./components/Video";
import { SliderData } from "./data/Slidere";
import GlobalStyle from "./globalstyle";

function App() {
  const [isOpen, setOpen] = useState(false);

  const toggole = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <GlobalStyle />
      <Navbar toggole={toggole} />
      <Dropdown isOpen={isOpen} toggole={toggole} />
      <Herosection slides={SliderData} />
      <InfoSection />
      <Thirdsection />
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
