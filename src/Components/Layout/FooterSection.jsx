// FooterSection.js

const FooterSection = () => {
  return (
    <footer
      className="bg-[#040514] w-full gap-2 sm:gap-0 h-24 sm:h-14 flex flex-col py-2 sm:flex-row items-center lg:px-10 justify-center sm:justify-around px-4 text-white font-montserrat"
      style={{ lineHeight: "29.25px" }}
    >
      <div className="text-sm text-center sm:text-left mb-2 sm:mb-0">
        © 2024 DjFy. All Rights Reserved
      </div>
      <div className="flex items-center space-x-4">
        <span className="hidden sm:inline">Connect -</span>
        <a href="#" className="text-white">
          <i className="ri-facebook-fill"></i>
        </a>
        <a href="#" className="text-white">
          <i className="ri-twitter-fill"></i>
        </a>
        <a href="#" className="text-white">
          <i className="ri-linkedin-fill"></i>
        </a>
        <a href="#" className="text-white">
          <i className="ri-instagram-fill"></i>
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
