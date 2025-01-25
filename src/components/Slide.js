import React from "react";

const Slide = () => {
  const slides = [
    {
      src: "leg.png",
      alt: "Slide 1",
    },
    {
      src: "back.png",
      alt: "Slide 2",
    },
    {
      src: "el.png",
      alt: "Slide 3",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="overflow-hidden relative rounded-lg">
          {/* Display all the images without the carousel effect */}
          <div className="flex">
            {slides.map((slide, index) => (
              <div className="min-w-full sm:min-w-[100%] lg:min-w-[33.33%] text-center" key={index}>
                <div className="p-4 bg-transparent shadow-lg rounded-lg">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-auto object-cover mb-4 rounded-md"
                    style={{ maxHeight: "300px" }}
                  />
                  <h2 className="text-2xl font-bold mb-2 sm:text-xl">{slide.heading}</h2>
                  <p className="font-light text-start text-yellow-400 mb-4 text-sm sm:text-base">{slide.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
