import FAQComponent from "../UI/FAQComponent";

const FAQSection = () => {
  return (
    <div className="faqsection_container bg-[#07091f] font-montserrat flex-3 flex-col gap-8 py-16 ">
      <div className="heading_part_container flex-3 flex-col gap-4">
        <img src="/images/FAQ/logo.png" className="h-[55px] w-[55px]" />
        <h2 className="font-normal text-[#DB1E2D] text-[32px] leading-[39.01px]">
          FAQ
        </h2>
        <img src="/images/Gallery/music-wave.png" alt="wave" />
      </div>
      <FAQComponent />
    </div>
  );
};

export default FAQSection;
