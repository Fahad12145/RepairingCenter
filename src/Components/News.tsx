import Image from "next/image";
import React from "react";

// eslint-disable-next-line react/display-name
const News = () => {
  const Images = [
    {
      image: "/Images/motor.png",
    },
    {
      image: "/Images/plate.png",
    },
    {
      image: "/Images/spareparts.png",
    },
    {
      image: "/Images/washingmachine.jpg",
    },
  ];
  return (
    <div className="flex justify-center py-20 max-sm:px-5">
      <div className="max-w-screen-md">
        <h1
          lang="en"
          className="flex justify-center w-20 py-2 mx-auto my-2 text-2xl font-medium text-center border-b-4 border-b-RepairingCenter-orange"
        >
          News
        </h1>
        <div lang="en" className="text-center ">
          <div className="flex flex-row items-center justify-between gap-10 mt-10 max-md:flex-col-reverse">
            <div className="grid justify-center grid-cols-3 gap-5 max-md:grid-cols-2 justify-items-center">
              {Images.map((image, index) => {
                return (
                  <Image
                    key={index}
                    className="shadow-2xl "
                    loading="lazy"
                    src={image.image}
                    width={200}
                    height={0}
                    alt="GalleryImages"
                  />
                );
              })}
            </div>

            <p className="text-base hover:font-semibold">
              We engage in the buying and selling of spare parts for household
              appliances.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
