import Slider from "./components/Slider";
import "./scss/slider.scss";
import "./index.css";

function App() {
  return (
    <div className="w-[calc(100vw-200px)] mx-auto h-100% max-w-[1400px]">
      <div className="pt-6">
        <Slider />
      </div>
    </div>
  );
}

export default App;
