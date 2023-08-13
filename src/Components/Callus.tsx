import Link from "next/link";
import React from "react";

const Callus = () => {
  const phoneNumber = "00968 92486614";
  return (
    <div className="flex justify-between px-5 py-2 border-b-[1px] border-b-opacity-10">
      <div className="flex space-x-1 font-bold bo border-opacity-60">
        <h1>Call Us:</h1>
        <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
      </div>
    </div>
  );
};

export default Callus;
