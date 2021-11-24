import { Link } from "react-router-dom";
import clsx from "clsx";
function HeroSlide(props) {
  const { item, active } = props;
  return (
    <div
      className={clsx("slide", {
        'active': active,
      })}
    >
      <div className="slide__content">
        <h1 className="slide__content-title">{item.title}</h1>
        <p className="slide__content-description">{item.description}</p>
        <Link to={item.path} className="slide__content-btn">
          Mua Ngay
        </Link>
      </div>
      <div className="slide__img">
        <img src={item.img} alt="slide" />
      </div>
    </div>
  );
}

export default HeroSlide;
