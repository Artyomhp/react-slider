import React from "react";
import { useSelector } from "react-redux";

import Arrows from "./Arrows";
import Dots from "./Dots";
import Slide from "./Slide";
import type { RootState } from "../redux/store";
import { useAppDispatch } from "../redux/store";
import { fetchSliderData } from "../redux/slider/asyncActions";
import SlidesList from "./SlidesList";

const Slider: React.FC = () => {
  const dispatch = useAppDispatch();

  // const { items } = useSelector((state: RootState) => state.slider);

  React.useEffect(() => {
    dispatch(fetchSliderData());
  });

  return (
    <div className="slider">
      <Arrows />
      {/* <ul className="slide__list">
        {items.map((item: SlideProps) => (
          <Slide
            key={item.id}
            label={item.label}
            description={item.description}
            img={item.img}
          />
        ))}
      </ul> */}
      <SlidesList />
      <Dots />
    </div>
  );
};

export default Slider;

// const [items, setItems] = React.useState<Item[]>([]);
// const [slide, setSlide] = React.useState<number>(0);

// React.useEffect(() => {
//   const loadData = async () => {
//     const response = await axios.get(
//       "https://dd1577ebccb7678e.mokky.dev/categoriesItem"
//     );
//     setItems(response.data);
//   };
//   loadData();
// }, []);

// const changeSlide = (direction: number): void => {
//   setSlide(
//     (prev: number) => (prev + direction + items.length) % items.length
//   );
// };

// const goToSlide = (number: number) => {
//   setSlide(number % items.length);
// };
