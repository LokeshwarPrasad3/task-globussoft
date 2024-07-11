const TestimonialSlider = ({ index, name, designation, quote }) => {
  return (
    <div
      className={`slider_${index}_container object-cover flex-3 flex-col gap-5 w-[20rem] h-[18rem] md:w-[22rem] md:h-[15.8rem] lg:w-[332px] lg:h-[280px] bg-cover bg-center p-8 rounded-2xl`}
    >
      <div className="comma_container flex-3">
        <img
          src="/images/Testimonials/comma.png"
          alt="comma"
          className="comma w-[20px] "
        />
      </div>
      <p className="font-normal text-[14px] leading-[20.85px] text-center text-white">
        {quote}
      </p>
      <div className="flex flex-col gap-1 items-center">
        <p className="font-comfortaa font-bold text-[16px] leading-[13.74px] text-white">
          {name}
        </p>
        <p className="font-montserrat font-medium text-[10px] leading-[15.79px] text-center text-[#FDDF09]">
          {designation}
        </p>
      </div>
    </div>
  );
};

export default TestimonialSlider;
