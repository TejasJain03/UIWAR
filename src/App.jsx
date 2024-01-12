import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Contactus from "./Contactus";
import Dashboard from "./Dashboard";
import Checkout from "./Checkout";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
