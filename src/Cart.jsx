/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const updatedCart = [...prevCartItems];
      updatedCart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="bg-f6f6f0 p-4 rounded-md min-h-[70vh]">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg m-4"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={item.imageUrl} // Replace with the actual property in your product object
                  alt={item.title}
                />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-black">
                      {item.title}
                    </h2>
                    <p className="text-black font-bold">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <strong style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}>
              Total Amount:
            </strong>{" "}
            ${calculateTotal()}
          </div>
          <div className="flex justify-end mt-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md">
              Buy
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
