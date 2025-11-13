"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//nav icons
import { HomeIcon, InformationCircleIcon,  FolderIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Hamburger from "hamburger-react";



const Navbar = () => {

    const [Open, setOpen] = useState(false);

    return ( 
        <>
            <div>
                <nav className = "text-white  flex flex-row justify-between items-center">
                    <div className = "flex flex-row items-center gap-2">
                        <div>
                            <Image
                                src = "/suit-profile.jpg"
                                alt = "my profile logo"
                                width = {30}
                                height = {30}
                                quality = {100}
                                className = "rounded-full border-cyan-4 shadow-lg"
                            />
                        </div>
                        <div className ="name">
                            <h1 className = "text-xl ">Godstime</h1>
                        </div>
                    </div>

                    <div className = "">
                        <div className = "md:hidden"><Hamburger  toggled={Open} toggle={setOpen}/></div>
                        
                        {Open && <div className = {`md:hidden  flex flex-col gap-6 postion absolute  left-1/2 bg-gray-900 w-full rounded-b-lg shadow-lg mt-2 p-8 translate-x-[-50%]`}>
                        <Link href="/" className = "hover:text-amber-200 border-r-4 hover:border-amber-300  transition-colors duration-200 flex gap-4 "><HomeIcon className = "w-6 h-6 cursor-pointer"/ >Home</Link>
                        <Link href="" className = "hover:text-amber-200 transition-colors duration-200 flex gap-4"><InformationCircleIcon className = "w-6 h-6 cursor-pointer"/>About</Link>
                        <Link href="" className = "hover:text-amber-200  transition-colors duration-200 flex gap-4"><FolderIcon className = "w-6 h-6 cursor-pointer"/>Projects</Link>
                        <Link href="" className = "hover:text-amber-200  transition-colors duration-200 flex gap-4"><EnvelopeIcon className = "w-6 h-6 cursor-pointer"/>Contact</Link>
                    </div>
                    }
                    <div className =  " hidden md:flex md:flex-row md:gap-8">
                        <Link href="/" className = "flex gap-2 "><HomeIcon className = "w-6 h-6 cursor-pointer"/ >Home</Link>
                        <Link href="" className = "flex gap-2"><InformationCircleIcon className = "w-6 h-6 cursor-pointer"/>About</Link>
                        <Link href="" className = "flex gap-2"><FolderIcon className = "w-6 h-6 cursor-pointer"/>Projects</Link>
                        <Link href="" className = "flex gap-2"><EnvelopeIcon className = "w-6 h-6 cursor-pointer"/>Contact</Link>
                    </div>
                    </div>
                    
                </nav>
            </div>
        </>
     );
}
 
export default Navbar; 