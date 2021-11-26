import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  removeItemsFromCart,
  sendCartData,
} from "../redux/cartSlice";
import CartPage from "../components/Cart";
import Helmet from "../components/Helmet";

function Cart() {
  const userId = useSelector((state) => state.user.id);
  const nameUser = useSelector((state) => state.user.name);
  const phoneNumberUser = useSelector((state) => state.user.phoneNumber);
  const addressUser = useSelector((state) => state.user.address);
  const cart = useSelector((state) => state.cart);
  const items = useSelector((state) => state.cart.items);
  const priceItems = items.map((item) => {
    return item.totalPrice;
  });
  const totalPrice = priceItems.reduce((item1, item2) => {
    return item1 + item2;
  }, 0);
  const initRef = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!initRef.current) {
      const render = async () => {
        await dispatch(sendCartData({ userId, cart }));
      };
      render();
    }
    initRef.current = false;
  }, [cart, userId, dispatch]);

  const onAddItemClickHandler = (item) => {
    dispatch(addItemToCart(item));
  };
  const onRemoveItemClickHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };
  const onRemoveItemsClickHandler = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  return (
    <Helmet title="Giỏ Hàng">
      <div>
        <CartPage
          items={items}
          nameUser={nameUser}
          phoneNumberUser={phoneNumberUser}
          addressUser={addressUser}
          totalPrice={totalPrice}
          onRemoveItemClickHandler={onRemoveItemClickHandler}
          onRemoveItemsClickHandler={onRemoveItemsClickHandler}
          onAddItemClickHandler={onAddItemClickHandler}
        ></CartPage>
      </div>
    </Helmet>
  );
}

export default Cart;
