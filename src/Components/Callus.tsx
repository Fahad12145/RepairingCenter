import Link from "next/link";
import React from "react";

const Callus = () => {
  const phoneNumber = "00968 92486614";
  return (
    <div className="flex justify-between px-5 py-2 border-b border-opacity-20">
      <div className="flex space-x-1 bo border-opacity-60">
        <h1 className="font-medium">Call Us:</h1>
        <Link className="font-medium" href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </Link>
      </div>
    </div>
  );
};

export default Callus;
