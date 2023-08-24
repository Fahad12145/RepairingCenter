import Link from "next/link";
import React from "react";
import { MdCall, MdEmail, MdLocationPin, MdWhatsapp } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/display-name
const Contact = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const { t } = useTranslation();
  const emailAddress = "Ali.zamankahn123@outlook.com";
  const phoneNumber = "0096892486614";
  const whatsAppNumber = "+96892486614";
  return (
    <div
      ref={ref}
      className="flex flex-wrap items-center justify-center w-full py-5 max-sm:gap-5 md:gap-40 text-RepairingCenter-content_bg bg-RepairingCenter-blue_500 max-sm:px-5 "
    >
      <div className="space-y-5">
        <h1
          lang="en"
          className="py-1 mb-2 text-left border-b-4 w-7 border-b-RepairingCenter-blue "
        >
          Contact:
        </h1>
        <div className="space-y-1">
          <div className="flex space-x-2">
            <MdCall size={20} />
            <h4>Phone:</h4>
            <Link
              className="cursor-pointer"
              href={`tel:${phoneNumber}`}
              lang="en"
            >
              {phoneNumber}
            </Link>
          </div>
          <div className="flex space-x-2">
            <MdWhatsapp size={20} />
            <h4>{t("phone.39")}:</h4>{" "}
            <Link
              className="cursor-pointer"
              href={`https://wa.me/${whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              lang="en"
            >
              {phoneNumber}
            </Link>
          </div>
          <div className="flex space-x-2">
            <MdEmail size={20} />
            <h4>Email:</h4>
            <Link href={`mailto:${emailAddress}`} lang="en">
              {emailAddress}
            </Link>
          </div>
          <div className="flex space-x-2">
            <MdLocationPin size={20} />
            <h4>Postal:</h4>
            <span className="" lang="en">
              P.O box 532 PC 511 Al Khoud 6 sultnate of oman
            </span>
          </div>
          <div className="flex space-x-2">
            <IoMdLocate size={20} />
            <h4>Locate Us:</h4>
            <Link
              className="cursor-pointer"
              href="https://www.google.com/maps/place/Seeb+Oman"
              lang="en"
            >
              Seeb, Oman
            </Link>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3656.33317540576!2d58.14074327533105!3d23.592381178778613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM1JzMyLjYiTiA1OMKwMDgnMzYuMCJF!5e0!3m2!1sen!2s!4v1691922646742!5m2!1sen!2s"
        width="300"
        height="300"
        loading="lazy"
      ></iframe>
    </div>
    // </div>
  );
});

export default Contact;
