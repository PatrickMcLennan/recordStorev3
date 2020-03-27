import React, { FC } from "react";
import { motion } from "framer-motion";

interface IProps {
  slide?: number;
  slideUp?: number;
}

const MountTransition: FC<IProps> = ({ children, slide = 0, slideUp = 0 }) => (
  <motion.main
    animate={{ opacity: 1, x: 0, y: 0 }}
    exit={{ opacity: 0, x: slide, y: slideUp }}
    initial={{ opacity: 0, x: slide, y: slideUp }}
  >
    {children}
  </motion.main>
);

export default MountTransition;
