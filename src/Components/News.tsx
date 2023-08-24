import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/Context/LanguageContext";

// eslint-disable-next-line react/display-name
const News = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
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
      image: "/Images/images.jpeg",
    },
    {
      image: "/Images/sparepart.jpeg",
    },
    {
      image: "/Images/automatic.jpeg",
    },
  ];
  return (
    <div className="flex justify-center py-20 max-md:px-5">
      <div className="max-w-screen-md">
        <h1
          lang="en"
          className="flex justify-center w-20 py-2 mx-auto my-2 text-2xl font-semibold text-center border-b-4 lg:text-3xl border-b-RepairingCenter-orange"
        >
          {t("News.24")}
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
                      width={150}
                      height={150}
                      alt="GalleryImages"
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`text-base ${language == "ar" && "text-2xl"}`}
            >
              {t("NewsText.25")}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
