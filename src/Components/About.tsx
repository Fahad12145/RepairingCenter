'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/Context/LanguageContext";

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

const TextVariation = {
  offscreen: {
    y: 100,
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
// eslint-disable-next-line react/display-name
const About = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const Images = [
    {
      image: "/Images/1.jpeg",
    },
    {
      image: "/Images/2.jpeg",
    },
    {
      image: "/Images/3.jpeg",
    },
    {
      image: "/Images/4.jpeg",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 items-center max-w-screen-md">
          <div
            ref={ref}
            className={`flex col-span-1 ${language == "ar" && "rtl-style"
              } justify-center py-20 max-sm:px-5`}
          >
            <div className={`relative max-w-screen-md `}>
              <h1
                lang="en"
                className="flex justify-center w-16 mx-auto my-2 text-2xl font-semibold text-center border-b-4 lg:text-3xl border-b-RepairingCenter-blue_500 "
              >
                {t("About.13")}
              </h1>
              <motion.p
                variants={TextVariation}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                lang="en"
                className="relative max-w-sm text-center lg:text-lg"
              >
                <Image
                  className={`absolute hover:rotate-12 -left-10 -top-4 max-sm:-left-0 max-sm:-top-6  ${language == "ar" && " absolute flex  right-1  "
                    }`}
                  src="/Images/InvertedCommas.svg"
                  width={30}
                  height={30}
                  alt="InvertedComma"
                />
                {t("AboutText.14")}
              </motion.p>
            </div>
          </div>

          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-5">
              {Images.map((image, index) => {
                return (
                  <>
                    <div className="col-span-1">
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
                          className="shadow-sm rounded-lg"
                          loading="lazy"
                          src={image.image}
                          width={150}
                          height={0}
                          alt="GalleryImages"
                        />
                      </motion.div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default About;
