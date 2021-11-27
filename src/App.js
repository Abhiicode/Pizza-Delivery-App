import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Navigation from "./components/Navigation.js";
import Products from "./components/Products.js";
import Cart from "./pages/Cart.js";
import SingleProduct from "./pages/SingleProduct.js";
import { CartContext } from "./CartContext.js";
import { useState, useEffect } from "react";
function App() {
  const [cart, setCart] = useState({});
  //fetch the cart from the local storage
  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/products" exact component={Products}></Route>
            <Route path="/products/:_id" component={SingleProduct}></Route>
            <Route path="/cart" component={Cart}></Route>
          </Switch>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
