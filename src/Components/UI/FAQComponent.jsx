import { useState } from "react";
import { faqs } from "../../data/FAQData";

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex-3 flex-col font-montserrat">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="w-[90%] md:w-[80%] lg:w-[60rem] border-b-[1px] border-white "
        >
          <button
            className="w-full text-left px-0 py-4 border-t-[1px] border-[#E2E2E4] text-white flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-[14px] md:text-[18px] text-white font-medium leading-[21.94px]">
              {faq.question}
            </span>
            <span>
              {openIndex === index ? (
                <i className="ri-arrow-up-s-line text-2xl md:text-4xl"></i>
              ) : (
                <i className="ri-arrow-down-s-line text-2xl md:text-4xl"></i>
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-0 pt-0 custom_transition pb-4 text-[14px] md:text-[18px] text-white font-normal leading-[21.94px]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
