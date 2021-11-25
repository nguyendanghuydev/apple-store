import { useEffect, useState, useRef } from "react";
import ProductCardInfo from "../components/product/ProductCardInfo";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { sendCartData, addItemToCart } from "../redux/cartSlice";
import dataProduct from "../assets/fake-data/Product";
import ProductCardDetail from "../components/product/ProductCardDetail";
function ProductDetail() {
  const [item, setItem] = useState({});
  const dispatch = useDispatch();
  const params = useParams();
  const cart = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.user.id);
  let initRef = useRef(true);
  const navigate = useNavigate();
  useEffect(() => {
    const newItem = dataProduct.find((item) => {
      return item.slug === params.slug;
    });
    setItem(newItem);
  }, [params.slug]);
  useEffect(() => {
    if (userId) {
      if (!initRef.current) {
        const render = async () => {
          await dispatch(sendCartData({ cart, userId }));
        };
        render();
      }
      initRef.current = false;
    }
  }, [cart, userId, dispatch]);

  const addToCartClickHandler = async (item) => {
    if (userId) {
      await dispatch(addItemToCart(item));
    } else {
      navigate("/login");
    }
  };
  const buyClickHandler = async (item) => {
    if (userId) {
      await dispatch(addItemToCart(item));
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <ProductCardInfo
        item={item}
        buyClickHandler={() => buyClickHandler(item)}
        addToCartClickHandler={() => addToCartClickHandler(item)}
      />
      <ProductCardDetail item={item}></ProductCardDetail>
    </>
  );
}

export default ProductDetail;
