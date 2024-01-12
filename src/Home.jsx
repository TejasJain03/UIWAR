import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Animation using GSAP
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.from(".left-section-text", {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 0.6,
    });
    tl.from(".home__title", { opacity: 0, y: -50, duration: 1 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-black w-full h-screen flex font-montserrat">
        {/* Left Section */}
        <div className="w-full md:w-1/2 h-full bg-black text-[#f6f6f0] flex flex-col justify-center items-center p-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 left-section-text">
            Luxury Watches
          </h2>
          <p className="text-[#666] mb-4 left-section-text">
            Discover the elegance of Kuzury Watches
          </p>
          <button
            className="bg-[#f6f6f0] text-black border-2 border-black px-6 py-2 rounded-full hover:font-bold left-section-text"
            onClick={() => {
              navigate("/products");
            }}
          >
            Explore
          </button>
        </div>

        {/* Right Section (Image) - Hidden on smaller screens */}
        <div className="hidden md:w-1/2 md:block relative">
          <img
            src="path/to/your/image.jpg"
            alt="Luxury Watches"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
