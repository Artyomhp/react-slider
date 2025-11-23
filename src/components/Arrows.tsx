import React from "react";
import { useAppDispatch } from "../redux/store";
import { changeSlide } from "../redux/slider/slice";

const Arrows = () => {
  const dispatch = useAppDispatch();
  return (
    // <div className="flex gap-5 mb-6 justify-end text-lg *:flex *:justify-center *:items-center *:shadow-sm *:rounded-[100px] *:size-10 *:p-2 *:cursor-pointer ">
    <div
      className={`flex gap-5 mb-6 justify-end text-lg *:flex *:justify-center *:items-center *:shadow-sm *:rounded-[100px] *:size-10 *:p-2 *:cursor-pointer`}
    >
      <div onClick={() => dispatch(changeSlide(-1))}>
        <img
          className="rotate-180"
          src="../src/assets/images/icons/arrow.svg"
          alt="right"
        />
      </div>
      <div onClick={() => dispatch(changeSlide(1))}>
        {" "}
        <img src="../src/assets/images/icons/arrow.svg" alt="right" />
      </div>
    </div>
  );
};

export default Arrows;
