import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ReusableSlider = ({ slides, onApplyNowClick }) => {
  const defaultVisibleCount = 3;
  const [visibleCountState, setVisibleCountState] = useState(defaultVisibleCount);
  const [currentIndex, setCurrentIndex] = useState(defaultVisibleCount);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCountState(1);
        setCurrentIndex(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCountState(2);
        setCurrentIndex(2);
      } else {
        setVisibleCountState(defaultVisibleCount);
        setCurrentIndex(defaultVisibleCount);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const extendedSlides = [
    ...slides.slice(-visibleCountState),
    ...slides,
    ...slides.slice(0, visibleCountState),
  ];
  const totalSlides = extendedSlides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      slideTo(currentIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideTo = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= slides.length + visibleCountState) {
      setIsTransitioning(false);
      setCurrentIndex(visibleCountState);
    }
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length);
    }
  };

  const numberOfDots = Math.ceil(slides.length / visibleCountState);

  const isActiveDot = (dotIndex) => {
    const indexForDot = dotIndex * visibleCountState + visibleCountState;
    return currentIndex === indexForDot;
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 my-10 overflow-hidden relative">
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(totalSlides * 100) / visibleCountState}%`,
            transform: `translateX(-${(100 / totalSlides) * currentIndex}%)`,
            transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={slide?.title ? `${slide.title}-${index}` : index}
              className="px-2"
              style={{
                flex: `0 0 ${100 / totalSlides}%`,
              }}
            >
              <div className="bg-white rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 p-3 sm:p-4 flex flex-col h-full min-h-[300px] sm:min-h-[350px] relative border-b-8 border-[#0282ba]">
                {slide?.imageUrl && (
                  <img
                    src={slide?.imageUrl}
                    alt="Slider"
                    className="w-full h-auto rounded-md object-cover mb-4"
                    style={{ minHeight: "100px" }}
                  />
                )}
                <div className="relative mt-2">
                  {slide?.iconUrl && (
                    <div className="absolute -top-5 right-0 z-10">
                      <img
                        src={slide?.iconUrl}
                        alt="Icon"
                        className="w-16 sm:w-20 h-16 sm:h-20 rounded shadow-md p-2 bg-white"
                      />
                    </div>
                  )}
                  <div className="space-y-1 mt-10 pr-6">
                    <h2 className="text-sm sm:text-base font-semibold text-[#0282ba]">
                      {slide?.main}
                    </h2>
                    <h2 className="text-lg sm:text-xl font-semibold text-[#ff8c00] py-2 border-b border-[#ff8c00]">
                      {slide?.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 py-2">
                      {slide?.description}
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-2 flex justify-between items-center">
                  <a
                    href={slide?.knowMoreLink}
                    rel="noopener noreferrer"
                    className="text-[#0282ba] text-sm sm:text-base font-medium hover:underline"
                  >
                    {slide?.knowMoreText}
                  </a>
                  <button
                    onClick={() => onApplyNowClick(slide)}
                     className="px-3 sm:px-4 py-2 bg-[#0282ba] text-white text-sm sm:text-base font-semibold rounded-full shadow-md hover:bg-blue-700"
                  >
                    {slide.applyNowText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: numberOfDots }).map((_, index) => {
          const slideKey =
            slides[index * visibleCountState]?.title ||
            slides[index * visibleCountState]?.main ||
            `dot-${index}`;
          return (
            <button
              key={slideKey}
              onClick={() => slideTo(index * visibleCountState + visibleCountState)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${isActiveDot(index)
                ? "bg-[#0282ba]"
                : "bg-gray-300 hover:bg-blue-400"
                }`}
            />
          );
        })}
      </div>
    </div>
  );
};

ReusableSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      iconUrl: PropTypes.string,
      main: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      knowMoreLink: PropTypes.string,
      knowMoreText: PropTypes.string,
      applyNowLink: PropTypes.string,
      applyNowText: PropTypes.string,
    })
  ).isRequired,
  onApplyNowClick: PropTypes.func.isRequired,
};

export default ReusableSlider;
