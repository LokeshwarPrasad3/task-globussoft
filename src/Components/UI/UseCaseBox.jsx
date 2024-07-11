const UseCaseBox = ({ imageURL, title, description, index }) => {
  return (
    <div
      className={`usecase_box flex justify-center md:justify-center md:px-3 lg:px-0 lg:justify-center items-center  flex-wrap ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"} w-full gap-6 lg:gap-10`}
    >
      <div className="image_container sm:w-fit">
        <img
          className="w-[18rem] h-[12rem] sm:w-[20rem] sm:h-[12.9rem] lg:w-[448px] lg:h-[290px] rounded-[10px]"
          src={imageURL}
          alt={`image-${index}`}
        />
      </div>
      <div className="w-full px-4 sm:px-0 md:px-0 sm:w-1/2 lg:w-1/3 flex flex-col justify-center gap-2 md:gap-5">
        <h1
          className={`cntent_heading uppercase font-normal heading text-[20px] lg:text-[32px] leading-[39.01px] ${index % 2 == 0 ? "text-[#EC3533]" : "text-[#FDDF09]"}  `}
        >
          {title}
        </h1>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[19.5px] align-justify text-[#fffff]">
          {description}
        </p>
        <button className="w-[144px] h-[41px] rounded-md bg-gradient-to-b from-[#F6B910] to-[#D71B2C]">
          Register
        </button>
      </div>
    </div>
  );
};

export default UseCaseBox;
