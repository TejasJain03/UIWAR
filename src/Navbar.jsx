import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navRef = useRef(null);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".nav-link", { opacity: 0, y: -100, stagger: 0.3, duration: 1 });

    return () => tl.kill();
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      ref={navRef}
      className="flex items-center justify-between p-4 font-montserrat w-full bg-black text-[#f6f6f0]"
    >
      {/* Logo and Toggle Button */}
      <div className="flex items-center">
        <h1
          className="nav-link text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Hemisphere
        </h1>
      </div>

      {/* Navigation Links */}
      <div
        className={`hidden md:flex space-x-4 ${
          isMobileMenuOpen ? "hidden" : ""
        }`}
      >
        <div className="nav-link">
          <a href="/about" className="text-lg">
            About
          </a>
        </div>
        <div className="nav-link">
          <a href="/dashboard" className="text-lg">
            DashBoard
          </a>
        </div>
        <div className="nav-link">
          <a href="/contactus" className="text-lg">
            Contact Us
          </a>
        </div>
        <div className="nav-link">
          <a href="/login" className="text-lg">
            Login
          </a>
        </div>
      </div>

      {/* Mobile Navigation Toggle Button */}
      <div className="md:hidden">
        <button onClick={handleMobileMenuToggle} className="text-[#f6f6f0]">
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-black p-4 rounded">
          <div className="nav-link mb-2">
            <a href="/about" className="text-lg text-[#f6f6f0]">
              About
            </a>
          </div>
          <div className="nav-link mb-2">
            <a href="/dashboard" className="text-lg text-[#f6f6f0]">
              DashBoard
            </a>
          </div>
          <div className="nav-link mb-2">
            <a href="/contactus" className="text-lg text-[#f6f6f0]">
              Contact Us
            </a>
          </div>
          <div className="nav-link">
            <a href="/login" className="text-lg text-[#f6f6f0]">
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
