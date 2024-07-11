import { useState, useEffect, useRef } from "react";
import "remixicon/fonts/remixicon.css";
import "../CSS/Slider.css"; // For custom styles

const events = [
  {
    date: "21 Jun 23",
    dj: "DJ Ocean & Thunder",
    location: "Indira Nagar Bengaluru, India",
    image: "/images/Slider/Screenshot_1.png",
  },
  {
    date: "22 Jun 23",
    dj: "DJ SLING",
    location: "Koramangla Bengaluru, India",
    image: "/images/Slider/Screenshot_2.png",
  },
  {
    date: "24 Jun 23",
    dj: "DJ Deep Bhamra",
    location: "Badmaash Bangalore, India",
    image: "/images/Slider/Screenshot_3.png",
  },
  {
    date: "25 Jun 23",
    dj: "DJ Nova",
    location: "MG Road Bengaluru, India",
    image: "/images/Slider/Screenshot_4.png",
  },
  {
    date: "26 Jun 23",
    dj: "DJ Blaze",
    location: "Electronic City Bengaluru, India",
    image: "/images/Slider/Screenshot_5.png",
  },
  {
    date: "27 Jun 23",
    dj: "DJ Flame",
    location: "Whitefield Bengaluru, India",
    image: "/images/Slider/Screenshot_6.png",
  },
];

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
            <div className="w-full h-full rounded-t-none rounded-b-lg bg-gradient-to-b from-black to-black p-4">
              <img
                src={event.image}
                alt={event.dj}
                className=" w-[18rem] sm:w-full h-2/3 object-cover rounded-t-none rounded-b-lg"
              />
              <div className="text-yellow-500 mt-2">{event.date}</div>
              <div className="text-red-500 text-lg font-bold">{event.dj}</div>
              <div className="text-white">{event.location}</div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
      >
        <i className="ri-arrow-left-s-line text-white text-2xl"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
      >
        <i className="ri-arrow-right-s-line text-white text-2xl"></i>
      </button>
    </div>
  );
};

export default Slider;
