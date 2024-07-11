import { galleryImagesArray } from "../../data/GallleryData";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {galleryImagesArray.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery Image ${index + 1}`}
          className="w-[11rem] h-[11rem] md:w-[200px] md:h-[200px] object-cover"
        />
      ))}
    </div>
  );
};

export default Gallery;
