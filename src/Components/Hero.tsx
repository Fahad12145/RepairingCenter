import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div lang="en" className="flex items-center justify-around w-full py-10 ">
      <h1 className="max-w-md text-3xl font-medium">
        Welcome to Cool and cool AC Fridge and Washing Machine Repairing Center
      </h1>
      <Image
        src="/Images/repairrman.png"
        width={300}
        height={400}
        alt="repairman"
      />
    </div>
  );
};

export default Hero;
