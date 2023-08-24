"use client";
import Link from "next/link";
import React from "react";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/Context/LanguageContext";

// eslint-disable-next-line react/display-name
const Contact = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const emailAddress = "Ali.zamankahn123@outlook.com";
  const phoneNumber = "0096892486614";
  const Postal = "P.O box 532 PC 511 Al Khoud 6 sultnate of oman";
  const Location = "Seeb, Oman";
  return (
    <div
      ref={ref}
      className={`flex max-w-screen-md text-RepairingCenter-content_bg bg-RepairingCenter-blue_500 max-sm:px-5  ${
        language == "ar" && " flex-row-reverse "
      }`}
    >
      <div className={` max-w-screen-md  `}>
        <div className="space-y-5 ">
          <h1
            lang="en"
            className="py-1 mb-2 text-left border-b-4 w-7 border-b-RepairingCenter-blue "
          >
            {t("Contact.38")}:
          </h1>
          <div className="space-y-1">
            <div className="flex space-x-2">
              <MdCall size={20} />
              <h4>{t("Phone.39")}:</h4>
              <Link
                className="cursor-pointer"
                href={`tel:${phoneNumber}`}
                lang="en"
              >
                {phoneNumber}
              </Link>
            </div>
            <div className="flex space-x-2">
              <MdEmail size={20} />
              <h4>{t("Email.40")}:</h4>
              <Link href={`mailto:${emailAddress}`} lang="en">
                {emailAddress}
              </Link>
            </div>
            <div className="flex space-x-2">
              <MdLocationPin size={20} />
              <h4>{t("Postal.41")}:</h4>
              <span className="" lang="en">
                {Postal}
              </span>
            </div>
            <div className="flex space-x-2">
              <IoMdLocate size={20} />
              <h4>{t("Locate Us.42")}:</h4>
              <Link
                className="cursor-pointer"
                href="https://www.google.com/maps/place/Seeb+Oman"
                lang="en"
              >
                {Location}
              </Link>
            </div>
          </div>
        </div>
        <iframe
          title="location map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3656.33317540576!2d58.14074327533105!3d23.592381178778613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM1JzMyLjYiTiA1OMKwMDgnMzYuMCJF!5e0!3m2!1sen!2s!4v1691922646742!5m2!1sen!2s"
          width="250"
          height="250"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
});

export default Contact;
