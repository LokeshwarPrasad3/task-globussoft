import { DJFYWorksBoxArray } from "../../data/worksBoxData";
import WorksBox from "../UI/WorksBox";

const DjfyWorks = () => {
  return (
    <div className="bg-[#07091F] text-white font-montserrat w-full flex justibe flex-col pb-12 pt-0">
      <div className="heading_container w-full flex-3 flex-col my-9 md:my-14 pb-8 md:pb-12 gap-3">
        <h1 className="heading text-[22px] md:text-[32px] leading-[39.01px]">
          HERE&apos;S HOW <span className="text-[#EC3533]">DJFY WORKS</span>
        </h1>
        <span className="w-[50px] bg-[#EC3533] h-[4px]"></span>
      </div>
      <div className="work_box_container flex-3 lg:px-14 flex-wrap gap-y-12 md:gap-y-20 gap-x-10">
        {DJFYWorksBoxArray.map((element, index) => (
          <WorksBox key={index} {...element} />
        ))}
      </div>
    </div>
  );
};

export default DjfyWorks;
