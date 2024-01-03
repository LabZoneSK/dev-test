import { Image } from "./Image";

export const Gallery = ({ images }) => {
  console.log(images);
  
  return (
    <>
      {images.length > 0 ? (
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 items-center">
          {images.map((image, id) => (
            <Image image={image} id={id} key={id}></Image>
          ))}
        </div>
      ) : (
        <div>no images to display</div>
      )}
    </>
  );
};
