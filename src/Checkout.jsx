import { useState, useEffect } from "react";
import Navbar2 from "./Navbar2";

const Checkout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch cart details from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <>
      <Navbar2 />
      <div className="mx-auto p-8 bg-[#f6f6f0] min-h-[100vh]">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4 ">Order Summary</h2>

          {cart.map((product, index) => (
            <div key={index} className="flex items-center mb-4 ">
              <img
                className="w-16 h-16 object-cover mr-4"
                src={product.imageUrl} // Replace with the actual property in your product object
                alt={product.title}
              />
              <div>
                <p className="text-lg font-semibold">{product.title}</p>
                <p className="text-gray-500">${product.price}</p>
              </div>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between">
            <span className="text-lg font-semibold">Total Amount:</span>
            <span className="text-lg font-semibold">${calculateTotal()}</span>
          </div>

          {/* "Buy Now" Button */}
          <button
            className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
