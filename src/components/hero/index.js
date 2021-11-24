import { useState, useEffect, useCallback } from "react";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import HeroSlide from "./HeroSlide";

function Hero(props) {
  const [active, setActive] = useState(0);
  const { data = [] } = props;

  const nextSlide = useCallback(() => {
    const index = active + 1 === data.length ? 0 : active + 1;
    setActive(index);
  }, [active, data.length]);
  const previousSlide = useCallback(() => {
    const index = active - 1 < 0 ? data.length - 1 : active - 1;
    setActive(index);
  }, [active, data.length]);
  const previousClickHandler = () => {
    previousSlide();
  };
  const nextClickHandler = () => {
    nextSlide();
  };
  useEffect(() => {
    const timerId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(timerId);
    };
  }, [nextSlide]);

  return (
    <div className="hero">
      <div className="container">
        <div className="hero__container">
          <button
            className="hero__btn hero__btn--previous"
            onClick={previousClickHandler}
          >
            <NavigateBefore />
          </button>

          {data.map((item, index) => {
            return (
              <HeroSlide item={item} key={index} active={index === active} />
            );
          })}
          <button
            className="hero__btn hero__btn--next"
            onClick={nextClickHandler}
          >
            <NavigateNext />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
