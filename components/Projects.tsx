"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

function Projects() {
  const [first, setfirst] = useState("hidden");
  const [firstt, setfirstt] = useState("hidden");

  return (
    <div className="text-white  py-36">
      <h1 className="text-6xl mb-16 px-20">Featured projects</h1>
      <div className="proj border-t-[1px] border-zinc-500">
        <div className="flex gap-10 justify-center relative items-center pt-20 px-20 ">
          <div className="absolute top-[45%] left-[40%] h-10 bg-black -translate-y-[50%] -translate-x-[50%]">
            <motion.div
              onMouseEnter={() => setfirst("visible")}
              onMouseLeave={() => setfirst("hidden")}
              className={`absolute ${first}    font-extrabold text-green-600 text-[7vw]`}
            >
              FYDE
            </motion.div>
            <motion.div
              onMouseEnter={() => setfirstt("visible")}
              onMouseLeave={() => setfirstt("hidden")}
              className={`absolute ${firstt}   font-extrabold text-green-600 text-[7vw]`}
            >
              VISE
            </motion.div>
          </div>

          <div
            onMouseEnter={() => {
              setfirst("visible");
            }}
            onMouseLeave={() => setfirst("hidden")}
            className="left w-1/2 gap-10  "
          >
            <span className="flex items-center gap-3 mb-5">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <h3>FYDE</h3>
            </span>
            <motion.img alt="" width={100} height={100}
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              className="left rounded-2xl w-full"
            ></motion.img>
          </div>
          <div
            onMouseEnter={() => {
              setfirstt("visible");
            }}
            onMouseLeave={() => setfirstt("hidden")}
            className="right w-1/2 gap-10 "
          >
            <span className="flex items-center gap-3 mb-5">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <h3>VISE</h3>
            </span>
           
            <motion.img
              width={100}
              height={100}
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              className="right rounded-2xl w-full border-[1px] border-zinc-400 "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
