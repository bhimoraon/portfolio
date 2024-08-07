import React from "react";
import OneEye from "./ui/OneEye";

function Eyes() {
  return ( <div className="overflow-hidden" >
    <div data-scroll data-scroll-section data-scroll-speed="-.7" className="eyes ">
      <div className='h-screen bg-cover relative bg-center w-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className=" absolute flex gap-10 -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 ">
          <OneEye/>
          <OneEye/>
            
        </div>
      </div>
    </div>
  </div>
    
  );
}

export default Eyes;
