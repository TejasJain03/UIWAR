import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
const ProductPage = () => {
  const productPageRef = useRef(null);
  const [sortByPrice, setSortByPrice] = useState("asc");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const productData = [
    // Your product data here...
    {
      title: "Luxury Watch 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/path/to/watch1.jpg",
      price: 100,
    },
    {
      title: "Luxury Watch 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "/path/to/watch2.jpg",
      price: 120,
    },
    // Add more product data...
  ];

  const sortedProductData = [...productData].sort((a, b) => {
    const priceA = parseInt(a.price);
    const priceB = parseInt(b.price);

    return sortByPrice === "asc" ? priceA - priceB : priceB - priceA;
  });

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.from(productPageRef.current, { opacity: 0, duration: 1 });

    gsap.from(".product-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".product-cards-container",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <div
        ref={productPageRef}
        className="flex flex-wrap justify-center p-4 bg-f6f6f0"
      >
        <div className="relative inline-block text-left">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sort By Price
          </button>

          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <button
                  onClick={() => {
                    setSortByPrice("asc");
                    setIsDropdownOpen(false);
                  }}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                    sortByPrice === "asc" && "font-bold"
                  }`}
                >
                  Low to High
                </button>
                <button
                  onClick={() => {
                    setSortByPrice("desc");
                    setIsDropdownOpen(false);
                  }}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                    sortByPrice === "desc" && "font-bold"
                  }`}
                >
                  High to Low
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 product-cards-container">
          {sortedProductData.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
              className="product-card"
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
