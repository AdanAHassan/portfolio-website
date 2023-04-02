import {SiTailwindcss, SiReact, SiNextdotjs, SiMaterialui} from "react-icons/si"
import {AiFillGithub, AiFillPlayCircle} from "react-icons/ai"
import {BsFillArrowDownCircleFill} from "react-icons/bs"
import Image from "next/image"
import Link from "next/link"
import TripAdvImg from "../public/Screenshots/TripAdviser.png"
import LannisterImg from "../public/Screenshots/LannisterWiki.png"
import CharacterImg from "../public/Screenshots/CharacterCard.png"
import PortoflioImg from "../public/Screenshots/PortifolioSite.png"

const Project = ({dark, projectRef, contactOffset}) => {
    
    const smoothScroll = () => {
      window.scrollTo({
          top: contactOffset, 
          left:0, 
          behavior: "smooth"})
    }
    
  return (
    <div ref={projectRef} id="Projects" className="relative flex flex-col justify-start pt-20 p-6 gap-6 min-h-screen overflow-visible">
      <div className="text-2xl">Projects</div>
      <div className={`flex flex-row h-full md:flex-row flex-wrap py-6 gap-6 rounded-xl
         transition ease-in-out duration-1000 justify-center`}>

        <div className={`flex flex-col items-center hover:cursor-default relative h-44 md:h-60 aspect-video`}>
            <div className="absolute top-0 h-full w-full z-10">
                <Image 
                src={TripAdvImg}
                height=""
                    width=""
                    className="h-full w-full object-cover object-top"
                />
            </div>
          <div className={`flex flex-col justify-between items-center text-center z-20 text-transparent p-2 md:p-4 h-full w-full ${ dark ? "bg-slate-900/75 hover:bg-slate-800 hover:text-slate-100 shadow-[0_0_15px_-3px_rgb(241,245,249)]" :  "bg-slate-100/75 hover:bg-slate-400 hover:text-slate-900 shadow-[0_0_15px_-3px_rgb(15,23,42)] backdrop-brightness-50" } hover:shadow-none transition ease-in-out duration-500`}>
            <div className={`text-xl md:text-2xl font-medium ${ dark ? "text-slate-100" : "text-black"} `}>Trip Advisor</div>
            <div className="text-sm md:text-lg">I recreated the Trip Advisor homepage</div>
            <div className={`flex flex-row gap-3 text-xl md:text-3xl scale-[1.25] ${ dark ? "text-slate-50 hover:text-teal-300" : "text-slate-900 hover:text-teal-50" } transition ease-in-out duration-200`}>
                <SiReact />
                <SiTailwindcss/> 
            </div>
            <div className="flex flex-row w-full justify-between text-md md:text-xl">
                <Link href="https://adanahassan.github.io/trip-adviser/" className={`flex flex-row items-center gap-1 ${ dark ? "hover:text-teal-300" : "hover:text-slate-50" } transition ease-in-out duration-200 `} target="_blank">
                    <div>Live Demo</div>
                    <AiFillPlayCircle />
                </Link>
                <Link href="https://github.com/AdanAHassan/trip-adviser" className={`flex flex-row items-center gap-1 ${ dark ? "hover:text-teal-300" : "hover:text-slate-50" } transition ease-in-out duration-200 `} target="_blank">
                    <div>Source code</div>
                    <AiFillGithub />
                </Link>
            </div>
          </div>
        </div>
        
        
         <div className={`flex flex-col items-center hover:cursor-default relative h-44 md:h-60 aspect-video`}>
            <div className="absolute top-0 h-full w-full z-10">
                <Image 
                    src={LannisterImg}
                    height=""
                    width=""
                    className="h-full w-full object-cover object-top"
                />
            </div>
            <div className={`flex flex-col justify-between items-center text-center z-20 text-transparent p-2 md:p-4 h-full w-full ${ dark ? "bg-slate-900/75 hover:bg-slate-800 hover:text-slate-100 shadow-[0_0_15px_-3px_rgb(241,245,249)]" :  "bg-slate-100/75 hover:bg-slate-400 hover:text-slate-900 shadow-[0_0_15px_-3px_rgb(15,23,42)] backdrop-brightness-50" } hover:shadow-none transition ease-in-out duration-500`}>
                <div className={`text-xl md:text-2xl font-medium ${ dark ? "text-slate-100" : "text-black"} `}>AWOIAF Wiki</div>
                <div className="text-sm md:text-lg">I redesigned the AWOIAF wiki page using an example article with hopes to redesign more pages on this site</div>
                <div className={`flex flex-row gap-3 text-xl md:text-3xl scale-[1.25] ${ dark ? "text-slate-50 hover:text-teal-300" : "text-slate-900 hover:text-teal-50" } transition ease-in-out duration-200`}>
                    <SiNextdotjs />
                    <SiReact />
                    <SiTailwindcss/> 
                </div>
                <div className="flex flex-row w-full justify-between text-md md:text-xl">
                    <Link href="https://adanahassan.github.io/house-frey" className={`flex flex-row items-center gap-1 ${ dark ? "hover:text-teal-300" : "hover:text-slate-50" } transition ease-in-out duration-200 `} target="_blank">
                        <div>Live Demo</div>
                        <AiFillPlayCircle />
                    </Link>
                    <Link href="https://github.com/AdanAHassan/house-frey" className={`flex flex-row items-center gap-1 ${ dark ? "hover:text-teal-300" : "hover:text-slate-50" } transition ease-in-out duration-200 `} target="_blank">
                        <div>Source code</div>
                        <AiFillGithub />
                    </Link>
                </div>
            </div>
        </div>
        
        <div className={`flex flex-col items-center hover:cursor-default relative h-44 md:h-60 aspect-video`}>
            <div className="absolute top-0 h-full w-full z-10">
                <Image 
                    src={CharacterImg}
                    height=""
                    width=""
                    className="h-full w-full object-cover object-top"
                />
            </div>
            <div className={`flex flex-col justify-between items-center text-center z-20 text-transparent p-2 md:p-4 h-full w-full ${ dark ? "bg-slate-900/75 hover:bg-slate-800 hover:text-slate-100 shadow-[0_0_15px_-3px_rgb(241,245,249)]" :  "bg-slate-100/75 hover:bg-slate-400 hover:text-slate-900 shadow-[0_0_15px_-3px_rgb(15,23,42)] backdrop-brightness-50" } hover:shadow-none transition ease-in-out duration-500`}>
                <div className={`text-xl md:text-2xl font-medium ${ dark ? "text-slate-100" : "text-black"} `}>Character Filter</div>
                <div className="text-sm md:text-lg">I created a search for ASOIAF POV characters with hopes to expand the JSON database to also include non POV characters</div>
                <div className={`flex flex-row gap-3 text-xl md:text-3xl scale-[1.25] ${ dark ? "text-slate-50 hover:text-teal-300" : "text-slate-900 hover:text-teal-50" } transition ease-in-out duration-200`}>
                    <SiMaterialui />
                    <SiReact />
                </div>
                <div className="flex flex-row w-full justify-between text-md md:text-xl">
                    <Link href="https://adanahassan.github.io/asoiaf-character/" className={`flex flex-row items-center gap-1 ${ dark ? "hover:text-teal-300" : "hover:text-slate-50" } transition ease-in-out duration-200 `} target="_blank">
                        <div>Live Demo</div>
                        <AiFillPlayCircle />
                    </Link>
                    <Link href="https://github.com/AdanAHassan/asoiaf-character" className={`flex flex-row items-center gap-1 ${ dark ? "hover:text-teal-300" : "hover:text-slate-50" } transition ease-in-out duration-200 `} target="_blank">
                        <div>Source code</div>
                        <AiFillGithub />
                    </Link>
                </div>
            </div>
        </div>
        
        
        <div className={`flex flex-col items-center hover:cursor-default relative h-44 md:h-60 aspect-video mb-12`}>
            <div className="absolute top-0 h-full w-full z-10">
                <Image 
                    src={PortoflioImg}
                    height=""
                    width=""
                    className="h-full w-full object-cover object-top"
                />
            </div>
            <div className={`flex flex-col justify-between items-center text-center z-20 text-transparent p-2 md:p-4 h-full w-full ${ dark ? "bg-slate-900/75 hover:bg-slate-800 hover:text-slate-100 shadow-[0_0_15px_-3px_rgb(241,245,249)]" :  "bg-slate-100/75 hover:bg-slate-400 hover:text-slate-900 shadow-[0_0_15px_-3px_rgb(15,23,42)] backdrop-brightness-50" } hover:shadow-none transition ease-in-out duration-500`}>
                <div className={`text-xl md:text-2xl font-medium ${ dark ? "text-slate-100" : "text-black"} `}>Portoflio</div>
                <div className="text-sm md:text-lg">I created a portifolio to display my projects</div>
                <div className={`flex flex-row gap-3 text-xl md:text-3xl scale-[1.25] ${ dark ? "text-slate-50 hover:text-teal-300" : "text-slate-900 hover:text-teal-50" } transition ease-in-out duration-200`}>
                    <SiNextdotjs />
                    <SiReact />
                    <SiTailwindcss/> 
                </div>
                <div className="flex flex-row w-full justify-between text-md md:text-xl">
                    <Link href="#Intro" className={`flex flex-row items-center gap-1 ${ dark ? "hover:text-teal-300" : "hover:text-slate-50" } transition ease-in-out duration-200 `}>
                        <div>Live Demo</div>
                        <AiFillPlayCircle />
                    </Link>
                    <Link href="" className={`flex flex-row items-center gap-1 ${ dark ? "hover:text-teal-300" : "hover:text-slate-50" } transition ease-in-out duration-200 `} target="_blank">
                        <div>Source code</div>
                        <AiFillGithub />
                    </Link>
                </div>
            </div>
        </div>
        <div onClick={() => smoothScroll()} className="text-3xl absolute w-full bottom-4 flex flex-row justify-center">
            <BsFillArrowDownCircleFill className="hover:fill-teal-300"/>
        </div>
        
      </div>
    </div>
  )
}

export default Project


// bg slate-900
// title 
// text
// icons
