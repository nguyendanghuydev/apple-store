import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
function ProductCard(props) {
  const { item, aos } = props;

  function format(n) {
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const price = format(item.price);
  return (
    <Link
      className="product-card"
      to={`/product/${item.slug}`}
      data-aos={aos}
    >
      <figure>
        <img src={item.img} alt="" className="product-card__img" />
      </figure>

      <div className="product-card__content">
        <h4 className="product-card__content-title">{item.title}</h4>
        <Rating
          className="product-card__content-rating"
          name="read-only"
          style={{ fontSize: "2rem" }}
          value={item.star}
          readOnly
        />
        <p className="product-card__content-price">{price} VND</p>
      </div>
    </Link>
  );
}

export default ProductCard;
