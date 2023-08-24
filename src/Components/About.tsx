import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/Context/LanguageContext";

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
  return (
    <div
      ref={ref}
      className={`flex ${
        language == "ar" && "rtl-style"
      } justify-center py-20 max-sm:px-5`}
    >
      <div className={`relative max-w-screen-md `}>
        <h1
          lang="en"
          className="flex justify-center w-16 mx-auto my-2 text-2xl font-medium text-center border-b-4 lg:text-3xl border-b-RepairingCenter-blue_500 "
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
            className={`absolute hover:rotate-12 -left-10 -top-4 max-sm:-left-0 max-sm:-top-6  ${
              language == "ar" && " absolute flex  right-1  "
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
  );
});

export default About;
