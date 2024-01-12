import { useNavigate } from "react-router";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div className="absolute z-10 text-white text-center max-w-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4">
          About Us
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 left-section-text">
          Welcome to Hemespher, where a rich tapestry of passion and precision
          weaves the story of our commitment to uncompromising quality and
          timeless design. Founded in 2024
        </p>
        <button
          className="bg-[#f6f6f0] text-black border-2 border-black px-6 py-2 rounded-full hover:font-bold cursor-pointer "
          onClick={() => {
            navigate("/products");
          }}
        >
          Explore
        </button>
      </div>

      {/* Embedded Video */}
      <video width="100%" height="auto" muted autoPlay>
        <source src="src/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
