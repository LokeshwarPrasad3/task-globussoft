import { useCasesDataArray } from "../../data/UseCasesData";
import UseCaseBox from "../UI/UseCaseBox";

const UseCases = () => {
  return (
    <div
      id="use-cases"
      className="bg-[#0E1135] text-white font-montserrat w-full flex flex-col py-12 pt-5"
    >
      <div className="heading_container w-full flex-3 flex-col my-2 md:my-5 pb-5 md:pb-8 gap-2">
        <h1 className="heading text-[28px] md:text-[42px] leading-[51.01px]">
          USE <span className="text-[#EC3533]">CASES</span>
        </h1>
        <span className="w-[50px] bg-[#EC3533] h-[4px]"></span>
      </div>
      <div className="use_cases_container flex-3 flex-wrap gap-y-14 sm:gap-y-12 md:gap-y-20 gap-x-10 w-full">
        {useCasesDataArray.map((element, index) => (
          <UseCaseBox key={index} {...element} index={index} />
        ))}
      </div>
    </div>
  );
};

export default UseCases;
