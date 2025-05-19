'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/Context/LanguageContext";

// eslint-disable-next-line react/display-name
const Services = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const Services = [
    {
      image: "/Images/washingMachine.png",
      heading: t("ServicesHead1.17"),
      details: t("ServicesText.16"),
      alt: "washingmachine",
    },
    {
      image: "/Images/Ac.png",
      heading: t("ServicesHead2.18"),
      details: t("ServicesText.16"),
      alt: "AC",
    },
    {
      image: "/Images/Microwave.png",
      heading: t("ServicesHead3.19"),
      details: t("ServicesText.16"),
      alt: "microwave",
    },
    {
      image: "/Images/washingMachine.png",
      heading: t("ServicesHead4.20"),
      details: t("ServicesText.16"),
      alt: "refrigerator",
    },
    {
      image: "/Images/Other.png",
      heading: t("ServicesHead6.22"),
      details: t("ServicesText.16"),
      alt: "otherAppliances",
    },
    {
      image: "/Images/CoffeeMaker.png",
      heading: t("ServicesHead5.21"),
      details: t("ServicesText.16"),
      alt: "coffeemaker",
    },
  ];
  return (
    <>
      <div ref={ref} className={`w-full pt-20 max-md:px-16 max-sm:px-5`}>
        <div className="max-w-screen-md mx-auto">
          <h1 className="flex justify-center w-16 py-2 mx-auto text-2xl font-semibold text-center border-b-4 lg:text-3xl border-b-RepairingCenter-red">
            {t("ServicesHeading.15")}
          </h1>
          <div className="" />
          <div
            className={`grid items-start grid-cols-2 gap-10 mt-10 max-sm:gap-5 justify-items-center max-lg:grid-cols-2 max-md:grid-cols-1 `}
          >
            {Services.map((service, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                key={index}
                className={`flex items-start justify-center gap-2 ${language == "ar" && "flex-row-reverse text-right items-start"
                  }`}
              >
                <Image
                  loading="lazy"
                  src={service.image}
                  width={70}
                  height={70}
                  alt={service.alt}
                />

                <div className="md:max-w-lg max-md:max-w-md">
                  <h2 className="font-medium md:text-lg max-md:text-base">
                    {service.heading}
                  </h2>
                  <p className="w-64 text-base opacity-60 ">
                    {service.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

export default Services;
