import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import Iphone from "../pages/Iphone";
import Ipad from "../pages/Ipad";
import Macbook from "../pages/Macbook";
import Accessory from "../pages/Accessory";
import ProductDetail from "../pages/ProductDetail";
import LogIn from "../components/logIn";
import SignUp from "../components/signUp";
import User from "../pages/User.js";

function RoutesPage() {
  const userId = useSelector((state) => state.user.id);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/iphone" element={<Iphone />}></Route>
      <Route path="/ipad" element={<Ipad />}></Route>
      <Route path="/macbook" element={<Macbook />}></Route>
      <Route path="/Accessories" element={<Accessory />}></Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      {userId && <Route path="user" element={<User />}></Route>}
      <Route path="/product/:slug" element={<ProductDetail />}></Route>
    </Routes>
  );
}

export default RoutesPage;
