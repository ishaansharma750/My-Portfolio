'use client'

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
export const topVarients = {
  closed: { rotate: 0 },
  opened: { rotate: 43, backgroundColor: "rgb(255,255,255)" },
};

export const centerVarients = {
  closed: { opacity: 1 },
  opened: { opacity: 0 },
};
  
export const bottomVarients = {
  closed: { rotate: 0 },
  opened: { rotate: -43, backgroundColor: "rgb(255,255,255)" },
};

export const listVarients = {
  closed: { x: "100vw" },
  opened: {
    x: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
};

export const listItemVarients = {
  closed: { x: -10, opacity: 0 },
  opened: { x: 0, opacity: 1 },
};

export const Animations = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-50"
          animate={{ height: "0vh" }}
          exit={{ height: "100vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <div className="h-24 w-full">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)] w-full ">{children}</div>
      </div>
    </AnimatePresence>
  );
};
