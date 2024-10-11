import { useCart } from "../contexts/CartContext";
import ProductList from "./ProductList";

function ProductItems() {
  const { data } = useCart();

  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold">Desserts</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <ProductList item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default ProductItems;
