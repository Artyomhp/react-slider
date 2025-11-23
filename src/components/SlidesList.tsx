// const SlidesList = ({
//   items,
//   slide,
//   goToSlide,
// }: {
//   items: Item[];
//   slide: number;
//   goToSlide: (number: number) => void;
// }) => {
//   return (
//     <ul className="slides__list">
//       {items.map((item: Item, index: number) => (
//         <li key={item.id} className={index === slide ? "active" : ""}>
//           <Slide
//             label={item.label}
//             description={item.description}
//             img={item.img}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default SlidesList;

import Slide from "./Slide";
import type { SlideProps } from "../redux/slider/types";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import "../scss/slider.scss";

const SlidesList = () => {
  const { items, currentSlide } = useSelector(
    (state: RootState) => state.slider
  );
  return (
    <>
      <ul
        className="slides-list grid auto-cols-[calc(100%/2)] grid-flow-col  flex-nowrap"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {items.map((item: SlideProps) => (
          <Slide key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};

export default SlidesList;
