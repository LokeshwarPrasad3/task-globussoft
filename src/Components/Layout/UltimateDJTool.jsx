import Slider from "../UI/Slider";

const UltimateDJTool = () => {
  return (
    <div className="ultimate_djtool_container max-h-[600px] md:max-h-[630px] overflow-visible font-montserrat pt-10">
      <div className="flex-3 w-full md:mb-20 md:pt-16 mb-16 pt-10">
        <div className="djtool_heading_container relative w-[95%] mx-3 sm:w-[80%] lg:w-[663px] h-[190px] lg:h-[232px] border-2 border-gray-700 rounded-[20px] p-6">
          <img
            src="./images/The Ultimate DJ Tool.png"
            alt="The Ultimate DJ Tool"
            className="mx-auto w-[17rem] sm:w-[24rem] md:w-[27rem]"
          />
          <div className="flex justify-center mt-5 ">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Venues & DJs"
                className="h-[44px] lg:h-[56px] w-[20rem]  focus:outline-none md:w-[300px] lg:w-[450px] rounded-md border-2 border-white/50 bg-[#0E1135] text-white placeholder-white px-4 pl-12 "
              />
              <i className="ri-search-line opacity-30 absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto md:w-[41rem] lg:w-[60rem] ">
        <Slider />
      </div>
      <div className="h-100px -z-40"></div>
    </div>
  );
};

export default UltimateDJTool;
