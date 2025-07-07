import React from "react";
import axios from "axios";

import Arrows from "./Arrows";
import Dots from "./Dots";
import Slide from "./Slide";

interface Item {
  id: number;
  label: string;
  description: string;
  img: string;
}

const Slider: React.FC = () => {
  const [items, setItems] = React.useState<Item[]>([]);
  const [slide, setSlide] = React.useState<number>(0);

  React.useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        "https://dd1577ebccb7678e.mokky.dev/categoriesItem"
      );
      setItems(response.data);
    };
    loadData();
  }, []);

  return (
    <>
      <div className="slider">Slider</div>
      <Arrows />
      <ul className="slide__list">
        {items.map((item: Item) => (
          <Slide
            key={item.id}
            label={item.label}
            description={item.description}
            img={item.img}
          />
        ))}
      </ul>
      <Dots />
    </>
  );
};

export default Slider;
