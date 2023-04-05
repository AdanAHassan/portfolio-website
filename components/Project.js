import {SiTailwindcss, SiReact, SiNextdotjs, SiMaterialui} from "react-icons/si"
import {AiFillGithub, AiFillPlayCircle} from "react-icons/ai"
import {BsFillArrowDownCircleFill} from "react-icons/bs"
import {TbApi} from "react-icons/tb"
import Image from "next/image"
import Link from "next/link"

const Project = ({dark, projectRef, contactOffset}) => {
    
    const smoothScrollContact = () => {
      window.scrollTo({
          top: contactOffset, 
          left:0, 
          behavior: "smooth"})
    }
      const smoothScrollIntro = () => {
      window.scrollTo({
          top: 0, 
          left:0, 
          behavior: "smooth"})
}


const projectData = [
    {
        title: "Trip Advisor",
        subtitle: "I created a clone of the Trip Advisor homepage",
        next: false,
        react: true,
        tailwind: true,
        mui: false,
        api: false,
        demo: "https://adanahassan.github.io/trip-adviser",
        project: false,
        source: "https://github.com/AdanAHassan/trip-adviser",
        image: "/Screenshots/TripAdviser.png"
    },
    {
        title: "AWOIAF Wiki",
        subtitle: "I redesigned the AWOIAF wiki page using an example article with hopes to redesign more pages on this site",
        next: true,
        react: true,
        tailwind: true,
        mui: false,
        api: false,
        demo: "https://adanahassan.github.io/house-frey",
        project: false,
        source: "https://github.com/AdanAHassan/house-frey",
        image: "/Screenshots/LannisterWiki.png"
    },
    {
        title: "Character Filter",
        subtitle: "I created a search for ASOIAF POV characters with hopes to expand the JSON database to also include non POV characters",
        next: false,
        react: true,
        tailwind: false,
        mui: true,
        api: false,
        demo: "https://adanahassan.github.io/asoiaf-character",
        project: false,
        source: "https://github.com/AdanAHassan/asoiaf-character",
        image: "/Screenshots/CharacterCard.png"
    },
    {
        title: "Portfolio",
        subtitle: "I created a portfolio to display my projects",
        next: true,
        react: true,
        tailwind: true,
        mui: false,
        api: false,
        demo: "",
        project: true,
        source: "https://github.com/AdanAHassan/portfolio-website",
        image: "/Screenshots/PortfolioSite.png"
    },
    {
        title: "JSON Server",
        subtitle: "I built and deployed a JSON server to store data that is used in the Character Filter and AWOIAF Wiki projects",
        next: false,
        react: false,
        tailwind: false,
        mui: false,
        api: true,
        demo: "https://copper-chipmunk-gear.cyclic.app/",
        project: false,
        source: "https://github.com/AdanAHassan/ac-api",
        image: "/Screenshots/JSONServer.png"
    }
]
    
  return (
    <div ref={projectRef} id="Projects" className="relative flex flex-col justify-start pt-20 p-6 gap-6 min-h-screen overflow-visible">
      <div className="text-2xl">Projects</div>
      <div className={`flex flex-row h-full md:flex-row flex-wrap pt-6 pb-12 gap-6 rounded-xl
         transition ease-in-out duration-1000 justify-center`}>
        { 
        projectData.map((item, index) => (
        
         <div className={`flex flex-col items-center hover:cursor-default relative h-44 md:h-60 aspect-video mb-12`}>
            <div className="absolute top-0 h-full w-full z-10">
                <Image 
                    src={item.image}
                    height="600"
                    width="800"
                    className="h-full w-full object-cover object-top"
                />
            </div>
            <div className={`flex flex-col justify-between items-center text-center z-20 text-transparent p-2 md:p-4 h-full w-full ${ dark ? "bg-slate-900/75 hover:bg-slate-800 hover:text-slate-100 shadow-[0_0_15px_-3px_rgb(241,245,249)]" :  "bg-slate-100/75 hover:bg-slate-400 hover:text-slate-900 shadow-[0_0_15px_-3px_rgb(15,23,42)] backdrop-brightness-50" } hover:shadow-none transition ease-in-out duration-500`}>
                <div className={`text-xl md:text-2xl font-medium ${ dark ? "text-slate-100" : "text-black"} `}>{item.title}</div>
                <div className="text-sm md:text-lg">{item.subtitle}</div>
                <div className={`flex flex-row gap-3 text-xl md:text-3xl scale-[1.25] ${ dark ? "text-slate-50 hover:text-teal-300" : "text-slate-900 hover:text-teal-50" } transition ease-in-out duration-200`}>
                    {item.next && <SiNextdotjs />}
                    {item.react && <SiReact />}
                    {item.tailwind && <SiTailwindcss/>}
                    {item.mui && <SiMaterialui />}
                    {item.api && <TbApi />}
                </div>
                <div className="flex flex-row w-full justify-between text-md md:text-xl">
                    {
                    item.project
                        ?
                    <div onClick={() => smoothScrollIntro()} className={`flex flex-row items-center gap-1 ${ dark ? "hover:text-teal-300" : "hover:text-slate-50" } transition ease-in-out duration-200 `}>
                        <div>Live Demo</div>
                        <AiFillPlayCircle />
                    </div>
                        :
                    <Link href={item.demo} className={`flex flex-row items-center gap-1 ${ dark ? "hover:text-teal-300" : "hover:text-slate-50" } transition ease-in-out duration-200 `} target="_blank">
                        <div>Live Demo</div>
                        <AiFillPlayCircle />
                    </Link>
                    }
                    <Link href={item.source} className={`flex flex-row items-center gap-1 ${ dark ? "hover:text-teal-300" : "hover:text-slate-50" } transition ease-in-out duration-200 `} target="_blank">
                        <div>Source code</div>
                        <AiFillGithub />
                    </Link>
                </div>
            </div>
        </div>
             ))}
             
        <div onClick={() => smoothScrollContact()} className="text-3xl absolute p-4 bottom-0 flex flex-row justify-center hover:animate-[bounce_1s_ease-in-out_infinite]" >
            <BsFillArrowDownCircleFill className="hover:fill-teal-300"/>
        </div>
      </div>
    </div>
  )
}

export default Project
