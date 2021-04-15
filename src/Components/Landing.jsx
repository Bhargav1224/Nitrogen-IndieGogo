import React from "react";
import { Footer } from "./Footer/Footer";
import { SlideShow } from "./HomeSlideShow/SlideShow";
import { Slide } from "./ImageSlider/Slide";

export const Landing = () => {
  return (
    <>
      <Slide />
      <SlideShow />
      <Footer />
    </>
  );
};
