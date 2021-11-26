import CartCard from "./CartCard";
function Cart(props) {
  const {
    items,
    nameUser,
    phoneNumberUser,
    addressUser,
    totalPrice,
    onRemoveItemClickHandler,
    onRemoveItemsClickHandler,
    onAddItemClickHandler,
  } = props;

  let sumPrice;
  function format(n) {
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  if (totalPrice) {
    sumPrice = format(String(totalPrice));
  }
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__container">
          <div className="cart__items">
            <h3 className="cart__items-title">Giỏ Hàng</h3>
            {items.map((item) => {
              return (
                <CartCard
                  key={item.id}
                  item={item}
                  onRemoveItemClickHandler={onRemoveItemClickHandler}
                  onAddItemClickHandler={onAddItemClickHandler}
                  onRemoveItemsClickHandler={onRemoveItemsClickHandler}
                />
              );
            })}
          </div>
          <div className="cart__info">
            <h3 className="cart__info-title">Giao Tới</h3>
            <h3 className="cart__info-name">{nameUser}</h3>
            <h3 className="cart__info-phone-number">{phoneNumberUser}</h3>
            <p className="cart__info-address">{addressUser}</p>
            <h3 className="cart__info-total-price">
              Tổng Cộng Giá : {sumPrice}
            </h3>
            <button className="cart__info-btn">Mua Hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
