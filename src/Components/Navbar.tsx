"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { BiGlobe } from "react-icons/bi";
import { MdViewHeadline } from "react-icons/md";

interface NavbarProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}
const Navbar: React.FC<NavbarProps> = ({
  homeRef,
  aboutRef,
  servicesRef,
  contactRef,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [language, setLanguage] = useState("english");

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
      onClick: () => scrollToRef(homeRef),
    },
    {
      text: "Services",
      onClick: () => scrollToRef(servicesRef),
    },
    {
      text: "Contact Us",

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
  const handleLanguageChange = (event: any) => {
    setLanguage(event.target.value);
  };
  return (
    <div className="flex justify-center w-full my-2">
      <div
        className={`fixed flex justify-center py-2 bg-RepairingCenter-white top-0 z-50 w-full max-md:hidden space-x-5 ${
          scroll
            ? "shadow-lg bg-RepairingCenter-white bg-opacity-95"
            : "bg-transparent mx-auto max-md:bg-opacity-50 "
        }   `}
      >
        <Link href="/">
          <Image src="/Images/Logo.png" width={60} height={60} alt="logo" />
        </Link>

        {Tabs.map((tab, index) => (
          <>
            <button
              lang="en"
              onClick={tab.onClick}
              className="py-2 font-medium hover:border-b-2 active:border-RepairingCenter-blue hover:text-RepairingCenter-blue"
              key={index}
            >
              {tab.text}
            </button>
          </>
        ))}
        <div className="flex items-center px-3 space-x-2 border ">
          <BiGlobe size={30} />
          <select
            className="border-none outline-none cursor-pointer bg-RepairingCenter-white"
            value={language}
            onChange={handleLanguageChange}
          >
            <option className="px-2 bg-none" value="english">
              English
            </option>
            <option value="arabic">Arabic</option>
          </select>
        </div>
      </div>
      <div
        className={`fixed top-0 py-3 flex items-center w-full justify-between bg-RepairingCenter-white px-5 ml-auto md:hidden ${
          scroll ? "shadow-lg bg-RepairingCenter-blue_500 " : "bg-transparent  "
        }  `}
      >
        <Link href="/">
          <Image src="/Images/Logo.png" width={60} height={60} alt="logo" />
        </Link>
        <div className="relative flex items-center cursor-pointer">
          <p className="text-sm">Menu</p>
          {dropdown ? (
            <IoMdClose onClick={() => setDropdown(!dropdown)} size={30} />
          ) : (
            <MdViewHeadline onClick={() => setDropdown(!dropdown)} size={30} />
          )}
        </div>
        <ul
          className={`absolute flex items-center md:hidden right-5 top-16 rounded-xl bg-RepairingCenter-blue_500  text-RepairingCenter-white w-40 flex-col justify-center ${
            dropdown ? "block" : "hidden"
          }`}
        >
          {Tabs.map((tab, index) => (
            <>
              <button
                lang="en"
                onClick={tab.onClick}
                className="py-2 font-semibold hover:border-b-2 active:border-RepairingCenter-blue hover:text-RepairingCenter-blue"
                key={index}
              >
                {tab.text}
              </button>
            </>
          ))}
          <div className="flex items-center px-3 space-x-2 border-none ">
            <BiGlobe size={30} />
            <select
              className="border-black outline-none cursor-pointer bg-RepairingCenter-blue_500 text bg-none"
              value={language}
              onChange={handleLanguageChange}
            >
              <option
                className="cursor-pointer bg-RepairingCenter-blue_500"
                value="english"
              >
                English
              </option>
              <option
                className="cursor-pointer bg-RepairingCenter-blue_500"
                value="arabic"
              >
                Arabic
              </option>
            </select>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
