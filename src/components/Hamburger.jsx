import React from "react";
import { motion } from "framer-motion";

function Hamburger({ show }) {
  return !show ? (
    <div className="flex lg:hidden flex-col w-[50px] gap-2 items-end cursor-pointer">
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: ["100%", "30%", "70%"] }}
        className="bg-black h-1 w-full"></motion.div>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        className="bg-black h-1"></motion.div>
    </div>
  ) : (
    <div className="flex lg:hidden flex-col w-[50px] gap-2 items-end cursor-pointer">
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        className="bg-black h-1"></motion.div>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: 1,
          width: ["100%", "30%", "70%"],
        }}
        className="bg-black h-1 w-full"></motion.div>
    </div>
  );
}

export default Hamburger;
