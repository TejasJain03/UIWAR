import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".nav-link", { opacity: 0, y: -100, stagger: 0.3, duration: 1 });

    return () => tl.kill();
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex items-center justify-between p-4  absolute  font-montserrat w-[100%] font-bold bg-black text-[#f6f6f0]"
    >
      <div className="flex items-center">
        <div className="nav-link mr-4">
          <a href="/about" className="text-xl">
            About
          </a>
        </div>
      </div>

      <h1 className="nav-link text-2xl">LOGO</h1>

      <div className="flex items-center">
        <div className="nav-link mr-4">
          <a href="/contact" className="text-xl">
            Contact Us
          </a>
        </div>
        <div className="nav-link">
          <a href="/signup" className="text-xl">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
