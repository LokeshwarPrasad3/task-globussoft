import Gallery from "../UI/Gallery";

const GallerySection = () => {
  return (
    <div
      id="gallery"
      className="gallerysection_container bg-[#07091f] font-montserrat flex-3 flex-col gap-12 py-16 "
    >
      <div className="heading_part_container flex-3 flex-col gap-4">
        <img src="/images/Gallery/logo.png" className="h-[55px] w-[55px]" />
        <h2 className="font-normal text-[#DB1E2D] text-[32px] leading-[39.01px]">
          GALLERY
        </h2>
        <img src="/images/Gallery/music-wave.png" alt="wave" />
        <p className="font-[300] text-[16px] px-3 md:px-12 lg:px-24 leading-[19.5px] text-center text-[#FFFFFF]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>
      <div className="gallery_image_container">
        <Gallery />
      </div>
    </div>
  );
};

export default GallerySection;
