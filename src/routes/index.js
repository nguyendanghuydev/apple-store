import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import Iphone from "../pages/Iphone";
import Ipad from "../pages/Ipad";
import Macbook from "../pages/Macbook";
import Accessory from "../pages/Accessory";
import ProductDetail from "../pages/ProductDetail";
import LogIn from "../pages/Login";
import SignUp from "../pages/SignUp";
import User from "../pages/User.js";
import Cart from "../pages/Cart";

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
      <Route path="/product/:slug" element={<ProductDetail />}></Route>
      <Route path="*" element={<h1>Trang Này Chưa Cập Nhật </h1>}></Route>

      {userId && <Route path="user" element={<User />}></Route>}
      {userId && <Route path="/cart" element={<Cart/>}></Route>}
    </Routes>
  );
}

export default RoutesPage;
