import { useCart } from "../contexts/CartContext";
import formatCurrency from "../utils/Helper";
import Button from "./Button";

function ConfirmOrder() {
  const { cart, dispatch } = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  function handleOrder() {
    dispatch({ type: "newOrder" });
    
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-lg border bg-Rose50 px-4 pt-5">
        <img src="./assets/images/icon-order-confirmed.svg" alt="" />
        <h1 className="pt-3 text-2xl font-bold">Order Confirmed</h1>
        <p className="pb-4 pt-1 text-xs text-Rose300">
          We hope you enjoy your food!
        </p>
        <ul className="divide-y rounded-sm bg-Rose100 px-6">
          {cart.map((item) => (
            <li key={item.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={item.image.thumbnail}
                    alt=""
                    className="m-4 ml-0 w-14 rounded-md"
                  />
                  <div>
                    <p className="font-semibold">{item.category}</p>
                    <p className="text-sm font-medium text-Red">
                      {item.quantity}x{" "}
                      <span className="ml-4 text-Rose300 ">
                        @ {formatCurrency(item.price)}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="font-semibold">
                  {formatCurrency(item.quantity * item.price)}
                </p>
              </div>
            </li>
          ))}
          <div className="mb-4 flex items-center justify-between py-5">
            <p className="text-sm font-medium text-Rose300">Order Total</p>
            <p className="font-bold">{formatCurrency(totalPrice)}</p>
          </div>
        </ul>
        <Button type="primary" onClick={handleOrder}>
          Start New Order
        </Button>
      </div>
    </div>
  );
}

export default ConfirmOrder;
