import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/Context/LanguageContext";

const Testimonial = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const Reviews = [
    {
      review: t("ReviewText1.30"),
      name: t("ReviewClient1.31"),
    },
    {
      review: t("ReviewText2.32"),
      name: t("ReviewClient2.33"),
    },
    {
      review: t("ReviewText3.34"),
      name: t("ReviewClient3.35"),
    },
    {
      review: t("ReviewText4.36"),
      name: t("ReviewClient4.37"),
    },
  ];
  return (
    <div
      className={` flex items-center justify-center ${
        language == "ar" && "  flex-row-reverse text-right"
      } max-w-screen-md gap-10 py-20 mx-auto max-sm:px-10 max-largeTablet:flex-col max-sm:flex-col`}
    >
      <div className="max-w-sm mx-auto space-y-3">
        <h5
          className={`border-b-4 w-7 border-b-RepairingCenter-primary ${
            language == "ar" && "flex text-xl ml-auto"
          }`}
        >
          {t("Testimonial.26")}
        </h5>
        <motion.h1
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="text-4xl font-semibold "
        >
          {" "}
          {t("Client Said.27")}{" "}
        </motion.h1>
        <p className={`opacity-70 ${language == "ar" && "text-xl "} `}>
          {t("TestimonialText.28")}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <button className="p-3 mt-5 bg-RepairingCenter-blue_500 text-RepairingCenter-white">
            {t("TestimonialButtonText.29")}
          </button>
        </motion.div>
      </div>
      <div
        className={`relative ${
          language == "ar" && "relative  overflow-x-auto"
        } flex space-x-5 overflow-x-auto w-80 max-sm:w-80  `}
      >
        {Reviews.map((review, index) => {
          return (
            <div
              key={index}
              className="min-w-full p-5 overflow-hidden bg-[#EEFAFF]"
            >
              <Image
                className={`absolute  ${
                  language == "ar" && "hidden"
                }hover:rotate-12 rotate-3 `}
                src="/Images/InvertedCommas.svg"
                width={30}
                height={30}
                alt="InvertedComma"
              />
              <p className="mt-10 text-base font-medium text-RepairingCenter-blue_500">
                {review.review}
              </p>{" "}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span
                  className={`flex mt-5 text-xl font-semibold text-RepairingCenter-blue_500 ${
                    language == "ar" && "flex justify-end"
                  }`}
                >
                  {review.name}
                </span>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
