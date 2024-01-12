import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Contactus from "./Contactus";
import Dashboard from "./Dashboard";
import Checkout from "./Checkout";
import ProductPage from "./ProductPage";
<<<<<<< HEAD
import Cart from "./Cart";
=======
import Login from "./Login";

>>>>>>> 8a3071de99b7f0cf6588f15f9a1e239309696c7d

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
      </Routes>
    </Router>
  );
}

export default App;
