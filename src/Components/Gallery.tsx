import Image from "next/image";
import React from "react";

const Gallery = () => {
  const Images = [
    {
      image: "/Images/fridge.jpg",
    },
    {
      image: "/Images/machine.jpg",
    },
    {
      image: "/Images/stove.jpg",
    },
    {
      image: "/Images/gas.jpg",
    },
    {
      image: "/Images/repairingstove.jpg",
    },
    {
      image: "/Images/Washingmachine.jpeg",
    },
  ];
  return (
    <div className="py-10 mx-20 max-sm:mx-5">
      <div className="max-w-screen-md mx-auto">
        <h1 className="flex justify-center w-16 py-2 mx-auto my-5 text-2xl font-medium text-center border-b-4 border-b-RepairingCenter-green ">
          Gallery
        </h1>
        <div className="grid justify-center grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center">
          {Images.map((image, index) => {
            return (
              <div key={index}>
                <Image
                  className="max-h-[300px]"
                  loading="lazy"
                  src={image.image}
                  width={350}
                  height={300}
                  alt="GalleryImages"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
