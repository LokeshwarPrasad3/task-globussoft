import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div
      className="contacts_container font-comfortaa font-medium text-[12px] md:text-[13px] leading-[13.38px] text-[#BCBCBC] md:h-[58px] p-3 md:p-0 bg-[#0E1135] 
    flex items-center justify-center sm:justify-around flex-wrap gap-2 md:gap-5"
    >
      {/* 1st section */}
      <div className="whatsapp-email-mono flex-3 gap-2 md:gap-3 flex-wrap">
        <a
          className="whatsapp flex-3 gap-1"
          href="https://wa.me/0012345678990"
          target="_blank"
        >
          <i className="ri-whatsapp-line text-green-500 icon"></i>
          <p className=" ">WhatsApp Support</p>
        </a>
        <a
          className="email flex-3 gap-1"
          href="mailto:team@djfyapp.com"
          target="_blank"
        >
          <i className="ri-mail-line icon"></i>
          <p className=" ">team@djfyapp.com</p>
        </a>
        <a
          className="mono flex-3 gap-1"
          href="tel:+0012345678990"
          target="_blank"
        >
          <i className="ri-phone-line icon"></i>
          <p className=" ">+001 2345 6789 90</p>
        </a>
      </div>
      {/* 2nd section */}
      <div className="login-register flex-3">
        <Link to="#">Login/Register</Link>
      </div>
      {/* 3rd section */}
      <div className="social-handle flex-3 gap-3">
        <a href="#">
          <i className="ri-facebook-fill icon"></i>
        </a>
        <a href="#">
          <i className="ri-twitter-fill icon"></i>
        </a>
        <a href="#">
          <i className="ri-linkedin-fill icon"></i>
        </a>
        <a href="#">
          <i className="ri-instagram-fill icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
