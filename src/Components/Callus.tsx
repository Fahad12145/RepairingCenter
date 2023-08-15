import Link from "next/link";
import React from "react";

const Callus = () => {
  const phoneNumber = "00968 92486614";
  return (
    <div className="flex px-5 py-2 border-b border-opacity-20">
      <div className="flex max-w-screen-md space-x-1">
        <h1 className="font-medium">Call Us:</h1>
        <Link className="font-medium" href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </Link>
      </div>
    </div>
  );
};

export default Callus;
