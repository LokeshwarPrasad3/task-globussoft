const VideoSection = () => {
  return (
    <div className="flex-3 gap-6 flex-wrap ">
      {/* First Column */}
      <div className="flex-3">
        <img
          className="object-cover w-[22rem] lg:w-[650px] rounded-2xl opacity-70"
          src="/images/usagevideo/video-1.png"
          alt="First Column Image"
        />
        <img
          className="absolute "
          src="/images/usagevideo/play-video.png"
          alt=""
        />
      </div>

      {/* Second Column */}
      <div className="flex-3 flex-col gap-6">
        {/* First Row in Second Column */}
        <div className="h-1/2 mx-auto flex-3">
          <img
            className="object-cover  w-[20rem] rounded-2xl opacity-70"
            src="/images/usagevideo/video-2.png"
            alt="Second Column First Row Image"
          />
          <img
            className="absolute "
            src="/images/usagevideo/play-video.png"
            alt=""
          />
        </div>

        {/* Second Row in Second Column */}
        <div className="h-1/2 mx-auto flex-3">
          <img
            className="object-cover w-[20rem] rounded-2xl opacity-70"
            src="/images/usagevideo/video-3.png"
            alt="Second Column Second Row Image"
          />
          <img
            className="absolute "
            src="/images/usagevideo/play-video.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
