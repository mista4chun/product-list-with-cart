import AddToCart from "/assets/images/icon-add-to-cart.svg";

import { useEffect, useState } from "react";
import Button from "./Button";
import { useCart } from "../contexts/CartContext";
import formatCurrency from "../utils/Helper";

function ProductList({ item }) {
  const { cart, dispatch } = useCart();
  const isInCart = cart.some((cartItem) => cartItem.id === item.id);
  const cartItem = cart.find((cartItem) => cartItem.id === item.id);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleAdd() {
    dispatch({ type: "ADD_ITEM", payload: item });
  }

  function handleDecrement() {
    if (cartItem.quantity < 2) {
      dispatch({ type: "deleteItem", payload: item });
    } else {
      dispatch({ type: "decreaseItem", payload: item });
    }
  }

  function handleIncrement() {
    dispatch({ type: "increaseItem", payload: item });
  }

  // Update the state on window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to get the correct image based on window width
  const getImageSource = (image) => {
    if (windowWidth > 1000) {
      return image.desktop;
    } else if (windowWidth > 600) {
      return image.tablet;
    } else {
      return image.mobile;
    }
  };

  return (
    <li>
      <div className="flex flex-col items-center justify-center">
        <img
          src={getImageSource(item.image)}
          alt={item.name}
          className={isInCart ? "rounded-lg border-2 border-Red" : "rounded-lg"}
        />

        {isInCart ? (
          <Button type="quantity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
              className="h-4 w-4 rounded-full border fill-white p-0.5 hover:bg-red-50 hover:fill-Red"
              onClick={handleDecrement}
            >
              <path d="M0 .375h10v1.25H0V.375Z" />
            </svg>
            {cartItem.quantity}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
              className="h-4 w-4 rounded-full border fill-white p-0.5 hover:bg-red-50 hover:fill-Red"
              onClick={handleIncrement}
            >
              <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
            </svg>
          </Button>
        ) : (
          <Button type="addToCart" onClick={handleAdd}>
            <img src={AddToCart} alt="" />
            <p>Add to Cart</p>
          </Button>
        )}
      </div>

      <div className="mb-2 mt-5">
        <p className="text-md text-Rose300">{item.category}</p>
        <p className="text-md font-semibold text-Rose900">{item.name}</p>
        <p className="text-xl font-semibold text-Red">
          {formatCurrency(item.price)}
        </p>
      </div>
    </li>
  );
}

export default ProductList;
