const Box = ({ icon, title, description }) => {
  return (
    <div className="relative md:w-[370px] w-[330px] font-montserrat md:h-[314px] h-[300px] rounded-[30px] border-[1px] bg-gradient-to-b from-[#162461] to-[#070d27] p-4 md:p-6 flex-3">
      <div className="absolute -top-[38.5px] left-14 transform -translate-x-1/2 flex items-center justify-center w-[77px] h-[77px] rounded-full bg-gradient-to-r from-[#ED3E31] to-[#EDA231] flex-3">
        <i className={`${icon} text-white text-[2.4rem]`}></i>
      </div>
      <div className="content h-[60%] md:h-[80%] flex justify-center flex-col">
        <h2 className="text-white font-montserrat font-semibold md:text-[21px] text-[16px] leading-[25.6px] mb-0 md:mb-4">
          {title}
        </h2>
        <p className="text-white font-montserrat font-normal text-[14px] md:text-[16px] leading-[19.5px] text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Box;
