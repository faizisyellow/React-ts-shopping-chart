import { useEffect, useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { fetchProducts } from "./redux/slice/productSlice";
import { useAppDispatch } from "./redux/store/store";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App relative">
      <Header onCartOpen={handleCartOpen} />
      <main className="flex flex-row gap-1">
        <Products onAddItem={setCartOpen} />
        {cartOpen ? <Cart onCloseCart={setCartOpen} /> : null}
      </main>
    </div>
  );
};
export default App;
