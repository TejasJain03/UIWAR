/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const ProductCard = ({ title, description, imageUrl, price }) => {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setIsInCart(cart.some((product) => product.title === title));
  }, [title]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!isInCart) {
      const updatedCart = [...cart, { title, description, imageUrl, price }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // Remove the product from the cart if it's already in the cart
      const updatedCart = cart.filter((product) => product.title !== title);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    // Update the isInCart state
    setIsInCart(!isInCart);
  };

  return (
    <div className="max-w-md  rounded-lg overflow-hidden shadow-lg m-4 bg-[#f6f6f0]">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="text-black font-bold mt-2">${price}</p>
        <button
          onClick={addToCart}
  className={`text-${isInCart ? "red" : "black"}-500 py-2 rounded-md mt-2`}
>
  {isInCart ? "Remove from Cart" : "Add to Cart \u2192"}
</button>
      </div>
    </div>
  );
};

export default ProductCard;
