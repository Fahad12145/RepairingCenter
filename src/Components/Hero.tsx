import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const cardVariants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
// eslint-disable-next-line react/display-name
const Hero = React.forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      lang="en"
      className="flex flex-row items-center justify-around w-full py-20 max-sm:px-5 bg-RepairingCenter-blue_500 md:px-10 "
    >
      <div className="flex flex-row items-center max-w-screen-md gap-5 pt-10 max-largeTablet:flex-col">
        <div className="max-w-sm space-y-2 text-3xl font-bold text-RepairingCenter-secondary">
          <span className="w-3 text-5xl font-extrabold text-RepairingCenter-blue ">
            Welcome
          </span>
          <span className="mt-5 ml-2 text-2xl">to</span>
          <br />{" "}
          <h2 className="m-0 text-6xl font-semibold text-center font-Poppins">
            Cool&Cool
          </h2>
          <h3 className="text-lg font-normal text-center">
            AC,Refrigerator & Washing Machine
          </h3>
          <h3 className="text-lg text-center">Repairing Services</h3>
        </div>
        <motion.div
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="flex items-center"
        >
          <Image
            src="/CoffeeMaker.png "
            loading="eager"
            width={450}
            height={400}
            alt="Appliances"
          />
        </motion.div>
      </div>
    </div>
  );
});

export default Hero;
