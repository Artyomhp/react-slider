import React from "react";
import type { SlideProps } from "../redux/slider/types";
import "../scss/slider.scss";

const Slide: React.FC<SlideProps> = ({ label, description, img, id }) => {
  return (
    // <li className="flex justify-between relative items-center h-77 p-7.5 grow shrink-0 basis-1/3 bg-slate-100 rounded-[25px]">
    <li className="flex justify-between relative items-center  p-7.5  bg-slate-100 rounded-[25px]">
      <div className="flex flex-col gap-5 items-start">
        <div className=" text-2xl font-bold text-slate-900">{label}</div>
        <div className="w-70 text-lg  text-slate-500">{description}</div>

        <button className=" px-6.75 py-3.5 bg-white rounded-[100px] text-left text-slate-900 font-noto ">
          Выбрать
        </button>
      </div>
      <img src={`./src/assets/images/categories/${img}`} alt="" />
    </li>
  );
};

export default Slide;
