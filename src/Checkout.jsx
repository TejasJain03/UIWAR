import { useState, useEffect } from "react";

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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        {cart.map((product, index) => (
          <div key={index} className="flex items-center mb-4">
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
      </div>
    </div>
  );
};

export default Checkout;
