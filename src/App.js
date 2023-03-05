import "./App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  //useEffect
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
