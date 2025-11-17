import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      
      <div className="text-white m-5 flex flex-row flex-wrap justify-center gap-3 lg:gap-[130px] items-center animate-[slideIn_0.5s_ease-out_forwards]">

        <div className="flex flex-col gap-4 justify-center items-center mt-3 max-w-[380px]">
          <h2 className="text-2xl lg:text-3xl text-yellow-400 font-extrabold font-[Poppins] animate-[slideIn_0.7s_ease-out_forwards]">
            - I'M ITULE GODSTIME.
          </h2>

          <h1 className="text-xl lg:text-2xl text-white font-extrabold font-[Poppins] animate-[slideIn_0.9s_ease-out_forwards]">
            WEB DEVELOPER.
          </h1>

          <p className="text-base font-inter tracking-wide text-center animate-[slideIn_1.2s_ease-out_forwards]">
            AKA The Alchemist. I turn ideas and imagination into reality through web development.
          </p>

          <Link href="/about">   <button
            className="
              cursor-pointer
              font-bold
              transition-all
              duration-200
              px-5
              py-2.5
              rounded-full
              bg-yellow-400
              border border-transparent
              flex items-center
              text-[15px]
              text-black
              hover:bg-yellow-300
              hover:text-yellow-900
              hover:border-yellow-400
              active:scale-95
              group
              animate-[slideIn_1.5s_ease-out_forwards]
            "
          >
            More about me
            <ArrowRightCircleIcon
              className="
                w-[34px]
                ml-2
                transition-transform
                duration-300
                ease-in-out
                group-hover:translate-x-[5px]
              "
            />
          </button></Link>
          
        </div>

        
        <div className=" mt-7 animate-[slideIn_2s_ease-out_forwards]">
          <Image
            src="/suit-profile.jpg"
            alt="profile pic"
            width={250}
            height={400}
            className="rounded-4xl my-4 border border-yellow-400 shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]"
          />
        </div>
      </div>

      
      <div className="m-7 flex flex-col gap-3 items-center justify-center animate-[slideIn_2s_ease-out_forwards]">
        <h3 className="text-white text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          <span className="text-yellow-400 text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            S
          </span>
          KILLS
        </h3>

        <ul className="text-white flex flex-row flex-wrap gap-5 relative transform transition-transform duration-700 ease-in-out hover:-translate-y-3 animate-[slideIn_3s_ease-out_forwards]">
          <li className="flex items-center gap-1 relative transform transition-transform duration-700 ease-in-out hover:-translate-y-3">
            <Image
              src="/icons8-html.svg"
              alt="html icon"
              width={30}
              height={30}
              className="sm:w-16 md:w-20 lg:w-28 xl:w-32"
            />
            HTML
          </li>

          <li className="flex items-center gap-1 relative transform transition-transform duration-700 ease-in-out hover:-translate-y-3 animate-[slideIn_2s_ease-out_forwards]">
            <Image
              src="/icons8-javascript.svg"
              alt="javascript icon"
              width={30}
              height={30}
              className="sm:w-16 md:w-20 lg:w-28 xl:w-32"
            />
            Javascript
          </li>

          <li className="flex items-center gap-1 relative transform transition-transform duration-700 ease-in-out hover:-translate-y-3 animate-[slideIn_3s_ease-out_forwards]">
            <Image
              src="/icons8-tailwindcss.svg"
              alt="tailwind icon"
              width={30}
              height={30}
              className="sm:w-16 md:w-20 lg:w-28 xl:w-32"
            />
            Tailwind CSS
          </li>

          <li className="flex items-center gap-1 relative transform transition-transform duration-700 ease-in-out hover:-translate-y-3 animate-[slideIn_3s_ease-out_forwards]">
            <Image
              src="/icons8-react-native.svg"
              alt="react icon"
              width={30}
              height={30}
              className="sm:w-16 md:w-20 lg:w-28 xl:w-32 animate-[spinSlow_15s_linear_infinite] "
            />
            React
          </li>
        </ul>
      </div>
    </>
  );
}
