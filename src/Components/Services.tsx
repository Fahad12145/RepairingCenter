import Image from "next/image";
import React from "react";

const Services = () => {
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
      <div className="">
        <h1 className="text-2xl font-medium text-center ">Services we Offer</h1>
        <div className="grid grid-cols-3 gap-10 mx-10 my-10 align-baseline justify-items-center max-lg:grid-cols-2">
          {Services.map((service, index) => {
            return (
              <div key={index} className="flex items-start gap-5">
                <div>
                  <Image
                    src={service.image}
                    width={50}
                    height={50}
                    alt={service.alt}
                  />
                </div>
                <div className="max-w-xs">
                  <h2 className="font-medium">{service.heading}</h2>
                  <p className="text-sm">{service.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
