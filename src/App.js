import "./App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
