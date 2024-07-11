import { useState, useEffect, useRef } from "react";
import "remixicon/fonts/remixicon.css";
import "../CSS/Slider.css"; // For custom styles
import { events } from "../../data/SliderData";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    resetTimeout();
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const slidesToShow = isMobile ? 1 : 3;
          const maxIndex = events.length - slidesToShow;
          return prevIndex === maxIndex ? 0 : prevIndex + 1;
        });
      }, 3000);
    }
    return () => {
      resetTimeout();
    };
  }, [currentIndex, isMobile]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const slidesToShow = isMobile ? 1 : 3;
      const maxIndex = events.length - slidesToShow;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const slidesToShow = isMobile ? 1 : 3;
      const maxIndex = events.length - slidesToShow;
      return prevIndex === maxIndex ? 0 : prevIndex + 1;
    });
  };

  const slidesToShow = isMobile ? 1 : 3;
  const slideWidth = isMobile ? "100%" : "33.33%";

  return (
    <div className="relative w-[20rem] sm:w-[92%] mx-auto md:mx-0 h-80 md:h-96 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
        }}
      >
        {events.map((event, index) => (
          <div
            key={index}
            className="flex-none p-4 box-border"
            style={{ width: slideWidth, height: "290px", maxWidth: "330px" }}
          >
            <div className="w-full h-full pb-3 bg-gradient-to-b from-black to-black">
              <img
                src={event.image}
                alt={event.dj}
                className=" w-[18rem] rounded-t-2xl sm:w-full h-full object-cover rounded-b-lg"
              />
              <div className="details relative top-[-4rem] bg-gradient-to-b from-slate-900 to-gray-950 rounded-b-xl pb-8 pt-1">
                <div className="text-yellow-500 mt-2 pl-3">{event.date}</div>
                <div className="text-red-500 text-lg font-bold pl-3">
                  {event.dj}
                </div>
                <div className="text-white pl-3">{event.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
      >
        <i className="ri-arrow-left-line text-white text-2xl"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
      >
        <i className="ri-arrow-right-line text-white text-2xl"></i>
      </button>
    </div>
  );
};

export default Slider;
