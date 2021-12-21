import Cart from "./components/Cart"
import CartLength from "./components/CartLength"
import Products from "./components/Products"
import Address from "./components/Address"
import './styles/global.css'

const App = () => {
  return (
    <>
      <CartLength />
      <Products />
      <Cart />
      <Address />
    </>
  );
}

export default App;
