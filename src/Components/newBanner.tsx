'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/Context/LanguageContext";

// eslint-disable-next-line react/display-name
const Banner = () => {
    const { language } = useLanguage();
    const { t } = useTranslation();

    return (
        <div className="flex justify-center py-20 max-md:px-5">

            <div className="max-w-screen-md">
                <h1
                    lang="en"
                    className="flex justify-center w-20 py-2 mx-auto my-2 text-2xl font-semibold text-center border-b-4 lg:text-3xl border-b-RepairingCenter-orange"
                >
                    Banner
                </h1>                <div lang="en" className="text-center ">
                    <div className="flex flex-row items-center justify-between gap-10 mt-10 max-md:flex-col-reverse">
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            className="flex justify-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <img
                                    className="shadow-2xl "
                                    loading="lazy"
                                    src='/Images/4.jpeg'
                                    alt="GalleryImages"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
