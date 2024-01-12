/* eslint-disable no-undef */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".nav-link", { opacity: 0, y: -100, stagger: 0.3, duration: 1 });

    return () => tl.kill();
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex items-center justify-between p-4 font-montserrat border-b border-black bg-[#f6f6f0] text-black"
    >
      {/* Navigation Links - Left Section */}
      <div className="hidden md:flex items-center">
        <div className="nav-link mr-4">
          <a href="/about" className="text-lg">
            About
          </a>
        </div>
        <div className="nav-link mr-4">
          <a href="/dashboard" className="text-lg">
            Dashboard
          </a>
        </div>
      </div>

      {/* Logo - Center Section */}
      <h1
        className="nav-link text-2xl font-bold cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Hemisphere
      </h1>

      {/* Navigation Links - Right Section */}
      <div className="hidden md:flex items-center">
        <div className="nav-link mr-4">
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
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-black"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute z-40 bg-[#f6f6f0] p-4 top-16 left-0 w-full">
          <div className="nav-link mb-4">
            <a href="/about" className="text-lg">
              About
            </a>
          </div>
          <div className="nav-link mb-4">
            <a href="/dashboard" className="text-lg">
              Dashboard
            </a>
          </div>
          <div className="nav-link mb-4">
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
      )}
    </nav>
  );
}
