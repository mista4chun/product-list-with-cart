import { useCart } from "../contexts/CartContext";
import Button from "./Button";
import Icon from "/assets/images/icon-carbon-neutral.svg";
import Remove from "/assets/images/icon-remove-item.svg";
import formatCurrency from "../utils/Helper";

function CartOverview() {
  const { cart, dispatch } = useCart();

  const displayCart = cart.length === 0;

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="mx-auto w-full max-w-96 rounded-2xl border bg-Rose50 px-4 pt-5">
      <h2 className="my-4 text-2xl font-bold text-Red">
        Your Cart ({totalQuantity})
      </h2>
      {!displayCart ? (
        <ul className="divide divide-y">
          {cart.map((item) => (
            <li
              className="flex flex-col gap-2 py-2 font-semibold"
              key={item.id}
            >
              <p>{item.category}</p>
              <div className="flex items-center justify-between">
                <p className="text-Red">
                  {item.quantity}x
                  <span className="ml-3 font-thin text-Rose300">
                    @{formatCurrency(item.price)}
                  </span>{" "}
                  <span className="ml-2 text-Rose300">
                    {formatCurrency(item.quantity * item.price)}
                  </span>
                </p>
                <Button
                  type="round"
                  onClick={() =>
                    dispatch({ type: "deleteItem", payload: item })
                  }
                >
                  <img src={Remove} alt=""  />
                </Button>
              </div>
            </li>
          ))}

          <div className="flex items-center justify-between py-7">
            <p className="">Order Total</p>
            <p className="text-3xl font-bold">{formatCurrency(totalPrice)}</p>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-Rose100 p-2 py-3">
            <img src={Icon} alt="" />
            <p>
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>

          <Button type="primary" onClick={() => dispatch({type: 'confirmOrder'})}>
            Confirm Order
          </Button>
        </ul>
      ) : (
        <div className="mb-8 mt-5 flex flex-col items-center gap-3 text-xs font-bold text-Rose500">
          <img src="../assets/images/illustration-empty-cart.svg" alt="" />
          <p>your added items will appear here </p>
        </div>
      )}
    </div>
  );
}

export default CartOverview;
