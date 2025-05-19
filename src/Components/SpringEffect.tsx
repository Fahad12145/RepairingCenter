'use client'
import React from 'react';
import { motion } from 'framer-motion';

/**
 *
 * @returns {JSX.Element}
 */

const SpringEffect = ({
  children,
}: {
  children: JSX.Element | React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default SpringEffect;
