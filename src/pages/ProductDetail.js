import { useEffect, useState, useRef } from "react";
import ProductCardInfo from "../components/product/ProductCardInfo";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sendCartData } from "../redux/cartSlice";
import dataProduct from "../assets/fake-data/Product";
import ProductCardDetail from "../components/product/ProductCardDetail";
function ProductDetail() {
  const [item, setItem] = useState({});
  const dispatch = useDispatch();
  const params = useParams();
  const cart = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.user.id);
  let initRef = useRef(true);
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

  return (
    <>
      <ProductCardInfo item={item} auth={userId ? true : false} />
      <ProductCardDetail item={item}></ProductCardDetail>
    </>
  );
}

export default ProductDetail;
