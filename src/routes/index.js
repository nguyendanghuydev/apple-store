import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Iphone from "../pages/Iphone";
import Ipad from "../pages/Ipad";
import Macbook from "../pages/Macbook";
import Accessory from "../pages/Accessory";
function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iphone" element={<Iphone />}></Route>
      <Route path="/ipad" element={<Ipad />}></Route>
      <Route path="/macbook" element={<Macbook />}></Route>
      <Route path="/Accessories" element={<Accessory />}></Route>
    </Routes>
  );
}

export default RoutesPage;
