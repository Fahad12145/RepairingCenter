import Image from "next/image";
import React, { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Services = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const Services = [
    {
      image: "/Images/washingMachine.png",
      heading: "Washing Machine Repair",
      details:
        "Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.",
      alt: "washingmachine",
    },
    {
      image: "/Images/washingMachine.png",
      heading: "Refregirator Repair",
      details:
        "Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.",
      alt: "refrigerator",
    },
    {
      image: "/Images/Microwave.png",
      heading: "Cooker Electrical Repair",
      details:
        "Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.",
      alt: "microwave",
    },
    {
      image: "/Images/TV.png",
      heading: "TV Repair",
      details:
        "Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.",
      alt: "TV",
    },
    {
      image: "/Images/CoffeeMaker.png",
      heading: "Coffe Maker Repair",
      details:
        "Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.",
      alt: "coffeemaker",
    },
    {
      image: "/Images/Other.png",
      heading: "Other Appliances Repair",
      details:
        "Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermen tum.",
      alt: "otherAppliances",
    },
  ];
  return (
    <>
      <div ref={ref} className="py-20 md:px-16 max-sm:px-5">
        <h1 className="flex justify-center w-16 py-2 mx-auto text-2xl font-medium text-center border-b-4 border-b-RepairingCenter-red">
          Services
        </h1>
        <div className="" />
        <div className="grid items-start grid-cols-3 gap-10 my-10 sm:gap-5 justify-items-center max-lg:grid-cols-2 max-md:grid-cols-1">
          {Services.map((service, index) => (
            <div key={index} className="flex items-start justify-center gap-2">
              <div>
                <Image
                  src={service.image}
                  width={50}
                  height={50}
                  alt={service.alt}
                />
              </div>
              <div className="max-w-xs">
                <h2 className="text-lg font-medium">{service.heading}</h2>
                <p className="text-xs opacity-70">{service.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export default Services;
