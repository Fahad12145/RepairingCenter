import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/Context/LanguageContext";
const ImageVariation = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 30,
    rotate: 0,
  },
};
const TextVariation = {
  offscreen: {
    y: -100,
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
const Hero = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  console.log("selected lang", language);
  return (
    <div
      ref={ref}
      lang="en"
      className={`flex flex-row items-center justify-around w-full py-20 max-sm:px-5 bg-RepairingCenter-blue_500 md:px-10 `}
    >
      <div
        className={`flex flex-row items-center max-w-screen-md gap-5 pt-10 max-largeTablet:flex-col  ${
          language == "ar" && "flex-row-reverse"
        } `}
      >
        <motion.div
          variants={TextVariation}
          initial="offscreen"
          whileInView="onscreen"
          // viewport={{ once: true, amount: 0.8 }}
          className="max-w-sm space-y-2 text-3xl font-bold text-RepairingCenter-secondary"
        >
          <span
            className={`w-3 text-5xl font-extrabold ${
              language == "ar" && "text-5xl font-sans font-semibold"
            }  text-RepairingCenter-blue `}
          >
            {t("Welcome.5")}
          </span>
          <span className="mt-5 ml-2 text-2xl"> {t("To.8")}</span>
          <br />{" "}
          <h2 className="m-0 text-6xl font-semibold text-center font-Poppins">
            {t("Cool&Cool.9")}
          </h2>
          <h3 className="text-lg font-normal text-center">
            {t("AC,Refrigerator & Washing Machine.10")}
          </h3>
          <h3 className="text-lg text-center">{t("Repairing Services.11")}</h3>
        </motion.div>
        <motion.div
          variants={ImageVariation}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="flex items-center"
        >
          <Image
            src="/Images/Electronics.png"
            width={500}
            height={500}
            alt="Appliances"
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  );
});

export default Hero;
