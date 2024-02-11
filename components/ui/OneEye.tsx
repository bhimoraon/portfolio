"use client"
import React, { useEffect, useState } from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa';

function OneEye() {
    const [rotate,setRotate] = useState(0);
    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
            let x = e.clientX;
            let y = e.clientY;
            let deltaX = x- window.innerWidth/2;
            let deltaY = y- window.innerHeight/2;
            
             var angle = Math.atan2(deltaY,deltaX)* (180/Math.PI);
             setRotate(angle-180)
        })
    })
  return (

    <div className="h-[15vw] w-[15vw] flex justify-center items-center bg-zinc-100 rounded-full">
            <div className="h-3/5 w-3/5 relative bg-zinc-900 rounded-full">
        
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className={`h-6 w-full absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]`}>

              <div  className="h-6 w-6 flex justify-center items-center bg-zinc-100 rounded-full"></div>
                </div>
            </div>
          </div>
  )
}

export default OneEye