import { useEffect } from "react";
import Navbar from "../UI/Navbar";

const AboutUsSection = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  });

  return (
    <>
      <div
        id="about-us"
        className="main_section min-h-[890px] w-full flex flex-col"
      >
        <Navbar />
        <div className="search_section my-5 md:my-15 lg:my-20 flex justify-end items-center relative right-[10vw]">
          <img
            className="h-[50px] w-[50px] lg:h-[75px] lg:w-[75px] cursor-pointer"
            src="/images/AboutUsSection/search-icon.png"
            alt=""
          />
        </div>

        {/* lower part section */}
        <div className="hero_box font-montserrat text-white w-full px-3 md:px-10 flex-3 gap-10 flex-wrap">
          {/* left information */}
          <div className="left_part w-full lg:w-1/3 flex flex-col gap-1">
            <h2 className="md:text-[42px] text-[32px] md:leading-[51.2px] leading-[40px] font-normal">
              ABOUT <span className="text-[#EC3533]">DJFY</span>
            </h2>
            <div className="wave-icon">
              <img
                className="w-[50px]"
                src="/images/AboutUsSection/music-wave.png"
                alt=""
              />
            </div>
            <p className="para-1 text-justify mt-2 text-[14px] md:text-[16px]">
              Introducing DJFY, the ultimate platform revolutionizing the music
              industry by offering a seamless alternative stream of income for
              DJs, live musicians/bands, and street performers/musicians. With
              DJFY, every artist and venue owner can easily create a free
              account and receive a unique QR code to share with their audience,
              unlocking the power of interactive music experiences like never
              before.
              <br />
              <br />
              With DJFY, artists and venues can tap into a new revenue stream
              while providing an immersive and interactive music experience for
              their audience. Join DJFY today and unlock the potential of your
              performances like never before!
            </p>
          </div>
          {/* right information */}
          <div className="right_part lg:w-fit relative mr-20 md:mr-10">
            {/* image-1 (overlay) */}
            <img
              className="absolute top-11 left-20 z-10 w-[180px] md:w-[250px] h-[180px] md:h-[250px] lg:w-[405px] lg:h-[400px] "
              src="/images/AboutUsSection/girl-image-1.png"
              alt="img-1"
            />

            {/* image-2 */}
            <img
              className="relative z-20 w-[180px] md:w-[250px] h-[180px] md:h-[250px] lg:w-[400px] lg:h-[400px] rounded-2xl  "
              style={{
                boxShadow: "0 5px 6px 10px rgba(0,0,0,0.3)",
              }}
              src="/images/AboutUsSection/girl-image-2.png"
              alt="img-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
