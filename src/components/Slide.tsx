import React from "react";
import type { SlideProps } from "../redux/slider/types";
import "../scss/slider.scss";

const Slide: React.FC<SlideProps> = ({ label, description, img }) => {
  return (
    <div className="slide">
      <div>{label}</div>
      <div>{description}</div>

      <img src={`./src/assets/images/categories/${img}`} alt="" />
    </div>
  );
};

export default Slide;
