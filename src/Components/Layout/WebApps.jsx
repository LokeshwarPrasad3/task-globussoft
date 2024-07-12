import WebAppSwiperComponent from "../UI/WebAppSwiperComponent";

const WebApps = () => {
  return (
    <div
      id="web-apps"
      className="webapp_container bg-[#07091F] font-montserrat flex-3 flex-col py-14 gap-12 pt-24 md:pt-28 lg:pt-40"
    >
      <div className="heading_part_container flex-3 flex-col gap-4">
        <img
          src="/images/webapps/smartphone.png"
          className="h-[53px] w-[53px]"
        />
        <h2 className="font-normal text-[#ffff] text-[32px] leading-[39.01px]">
          WEB <span className="text-[#DB1E2D]">APPS</span>
        </h2>
        <img src="/images/webapps/music-wave.png" alt="wave" />
        <p className="font-[300] text-[16px] px-3 leading-[19.5px] text-center text-[#FFFFFF]">
          Scan the QR Code, Connect to the event and request your song . No need
          to Download or install any App.
        </p>
      </div>
      {/* a swiper slider of apps */}
      <WebAppSwiperComponent />

      <div className="webapps_button_container text-white flex-3 gap-8 sm:gap-10">
        <button className="custom_button">Sign Up as User</button>
        <button className="custom_button">Signup as DJ</button>
      </div>
    </div>
  );
};

export default WebApps;
