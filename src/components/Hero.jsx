import { useEffect, useState } from "react";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Automatically move to the next slide every 5 seconds
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Loop through images to create slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for text display */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-5xl">Your Hero Content</h2>
          </div>
        </div>
      ))}

      {/* Controls for manual slide change */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
