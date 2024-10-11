import CartOverview from "./components/CartOverview";
import ConfirmOrder from "./components/ConfirmOrder";
import ProductItems from "./components/ProductItems";
import { useCart } from "./contexts/CartContext";

function App() {
  const { confirm } = useCart();

  return (
    <section>
      <main className="relative mx-auto mt-5 flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:items-start md:justify-between">
        <ProductItems />
        <CartOverview />
      </main>

      {confirm && <ConfirmOrder />}
    </section>
  );
}

export default App;
