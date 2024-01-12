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
      className="flex items-center justify-between p-4   font-montserrat w-[100%]  bg-black text-[#f6f6f0]"
    >
      <div className="flex items-center">
        <div className="nav-link mr-4">
          <a href="/about" className="text-xl">
            About
          </a>
        </div>
      </div>

      <h1 className="nav-link text-2xl font-bold">LOGO</h1>

      <div className="flex items-center">
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
    </nav>
  );
}
