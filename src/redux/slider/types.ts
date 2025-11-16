export interface SlideProps {
  id: number;
  label: string;
  description: string;
  img: string;
}

export interface SliderState {
  items: SlideProps[];
  currentSlide: number;
}
