import { Remove, Add, Delete } from "@mui/icons-material";
function CartCard(props) {
  const {
    item,
    onAddItemClickHandler,
    onRemoveItemClickHandler,
    onRemoveItemsClickHandler,
    
  } = props;
  let price;
  let totalPrice;
  function format(n) {
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  if (item.price) {
    price = format(String(item.price));
  }
  if(item.totalPrice){
    totalPrice =   format(String(item.totalPrice))
  }
  return (
    <div className="cart-card">
      <p className="cart-card__title">{item.name}</p>
      <p className="cart-card__price">{price}</p>
      <div className="cart-card__quantity">
        <button
          className="cart-card__quantity-btn"
          onClick={() => onRemoveItemClickHandler(item.id)}
        >
          <Remove />
        </button>
        <p className="cart-card__quantity-number">{item.quantity}</p>
        <button
          className="cart-card__quantity-btn"
          onClick={() => onAddItemClickHandler(item)}
        >
          <Add />
        </button>
      </div>
      <p className="cart-card__total-price">{totalPrice}</p>
      <button
        className="cart-card__delete"
        onClick={() => onRemoveItemsClickHandler(item.id)}
      >
        <Delete />
      </button>
    </div>
  );
}

export default CartCard;
