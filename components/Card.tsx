
import Image from "next/image";
import React from "react"; 

function Card() {
  return (
    <div className=" w-full h-screen gap-10 flex px-20 pt-36 ">
      <div className="left relative bg-[#004D43] h-[52vh] w-1/2 rounded-2xl flex justify-center items-center border-[1px]">
        <Image className="scale-150 " width={100} height={100}
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt="" 
        />
        <button className="px-4 py-2 border-[1px] text-[#C5E367] border-[#C5E367] absolute left-12  bottom-10 rounded-full">&copy;2019-2022</button>
      </div>
      <div className="right h-[52vh] w-1/2 flex gap-10">
        <div  className="h-full w-full relative bg-[#212121]  rounded-2xl flex justify-center items-center border-[1px]">
          <Image width={100} height={100}
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="px-4 py-2 border-[1px] absolute left-12 bottom-10 text-white rounded-full tracking-tighter">RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="h-full w-full relative bg-[#212121]  rounded-2xl flex justify-center items-center border-[1px]">
          <Image  width={100} height={100}
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="ni pata"
          />
           
          <button className="px-4 py-2 border-[1px] absolute left-12 bottom-10 text-white tracking-tighter rounded-full">BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div> 
    </div>
  );
}

export default Card;
