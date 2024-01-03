import { Image } from "./Image";

export const Gallery = ({ images }) => {
  return (
    <>
      {images.length > 0 ? (
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
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
