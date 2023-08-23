import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// eslint-disable-next-line react/display-name
const Services = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const Services = [
    {
      image: "/Images/washingMachine.png",
      heading: "Washing Machine Repair",
      details:
        "Our team consists of committed and skilled trainers who tirelessly operate around the clock to mend your household appliances.",
      alt: "washingmachine",
    },
    {
      image: "/Images/Ac.png",
      heading: "Air Contioner Repair",
      details:
        "Our team consists of committed and skilled trainers who tirelessly operate around the clock to mend your household appliances.",
      alt: "AC",
    },
    {
      image: "/Images/Microwave.png",
      heading: "Cooker Electrical Repair",
      details:
        "Our team consists of committed and skilled trainers who tirelessly operate around the clock to mend your household appliances.",
      alt: "microwave",
    },
    {
      image: "/Images/washingMachine.png",
      heading: "Automatic Washing Machine",
      details:
        "Our team consists of committed and skilled trainers who tirelessly operate around the clock to mend your household appliances.",
      alt: "refrigerator",
    },
    {
      image: "/Images/CoffeeMaker.png",
      heading: "Coffe Maker Repair",
      details:
        "Our team consists of committed and skilled trainers who tirelessly operate around the clock to mend your household appliances.",
      alt: "coffeemaker",
    },
    {
      image: "/Images/Other.png",
      heading: "Other Appliances Repair",
      details:
        "Our team consists of committed and skilled trainers who tirelessly operate around the clock to mend your household appliances.",
      alt: "otherAppliances",
    },
  ];
  return (
    <>
      <div ref={ref} className="w-full pt-20 md:px-16 max-sm:px-5">
        <div className="max-w-screen-md mx-auto">
          <h1 className="flex justify-center w-16 py-2 mx-auto text-2xl font-medium text-center border-b-4 border-b-RepairingCenter-red">
            Services
          </h1>
          <div className="" />
          <div className="grid items-start grid-cols-2 gap-10 mt-10 sm:gap-5 justify-items-center max-lg:grid-cols-2 max-md:grid-cols-1 ">
            {Services.map((service, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                key={index}
                className="flex items-start justify-center gap-2"
              >
                <Image
                  loading="lazy"
                  src={service.image}
                  width={50}
                  height={50}
                  alt={service.alt}
                />

                <div className="max-w-xs">
                  <h2 className="text-base font-medium">{service.heading}</h2>
                  <p className="w-64 text-xs opacity-70">{service.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

export default Services;
