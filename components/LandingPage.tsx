import { motion } from "framer-motion";
import React from "react";
import { FaArrowDown } from "react-icons/fa6"; 

function LandingPage(prop:any) {
  return (
    <main data-scroll data-scroll-section data-scroll-speed= '-.7' className="w-full h-screen text-black ">
      <div className="maintext py-52 uppercase text-8xl tracking-tighter lending-none px-20 font-extrabold">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className=" flex ">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "5vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[5vw] h-[4vw]  relative top-[0.3vw] rounded bg-red-400"
                ></motion.div>
              )}
              <h1>{item}</h1>
            </div>
          
          );
        })}
      </div>
      <h1>{prop.bhim.name}</h1>
      <div className="border-t-[1px] border-zinc-700 "></div>
      <div className="flex justify-between px-20 py-7">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item) => (
          <p className="font-light tracking-tight text-lg leading-none">
            {item}
          </p>
        ))}
        <span className="flex items-center gap-2">
          <button className="rounded-full border-[1px] border-zinc-00 px-4 py-2 uppercase">
            start the project
          </button>
          <div className="rounded-full border-[1px] w-10 h-10 flex justify-center items-center rotate-[-135deg]">
            <FaArrowDown />
          </div>
        </span>
      </div>

    </main>
  );
}

export default LandingPage;
