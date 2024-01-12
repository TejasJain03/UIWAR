import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";

const ProductPage = () => {
  const productPageRef = useRef(null);
  const [sortByPrice, setSortByPrice] = useState("asc");

  const productData = [
    {
      title: "Luxury Watch 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/path/to/watch1.jpg",
      price: 100,
    },
    {
      title: "Luxury Watch 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/path/to/watch2.jpg",
      price: 150,
    },
    {
      title: "Luxury Watch 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      imageUrl: "/path/to/watch3.jpg",
      price: 120,
    },
    {
      title: "Luxury Watch 4",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      imageUrl: "/path/to/watch4.jpg",
      price: 200,
    },
    {
      title: "Luxury Watch 5",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      imageUrl: "/path/to/watch5.jpg",
      price: 180,
    },
    {
      title: "Luxury Watch 6",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      imageUrl: "/path/to/watch6.jpg",
      price: 130,
    },
    {
      title: "Luxury Watch 7",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "/path/to/watch7.jpg",
      price: 160,
    },
  ];

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

  const sortedProductData = [...productData].sort((a, b) => {
    const priceA = parseInt(a.price);
    const priceB = parseInt(b.price);

    if (sortByPrice === "asc") {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  return (
    <>
      <Navbar />
      <div
        ref={productPageRef}
        className="flex flex-wrap justify-center p-4 bg-f6f6f0"
      >
        <div className="flex justify-end mb-4 w-full">
          <button
            onClick={() =>
              setSortByPrice((prevSort) =>
                prevSort === "asc" ? "desc" : "asc"
              )
            }
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {sortByPrice === "asc" ? "Sort Desc" : "Sort Asc"}
          </button>
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
    </>
  );
};

export default ProductPage;
