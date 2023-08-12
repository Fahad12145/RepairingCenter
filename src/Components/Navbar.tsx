import Link from "next/link";
import React from "react";

const Navbar = () => {
  const Tabs = [
    {
      text: "Home",
      textAr: "بيت",
      href: "/",
    },
    {
      text: "Services",
      textAr: "خدمات",
      href: "/services",
    },
    {
      text: "Contact Us",
      textAr: "اتصل بنا",
      href: "/contact_us",
    },
    {
      text: "About Us",
      textAr: "معلومات عنا",
      href: "/about_us",
    },
  ];
  return (
    <div className="flex justify-center w-full py-3 ">
      <ul className="flex space-x-5">
        {Tabs.map((tab, index) => (
          <>
            <Link
              lang="en"
              href={tab.href}
              className="px-5 py-2 font-semibold hover:border-b-2 hover:border-RepairingCenter-blue hover:text-RepairingCenter-blue"
              key={index}
            >
              {tab.text}
            </Link>
            <Link
              lang="ar"
              href={tab.href}
              className="px-5 py-2 font-semibold hover:border-RepairingCenter-blue hover:text-RepairingCenter-blue"
              key={index}
            >
              {tab.textAr}
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
