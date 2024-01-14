import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import { useNavigate } from "react-router";
const ProductPage = () => {
  const productPageRef = useRef(null);
  const [sortByPrice, setSortByPrice] = useState("asc");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const productData = [
    {
      title: "Rolex Submariner",
      description:
        "Iconic diving watch with precision engineering and timeless design.",
      imageUrl: "src/images/watch1.jpg",
      price: 5000,
    },
    {
      title: "Omega Speedmaster",
      description:
        "Legendary chronograph worn on the moon during Apollo missions.",
      imageUrl: "src/images/watch2.jpg",
      price: 6000,
    },
    {
      title: "Patek Philippe Calatrava",
      description:
        "Elegant dress watch known for its understated beauty and craftsmanship.",
      imageUrl: "src/images/watch3.jpg",
      price: 12000,
    },
    {
      title: "Audemars Piguet Royal Oak",
      description:
        "Revolutionary luxury sports watch featuring an octagonal bezel.",
      imageUrl: "src/images/watch4.jpg",
      price: 15000,
    },
    {
      title: "IWC Portugieser",
      description:
        "Classic and versatile timepiece with a simple and clean design.",
      imageUrl: "src/images/watch5.jpg",
      price: 8000,
    },
    {
      title: "Jaeger-LeCoultre Reverso",
      description:
        "Art Deco-inspired reversible watch with a unique flip case.",
      imageUrl: "src/images/watch6.jpg",
      price: 10000,
    },
    {
      title: "Hublot Big Bang",
      description:
        "Bold and contemporary watch known for its distinctive fusion design.",
      imageUrl: "src/images/watch7.jpg",
      price: 20000,
    },
    {
      title: "Cartier Santos",
      description:
        "Historic aviator watch with a square case and exposed screws.",
      imageUrl: "src/images/watch8.jpg",
      price: 18000,
    },
    {
      title: "Panerai Luminor",
      description:
        "Robust and durable military-inspired watch with a distinctive crown guard.",
      imageUrl: "src/images/watch9.jpg",
      price: 14000,
    },
    {
      title: "Breitling Navitimer",
      description:
        "Iconic pilot's watch with a slide rule bezel for aviation calculations.",
      imageUrl: "src/images/watch10.jpg",
      price: 16000,
    },
    // Add more watches as needed...
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
      y: -10,
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
      <Navbar2 />
      <div
        ref={productPageRef}
        className="flex flex-wrap justify-center p-4 bg-[#f6f6f0]"
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
      <div className="text-center bg-[#f6f6f0]">
        <button
          onClick={() => {
            navigate("/cart");
          }}
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
        >
          Go to Cart
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
