import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Person, Logout } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.png";
import Backdrop from "../backdrop/index";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/userSlice.js";
function Header() {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const menuToggleRef = useRef();
  const navRef = useRef();
  const headerRef = useRef();
  const userId = useSelector((state) => state.user.id);
  const totalCart = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();


  const logOutClickHandler = () => {
    signOut(auth)
      .then(async (result) => {
        const resetUser = {
          id: null,
          email: null,
          name: null,
          phoneNumber: null,
          address: null,
          gender: null,
        };
        await dispatch(updateUser(resetUser));
        backdropClickHandler();
      })
      .catch((err) => console.log("err"));
  };
  const backdropClickHandler = function () {
    setOpenBackdrop(false);
    menuToggleRef.current.classList.remove("active");
    navRef.current.classList.remove("active");
  };

  const menuToggleClickHandler = function (e) {
    menuToggleRef.current.classList.toggle("active");
    navRef.current.classList.toggle("active");
    const isActive = menuToggleRef.current.classList.contains("active");
    if (isActive) {
      setOpenBackdrop(true);
    } else {
      setOpenBackdrop(false);
    }
  };

  return (
    <>
      <header className="header shrink" ref={headerRef}>
        <div className="container">
          <div className="header__container">
            <div
              className="header__menu-toggle"
              onClick={menuToggleClickHandler}
              ref={menuToggleRef}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
            <nav className="header__nav" ref={navRef}>
              <ul className="header__nav-items">
                <li className="header__nav-item">
                  <Link onClick={backdropClickHandler} to="/iphone">
                    Iphone
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link onClick={backdropClickHandler} to="/ipad">
                    Ipad
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link onClick={backdropClickHandler} to="/macbook">
                    MacBook
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link onClick={backdropClickHandler} to="/accessories">
                    phụ kiện
                  </Link>
                </li>
              </ul>
            </nav>
            {userId && (
              <ul className="header__user-items">
                <li className="header__user-item">
                  <Link onClick={backdropClickHandler} to="/cart">
                    <Badge
                      badgeContent={totalCart}
                      style={{ fontSize: "2rem" }}
                      color="secondary"
                    >
                      <ShoppingCart />
                    </Badge>
                  </Link>
                </li>
                <li className="header__user-item">
                  <Link onClick={backdropClickHandler} to="/user">
                    <Person></Person>
                  </Link>
                </li>
                <li className="header__user-item">
                  <Link onClick={logOutClickHandler} to="/">
                    <Logout></Logout>
                  </Link>
                </li>
              </ul>
            )}
            {!userId && (
              <div className="header__nav-item">
                <Link onClick={backdropClickHandler} to="/login">
                  Log in
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      {openBackdrop && <Backdrop onOpen={backdropClickHandler} />}
    </>
  );
}

export default Header;
