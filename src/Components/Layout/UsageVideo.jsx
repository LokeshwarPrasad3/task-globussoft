import VideoSection from "../UI/VideoSection";

const UsageVideo = () => {
  return (
    <div
      id="videos"
      className="usagevideo_container font-montserrat flex-3 flex-col gap-12 py-20 "
    >
      <div className="heading_part_container flex-3 flex-col gap-4">
        <img
          src="/images/usagevideo/play-video.png"
          className="h-[55px] w-[55px]"
        />
        <h2 className="font-normal text-[#ffff] text-[32px] leading-[39.01px]">
          USAGE <span className="text-[#DB1E2D]">VIDEO</span>
        </h2>
        <img src="/images/webapps/music-wave.png" alt="wave" />
        <p className="font-[300] text-[16px] px-3 leading-[19.5px] text-center text-[#FFFFFF]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>
      <VideoSection />
    </div>
  );
};

export default UsageVideo;
