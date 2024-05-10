import React from 'react'
import Image from "next/image";

const LandingPage = () => {
  return (
        <main className="min-h-screen bg-black relative overflow-y-clip">
      <div className="absolute top-[40%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col lg:flex-row items-center mb-8">
          <img src="logo.png" alt="Logo" className="h-40 lg:h-24 mb-4 lg:mb-0" />
          <div className="flex flex-col text-left">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-purple-500 to-gray-100 mb-0 text-6xl font-extrabold font-pptelegraf">
              Garuda Hacks 5.0
            </h1>
            <h2 className="text-white mt-0 text-3xl font-light font-pptelegraf">
              Empowerment. Innovation. Collaboration. 
            </h2>
          </div>
        </div>
        <div className="flex justify-center z-10">
          <button className="text-white font-pptelegraflight px-8 py-4 border border-white bg-black-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Coming Soon 
          </button>
        </div>
      </div>


      {/* Background image */}
       <div className="absolute bottom-0 left-0 w-[80%] -translate-x-[40%] lg:w-full lg:-translate-x-[20%] lg:translate-y-[30%] z-0">
        <Image 
          src="/gradient.png"
          width={1197}
          height={1296}
          alt="Gradients"
          className="z-0"
        />
      </div>
      <div className="absolute top-0 right-0 w-[80%] translate-x-[40%] lg:w-full lg:translate-x-[50%] lg:-translate-y-[30%] z-0">
        <Image 
          src="/gradient2.png"
          width={1197}
          height={1296}
          alt="Gradients"
          className="z-0"
        />
      </div>
    </main>
  )
}

export default LandingPage