import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router";
const ProductPage = () => {
  const productPageRef = useRef(null);
  const [sortByPrice, setSortByPrice] = useState("asc");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const productData = [
    // Your product data here...
    {
      title: "Luxury Watch 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "src/assets/watch1.jpg",
      price: 100,
    },
    {
      title: "Luxury Watch 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "src/assets/watch2.jpg",
      price: 120,
    },
    {
      title: "Luxury Watch 3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      imageUrl: "src/assets/watch3.jpg",
      price: 200,
    },
    {
      title: "Luxury Watch 4",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      imageUrl: "src/assets/watch4.jpg",
      price: 180,
    },
    {
      title: "Luxury Watch 5",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      imageUrl: "src/assets/watch5.jpg",
      price: 130,
    },
    {
      title: "Luxury Watch 6",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch6.jpg",
      price: 160,
    },
    {
      title: "Luxury Watch 7",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch7.jpg",
      price: 190,
    },
    {
      title: "Luxury Watch 8",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch8.jpg",
      price: 260,
    },
    {
      title: "Luxury Watch 9",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch9.jpg",
      price: 260,
    },
    {
      title: "Luxury Watch 10",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch10.jpg",
      price: 260,
    },
    {
      title: "Luxury Watch 11",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch11.jpg",
      price: 260,
    },
    {
      title: "Luxury Watch 12",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch12.jpg",
      price: 260,
    },
    {
      title: "Luxury Watch 13",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch13.jpg",
      price: 260,
    },
    {
      title: "Luxury Watch 14",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch14.jpg",
      price: 260,
    },
    {
      title: "Luxury Watch 15",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch15.jpg",
      price: 260,
    },
    {
      title: "Luxury Watch 16",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch16.jpg",
      price: 260,
    },
    {
      title: "Luxury Watch 17",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch17.jpg",
      price: 260,
    },
    {
      title: "Luxury Watch 18",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch18.jpg",
      price: 260,
    },
    {
      title: "Luxury Watch 19",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch19.jpg",
      price: 260,
    },
    {
      title: "Luxury Watch 20",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch20.jpg",
      price: 260,
    },
    {
      title: "Luxury Watch 21",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      imageUrl: "src/assets/watch21.jpg",
      price: 260,
    },
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
        className="flex flex-wrap justify-center p-4 bg-[#f6f6f0]"
      >
        <div className="relative inline-block text-left">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex justify-center w-full rounded-md border border-black shadow-sm px-4 py-2 bg-[#f6f6f0] text-sm font-medium text-gray-700 "
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
      <div>
        <button onClick={()=>{
            navigate('/cart')
        }}>Go to Cart</button>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
