import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Power1 } from "gsap/all"; // Import necessary plugins

gsap.registerPlugin(Power1); // Register the plugins

export default function Home() {
  const homeTitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.from(homeTitleRef.current, { opacity: 0, y: -50, duration: 1 });
  }, []);

  return (
    <div className="home">
      <h1 className="bg-red-600 text-black" ref={homeTitleRef}>
        Home
      </h1>
    </div>
  );
}
