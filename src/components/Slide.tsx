import React from "react";

interface Item {
  label: string;
  description: string;
  img: string;
}

const Slide: React.FC<Item> = ({ label, description, img }) => {
  return (
    <li>
      <div>{label}</div>
      <div>{description}</div>
      <img src={`./src/assets/images/categories/${img}`} alt="" />
    </li>
  );
};

export default Slide;
