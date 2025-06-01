import Link from "next/link";
import React from "react";
import { MdCall, MdEmail, MdLocationPin, MdWhatsapp } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/Context/LanguageContext";

// eslint-disable-next-line react/display-name
const Contact = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const ContactDetails = [
    {
      name: t("phone.39"),
      icon: <MdCall size={20} />,
      detail: "+96871751556",
    },
    {
      name: t("whatsApp.44"),
      icon: <MdWhatsapp size={20} />,
      detail: "+968992486614",
    },
    {
      name: t("email.40"),
      icon: <MdEmail size={20} />,
      detail: "ali.zamankahn123@outlook.com",
    },
    {
      name: t("postal.41"),
      icon: <MdLocationPin size={20} />,
      detail: "P.O box 532 PC 511 Al Khoud 6 Sultnate of Oman",
    },
    {
      name: t("locateUs.42"),
      icon: <IoMdLocate size={20} />,
      detail: "Seeb, Oman",
    },
  ];
  return (
    <div
      ref={ref}
      className="flex flex-wrap justify-center w-full py-5 max-sm:gap-5 md:gap-40 text-RepairingCenter-content_bg bg-RepairingCenter-blue_500 px-5 "
    >
      <div
        className={` flex flex-row items-center justify-center space-y-5 gap-10 max-md:flex-col  ${language == "ar" && "flex-row-reverse"
          } `}
      >
        <div>
          <h1
            className={`flex py-3 mb-5 text-left border-b-4 w-7 border-b-RepairingCenter-blue ${language == "ar" && " ml-auto "
              } `}
          >
            {t("contact.38")}
          </h1>
          {ContactDetails.map((detail, index) => {
            let link = null;

            if (index === 0) {
              link = `tel:${detail.detail}`;
            } else if (index === 1) {
              link = `https://wa.me/${detail.detail}`;
            } else if (index === 2) {
              link = `mailto:${detail.detail}`;
            } else if (index === 4) {
              link = "https://www.google.com/maps/place/Seeb+Oman";
            }

            return (
              <div
                key={index}
                className={`flex flex-row space-x-2 ${language == "ar" && "flex-row-reverse space-x-3 "
                  }`}
              >
                {detail.icon}
                <h5>{detail.name}</h5>
                {link ? (
                  <Link className="cursor-pointer" href={link}>
                    {detail.detail}
                  </Link>
                ) : (
                  <span>{detail.detail}</span>
                )}
              </div>
            );
          })}
        </div>

        <iframe
          title="Our Location "
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3656.33317540576!2d58.14074327533105!3d23.592381178778613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM1JzMyLjYiTiA1OMKwMDgnMzYuMCJF!5e0!3m2!1sen!2s!4v1691922646742!5m2!1sen!2s"
          width="300"
          height="300"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
});

export default Contact;
