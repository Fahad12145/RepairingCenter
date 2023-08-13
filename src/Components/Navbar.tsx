"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { MdCancel, MdViewHeadline } from "react-icons/md";

interface NavbarProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}
const Navbar: React.FC<NavbarProps> = ({
  aboutRef,
  servicesRef,
  contactRef,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [scroll, setScroll] = useState(false);

  const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setDropdown(false); // Close the dropdown after clicking a link
  };

  const Tabs = [
    {
      text: "Home",
    },
    {
      text: "Services",
      onClick: () => scrollToRef(servicesRef),
    },
    {
      text: "Contact Us",
      // textAr: "اتصل بنا",
      onClick: () => scrollToRef(contactRef),
    },
    {
      text: "About Us",
      onClick: () => scrollToRef(aboutRef),
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex justify-center w-full py-3 my-2">
      <ul
        className={`fixed flex justify-center py-5 bg-RepairingCenter-white top-0 z-50 w-full max-md:hidden  space-x-5   ${
          scroll
            ? "shadow-lg bg-RepairingCenter-white bg-opacity-95"
            : "bg-transparent mx-auto max-md:bg-opacity-50 "
        }   `}
      >
        {Tabs.map((tab, index) => (
          <>
            <Link
              lang="en"
              href="#"
              onClick={tab.onClick}
              className="py-2 font-semibold hover:border-b-2 active:border-RepairingCenter-blue hover:text-RepairingCenter-blue"
              key={index}
            >
              {tab.text}
            </Link>
          </>
        ))}
      </ul>
      <div
        className={`fixed top-0 py-5 flex items-center w-full justify-end bg-RepairingCenter-white px-5 ml-auto md:hidden ${
          scroll
            ? "shadow-lg bg-white bg-opacity-95"
            : "bg-transparent md:bg-opacity-50 "
        }  `}
      >
        <div className="relative flex items-center">
        <p className="text-sm">Menu</p>
        {dropdown ? (
          <IoMdClose onClick={() => setDropdown(!dropdown)} size={30} />
        ) : (
          <MdViewHeadline onClick={() => setDropdown(!dropdown)} size={30} />
        )}
      </div>
      <ul
        className={`absolute flex items-center md:hidden right-5 top-12 bg-RepairingCenter-blue_500 bg-opacity-10 text-RepairingCenter-white w-40 flex-col justify-center ${
          dropdown ? "block" : "hidden"
        }`}
      >
        {Tabs.map((tab, index) => (
          <>
            <Link
              lang="en"
              href="#"
              onClick={tab.onClick}
              className="py-2 font-semibold hover:border-b-2 active:border-RepairingCenter-blue hover:text-RepairingCenter-blue"
              key={index}
            >
              {tab.text}
            </Link>
          </>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
