import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="grid justify-center grid-cols-3 gap-5 max-md:grid-cols-2 justify-items-center"
            >
              {Images.map((image, index) => {
                return (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    key={index}
                  >
                    <Image
                      className="shadow-2xl "
                      loading="lazy"
                      src={image.image}
                      width={200}
                      height={0}
                      alt="GalleryImages"
                    />
                  </motion.div>
                );
              })}
            </motion.div>

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
