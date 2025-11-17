import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <>
      <main className="m-12 animate-[slideIn_0.5s_ease-out_forwards]">

       
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-3 justify-center items-center max-w-5xl">
            <h1 className="text-xl lg:text-2xl text-white font-extrabold font-[Poppins]">ABOUT ME</h1>

            <p className="text-white text-base tracking-wide font-inter">
              I'm a Nigerian-based web developer focused on crafting clean and 
              user-friendly experiences. I’m really passionate about building 
              responsive and interactive websites. I don’t just build — I genuinely 
              love what I do, and nothing gives me more joy than seeing my work 
              come to life.
            </p>

            <p className="text-white text-base tracking-wide font-inter">
              One of my goals in life is to be of service to humanity by improving 
              the lives of the people around me and people all over the world.
                 <Link href="/projects">   <button
            className=" cursor-pointer font-bold transition-all duration-200 px-5 py-2.5 rounded-full bg-yellow-400 border border-transparent  flex items-center  text-[15px]  text-black  hover:bg-yellow-300  hover:text-yellow-900  hover:border-yellow-400 active:scale-95 group mt-1.5  animate-[slideIn_1.5s_ease-out_forwards] "
          >
            See my work
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
             
            </p>
          </div>
        </div>

        
        <div className="mt-7">
          <h2 className="text-center text-xl lg:text-2xl text-white font-extrabold font-[Poppins]">MY SKILLS</h2>

          <div className="flex flex-row flex-wrap gap-7 justify-center items-center mt-3">

           
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(#facc15_95%,#333_0)]"></div>
              <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center text-white font-bold">
                95%
              </div>
              <p className="text-white relative top-21 text-center">HTML</p>
            </div>

           
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(#facc15_91%,#333_0)]"></div>
              <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center text-white font-bold">
                91%
              </div>
              <p className="text-white relative top-21 text-center">CSS</p>
            </div>

           
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(#facc15_75%,#333_0)]"></div>
              <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center text-white font-bold">
                75%
              </div>
              <p className="text-white relative top-21 text-center">JAVASCRIPT</p>
            </div>

           
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(#facc15_92%,#333_0)]"></div>
              <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center text-white font-bold">
                92%
              </div>
              <p className="text-white relative top-21 text-center">TAILWIND</p>
            </div>

            
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(#facc15_80%,#333_0)]"></div>
              <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center text-white font-bold">
                80%
              </div>
              <p className="text-white relative top-21 text-center">REACT</p>
            </div>

           
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(#facc15_95%,#333_0)]"></div>
              <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center text-white font-bold">
                95%
              </div>
              <p className="text-white relative top-22 text-center">NEXT JS</p>
            </div>

           
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(#facc15_50%,#333_0)]"></div>
              <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center text-white font-bold">
                50%
              </div>
              <p className="text-white relative top-22 text-center">SUPABASE</p>
            </div>

           
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(#facc15_98%,#333_0)]"></div>
              <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center text-white font-bold">
                98%
              </div>
              <p className="text-white relative top-22 text-center">GITHUB</p>
            </div>

          </div>
          <div className = "text-white text-center mt-15 ">
            <h3 className = "text-xl lg:text-2xl text-white font-extrabold font-[Poppins]">PERSONALITY TRAITS</h3>

            <ul className = "text-base tracking-wide font-inter flex flex-col gap-1 mt-2.5">
                <li>Fast learner</li>
                <li>Creative thinker</li>
                <li>Problem Solver</li>
                <li>Calm under pressure</li>
            </ul>

          </div>
        </div>

      </main>
    </>
  );
};

export default About;
