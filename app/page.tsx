import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className = "text-white flex flex-col">
        <h1 className = "mt-10 ml-4 text-3xl font-serif ">Hello!</h1>
        <h2 className = "mt-2 ml-3 text-xl font-[Poppins]">I'm <span >Itule Godstime</span> </h2>
        <p className = "mt-2 ml-3 text-xl font-[DM_sans]">AKA The Alchemist. I turn ideas and imaginations into reality with web development</p>
        <div className = "mx-auto">  
          <Image 
          src = "/suit-profile.jpg"
          alt = "profile pic"
          width ={200}
          height ={180}
          className = "rounded-xl my-4 border border-gray-400 "
        />

        </div>
        
      </div>
      <div>
        <h3 className = "text-white">Skills</h3>
        <ul className = "text-white">
          <li>HTML </li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Tailwind CSS</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Supabase</li>
        </ul>
      </div>
    </>
  );
}
