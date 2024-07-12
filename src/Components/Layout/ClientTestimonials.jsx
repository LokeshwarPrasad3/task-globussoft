import TestimonialSwiperComponent from "../UI/TestimonialSwiperComponent";

const ClientTestimonials = () => {
  return (
    <div
      id="client-testimonials"
      className="testimonial_container bg-[#09173C] font-montserrat flex-3 flex-col gap-12 py-16 "
    >
      <div className="heading_part_container flex-3 flex-col gap-4">
        <img
          src="/images/Testimonials/logo.png"
          className="h-[55px] w-[55px]"
        />
        <h2 className="font-normal text-[#ffff] text-[32px] flex-3 gap-3 flex-wrap leading-[39.01px]">
          CLIENT <span className="text-[#DB1E2D]">TESTIMONIALS</span>
        </h2>
        <img src="/images/Testimonials/music-wave.png" alt="wave" />
        <p className="font-[300] text-[16px] px-3 md:px-12 lg:px-24 leading-[19.5px] text-center text-[#FFFFFF]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>
      <div className="gallery_image_container">
        {/* Swiper library component */}
        <TestimonialSwiperComponent />
      </div>
    </div>
  );
};

export default ClientTestimonials;
