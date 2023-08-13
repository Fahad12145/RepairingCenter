import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      lang="en"
      className="flex flex-row items-center justify-around w-full py-10 max-sm:px-5 bg-RepairingCenter-blue_500 max-md:flex-col md:px-10 "
    >
      <div className="max-w-sm space-y-2 text-3xl font-bold text-RepairingCenter-secondary">
        <span className="w-3 text-5xl font-extrabold text-RepairingCenter-blue ">
          Welcome
        </span>
        <span className="mt-5 ml-2 text-2xl">to</span>
        <br />{" "}
        <h2 className="m-0 text-6xl font-semibold text-center font-Poppins">Cool&Cool</h2>
        <h3 className="text-lg font-normal text-center">
          AC,Refrigerator & Washing Machine
        </h3>
        <h3 className="text-lg text-center">Repairing Services</h3>
      </div>
      <Image
        src="/Images/repairrman.png"
        width={450}
        height={400}
        alt="repairman"
      />
    </div>
  );
};

export default Hero;
