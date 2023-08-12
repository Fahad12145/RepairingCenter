import Link from "next/link";
import React from "react";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";

const Footer = () => {
  const emailAddress = "Ali.zamankahn123@outlook.com";
  const phoneNumber = "0096892486614";
  return (
    <div className="flex flex-wrap justify-center w-full py-5 max-md:flex-col text-RepairingCenter-content_bg bg-[rgba(23,73,124,1)]">
      <div className="flex justify-between ">
       
          {/* <h1 lang="ar" className="text-right ">
            :معلومات عنا
          </h1>
          <p lang="ar" className="max-w-sm text-right">
            نحن نعمل منذ 20 عامًا هنا عملنا معها 20 شركة حول المدن الرئيسية في
            المملكة العربية السعودية {""}
          </p> */}
        </div>
        <div>
          <h1 lang="en" className="mb-2 text-left border-b-4 w-7 border-b-RepairingCenter-blue ">
            Contact:
          </h1>
          <div>
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
              <MdEmail size={20} />
              <h4>Email:</h4>
              <Link href={`mailto:${emailAddress}`} lang="en">
                {emailAddress}
              </Link>
            </div>
            <div className="flex space-x-2">
              <MdLocationPin size={20} />
              <h4>Address:</h4>
              <Link
                className="cursor-pointer"
                href="https://www.google.com/maps/place/Seeb+Oman"
                lang="en"
              >
                Seeb, Oman
              </Link>
              {/* <Link
                href="https://www.google.com/maps/place/Seeb+Oman"
                lang="ar"
              >
                السيب ، عمان
              </Link> */}
            </div>
          </div>
          {/* <div className="">
            <h1 lang="ar" className="text-right">
              :اتصل بنا
            </h1>
            <div className="flex flex-row-reverse space-x-1 ">
              <MdCall size={20} />
              <Link
                className="cursor-pointer"
                href={`tel:${phoneNumber}`}
                lang="en"
              >
                {phoneNumber}
              </Link>
            </div>
            <div className="flex flex-row-reverse space-x-1">
              <MdEmail size={20} />
              <Link href={`mailto:${emailAddress}`} lang="en">
                {emailAddress}
              </Link>
            </div>
            <div className="flex flex-row-reverse space-x-1">
              <MdLocationPin size={20} />
              <Link
                className="cursor-pointer"
                href="https://www.google.com/maps/place/Seeb+Oman"
                lang="en"
              >
                Seeb, Oman
              </Link>
              <Link
                href="https://www.google.com/maps/place/Seeb+Oman"
                lang="ar"
              >
                السيب ، عمان
              </Link>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    // </div>
  );
};

export default Footer;
