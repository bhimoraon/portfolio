import React from 'react'

function page() {
  return (
    <div className='flex h-[200vw] w-full'>
      <div className="w-1/2 bg-red-400 h-[200vw]">
        <h1 className='text-6xl'>hekkkko</h1>
      </div>
      <div data-scroll data-scroll-speed=".3" className="w-1/2 bg-white h-[200vw]">
      <h1 className='text-6xl'>hekkkko</h1>
      </div>
      

    </div>
  )
}

export default page