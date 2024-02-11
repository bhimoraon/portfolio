"use client"
import { motion } from "framer-motion";
import React from "react";


function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full h-[60vh] bg-[#004D43] rounded-t-[1rem] pt-36">
      <div className="border-t-[1px] border-b-[1px] flex  w-[100%] border-zinc-400 leading-none overflow-hidden ">
        <motion.h1
          initial={{ x: "0"}}
          animate={{ x:"-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="uppercase text-[14.5vw]  whitespace-nowrap  font-extrabold tracking-tighter  mt-6 mb-6 "
        >
          we aRe ochi&nbsp;
        </motion.h1>
        
        <motion.h1
          initial={{ x: "0"}}
          animate={{ x:"-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="uppercase text-[14.5vw]   whitespace-nowrap font-extrabold tracking-tighter 
           mt-6 mb-6 "
        >
          we aRe ochi&nbsp;
        </motion.h1>
      
      </div>
    </div>
  );
}

export default Marquee;
