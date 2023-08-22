import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
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
      image: "/Images/repairingstove.jpg",
    },
    {
      image: "/Images/Electricstove.jpg",
    },
    {
      image: "/Images/machine.jpg",
    },
  ];
  return (
    <div className="py-10 mx-20 max-sm:mx-5">
      <div className="max-w-screen-md mx-auto">
        <h1 className="flex justify-center w-16 py-2 mx-auto my-5 text-2xl font-medium text-center border-b-4 border-b-RepairingCenter-green ">
          Gallery
        </h1>
        <motion.div
          className="grid justify-center grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          {Images.map((image, index) => {
            return (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Image
                  className="shadow-2xl "
                  loading="lazy"
                  src={image.image}
                  width={300}
                  height={0}
                  alt="GalleryImages"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
