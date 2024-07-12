import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../CSS/SwiperComponent.css";
import { FreeMode, Pagination } from "swiper/modules";
import { testimonialDataArray } from "../../data/TestimonialData";

const WebAppSwiperComponent = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{ clickable: true }} // disc is clickable
      style={{ height: "47rem", margin: "0 auto" }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
      breakpoints={{
        1000: {
          slidesPerView: 3,
          spaceBetween: 30,
          width: 990, // larger size screens
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
          width: 660, // middle sized screns
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
          width: 340, // smaller sized screens
        },
      }}
    >
      {testimonialDataArray.map((element, index) => (
        //   SwiperSlide is default slide
        <SwiperSlide key={index}>
          <img
            className="w-[20rem] md:w-[22rem] lg:w-[330px] h-auto"
            src={`/images/webapps/web-image-${index + 1}.png`}
            alt="appimage"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WebAppSwiperComponent;
