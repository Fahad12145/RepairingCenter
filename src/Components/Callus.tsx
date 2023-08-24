import { useLanguage } from "@/Context/LanguageContext";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Callus = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const phoneNumber = "00968 92486614";

  return (
    <div className="flex px-5 py-2 border-b border-opacity-20">
      <div className={`flex flex-row max-w-screen-md mx-auto space-x-1`}>
        <div
          className={`flex items-center marquee ${
            language == "ar" && "flex-row-reverse"
          }  `}
        >
          <h1 className="flex items-center font-medium">
            <span className={`${language == "ar" ? "flex" : "hidden"}`}>:</span>
            {t("Callus.12")}
            <span className={`${language == "ar" ? "hidden" : "flex"}`}>:</span>
          </h1>

          <Link
            className="text-RepairingCenter-blue_500"
            href={`tel:${phoneNumber}`}
          >
            {phoneNumber}
          </Link>
          <p className="ml-1">{t("NewsText1.43")}</p>
        </div>
      </div>
    </div>
  );
};

export default Callus;
