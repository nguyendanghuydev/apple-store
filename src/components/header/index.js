import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Person, Logout } from "@mui/icons-material";
import logo from "../../assets/images/logo.png";
import Backdrop from "../backdrop/index";

function Header() {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const menuToggleRef = useRef();
  const navRef = useRef();
  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.pageYOffset;
      if (scrollY > 90) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
        window.removeEventListener('scroll')
    };
  }, []);

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
      <header className="header" ref={headerRef}>
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
                  <Link to="/iphone">Iphone</Link>
                </li>
                <li className="header__nav-item">
                  <Link to="/ipad">Ipad</Link>
                </li>
                <li className="header__nav-item">
                  <Link to="/macbook">MacBook</Link>
                </li>
                <li className="header__nav-item">
                  <Link to="/accessories">phụ kiện</Link>
                </li>
              </ul>
            </nav>
            <ul className="header__user-items">
              <li className="header__user-item">
                <Link to="/cart">
                  <ShoppingCart />
                </Link>
              </li>
              <li className="header__user-item">
                <Link to="/user">
                  <Person></Person>
                </Link>
              </li>
              <li className="header__user-item">
                <Link to="/">
                  <Logout></Logout>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {openBackdrop && <Backdrop onOpen={backdropClickHandler} />}
    </>
  );
}

export default Header;
