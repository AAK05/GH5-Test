import Image from "next/image";
// import TypingEffect from "./ComingSoon";


export default function Home() {

  
  return (
    <main className="min-h-screen bg-black relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-row items-center mb-8">
          <img src="logo.png" alt="Logo" className="h-20 mb-4" />
          <div className="flex flex-col text-left">
            <h1 className="text-white mb-0 text-6xl font-extrabold font-pptelegraf">
              Garuda Hacks 5.0
            </h1>
            <h2 className="text-white mt-0 text-3xl font-light font-pptelegraf">
              Empowerment. Innovation. Collaboration. 
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-white font-pptelegraflight px-8 py-4 border border-white bg-black-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
          Coming Soon 
          </button>
        </div>
      </div>
      <div className="absolute bottom-864 top-0 left-0 right-798">
        <Image 
          src="/gradient.png"
          width={798}
          height={864}
          alt="Picture of the author"
          className="fixed bottom-0 top-0 left-0 right-0"
        />
      </div>
    </main>
  );
}
