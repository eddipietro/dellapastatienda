import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import { HashRouter, Route, Routes } from "react-router-dom";
import CartCustomProvider from "./context/CartContext";

function App() {
  return (
    <HashRouter>
      <CartCustomProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer mensaje="Nuestros Productos" />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartCustomProvider>
    </HashRouter>
  );
}
export default App;
