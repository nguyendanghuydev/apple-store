import { ShoppingBasket, ShoppingCart } from "@mui/icons-material";
import { Rating } from "@mui/material";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function ProductCardInfo(props) {
  const { item, auth = false } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function format(n) {
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  let price;
  if (item.price) {
    price = format(item.price);
  }

  const addToCartClickHandler = async () => {
    if (auth) {
      await dispatch(addItemToCart(item));
    } else {
      navigate("/login");
    }
  };
  const buyClickHandler = async () => {
    if (auth) {
      await dispatch(addItemToCart(item));
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="product-card-info">
      <div className="container">
        <div className="product-card-info__container">
          <div className="product-card-info__img">
            <img src={item.img} alt="img" />
          </div>
          <div className="product-card-info__content">
            <h3 className="product-card-info__content-title">{item.title}</h3>
            <div className="product-card-info__content-review">
              {item.star && (
                <Rating
                  name="read-only"
                  style={{ fontSize: "2.5rem" }}
                  value={item.star}
                  readOnly
                />
              )}
              <p>(xem 3525 đánh giá) | đã bán 100+</p>
            </div>
            {price && (
              <h4 className="product-card-info__content-price">{price}</h4>
            )}

            <button
              className="product-card-info__content-btn"
              onClick={buyClickHandler}
            >
              <ShoppingBasket />
              Mua
            </button>
            <button
              className="product-card-info__content-btn"
              onClick={addToCartClickHandler}
            >
              <ShoppingCart />
              Thêm Vào Giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardInfo;
