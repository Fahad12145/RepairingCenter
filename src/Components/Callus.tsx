import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Callus = () => {
  const { t } = useTranslation();
  const phoneNumber = "00968 92486614";
  return (
    <div className="flex px-5 py-2 border-b border-opacity-20">
      <div className="flex max-w-screen-md mx-auto space-x-1">
        <h1 className="font-medium">{t("Callus.12")}:</h1>
        <Link className="font-medium" href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </Link>
      </div>
    </div>
  );
};

export default Callus;
