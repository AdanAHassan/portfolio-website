import { SiTailwindcss, SiReact, SiNextdotjs, SiMaterialui, SiPuppeteer, SiNodedotjs, SiTypescript, SiDotnet, SiMicrosoftsqlserver } from "react-icons/si"
import { AiFillGithub, AiFillPlayCircle } from "react-icons/ai"
import { BsFillArrowDownCircleFill } from "react-icons/bs"
import { FaAngular } from "react-icons/fa";
import {TbApi} from "react-icons/tb"
import Image from "next/image"
import Link from "next/link"
import Screenshots from "../public/screenshots/Screenshots.js"

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
      title: "Social Media Dashboard",
      subtitle: "I built a full stack dashboard as a demo of a real world usecase",
      dotnet: true,
      mssql: true,
      typescript: true,
      angular: true,
      tailwind: true,
      source: "https://github.com/AdanAHassan/SMDash",
      image: "SMDashboard"
    },
    {
      title: "Liverpool House",
      subtitle: "I built the website based on a design I liked on dribble",
      next: true,
      typescript: true,
      react: true,
      tailwind: true,
      demo: "https://liverpool-house.vercel.app/",
      source: "https://github.com/AdanAHassan/liverpool-house",
      image: "LiverpoolHouse"
    },
    {
      title: "Webscraper",
      subtitle: "I built a webscraper using Puppeteer for my wiki project saving me hundreds of hours in development",
      node: true,
      puppeteer: true,
      demo: "https://adanahassan.github.io/wiki",
      source: "https://github.com/AdanAHassan/wiki-scraper",
      image: "Webscraper"
    },
    {
      title: "Trip Advisor",
      subtitle: "I created a clone of the Trip Advisor homepage",
      react: true,
      tailwind: true,
      demo: "https://adanahassan.github.io/trip-advisor",
      source: "https://github.com/AdanAHassan/trip-advisor",
      image: "TripAdvisor"
    },
    {
      title: "AWOIAF Wiki",
      id: "AWOIAF-Wiki",
      subtitle: "I redesigned the AWOIAF wiki page using an example article with hopes to redesign more pages on this site",
      next: true,
      react: true,
      tailwind: true,
      demo: "https://adanahassan.github.io/wiki",
      source: "https://github.com/AdanAHassan/wiki",
      image: "LannisterWiki"
    },
    {
      title: "Character Filter",
      id: "Character-Filter",
      subtitle: "I created a search for ASOIAF POV characters with hopes to expand the JSON database to also include non POV characters",
      react: true,
      mui: true,
      demo: "https://adanahassan.github.io/asoiaf-character",
      source: "https://github.com/AdanAHassan/asoiaf-character",
      image: "CharacterCard"
    },
    {
      title: "Portfolio",
      id: "Portfolio",
      subtitle: "I created a portfolio to display my projects",
      next: true,
      react: true,
      demo: "",
      project: true,
      source: "https://github.com/AdanAHassan/portfolio-website",
      image: "PortfolioSite"
    },
    {
      title: "JSON Server",
      id: "JSON-Server",
      subtitle: "I built and deployed a JSON server to store data that is used in the Character Filter and AWOIAF Wiki projects",
      api: true,
      demo: "https://copper-chipmunk-gear.cyclic.app/",
      source: "https://github.com/AdanAHassan/ac-api",
      image: "JSONServer"
    }
]

    
  return (
    <div ref={projectRef} id="Projects" className="relative flex flex-col justify-start pt-20 p-6 gap-6 min-h-screen overflow-visible">
      <div className="text-2xl">Projects</div>
      <div className={`flex flex-row h-full md:flex-row flex-wrap pt-6 pb-12 gap-6 rounded-xl
         transition ease-in-out duration-1000 justify-center`}>
        { 
        projectData.map((item, index) => (
        
         <div key={`${item.title}-${index}`} className={`flex flex-col items-center hover:cursor-default relative h-44 md:h-60 aspect-video mb-12`}>
            <div className="absolute top-0 h-full w-full z-10">
                <Image 
                    src={Screenshots[item.image]}
                    height="600"
                    width="800"
                    className="h-full w-full object-cover object-top"
                />
            </div>
            <div className={`flex flex-col justify-between items-center text-center z-20 text-transparent p-2 md:p-4 h-full w-full ${ dark ? "bg-slate-900/75 hover:bg-slate-800 hover:text-slate-100 shadow-[0_0_15px_-3px_rgb(241,245,249)]" :  "bg-slate-100/75 hover:bg-slate-400 hover:text-slate-900 shadow-[0_0_15px_-3px_rgb(15,23,42)] backdrop-brightness-50" } hover:shadow-none transition ease-in-out duration-500`}>
                <div className={`text-xl md:text-2xl font-medium ${ dark ? "text-slate-100" : "text-black"} `}>{item.title}</div>
                <div className="text-sm md:text-lg">{item.subtitle}</div>
                <div className={`flex flex-row gap-3 text-xl md:text-3xl scale-[1.25] ${ dark ? "text-slate-50 hover:text-teal-300" : "text-slate-900 hover:text-teal-50" } transition ease-in-out duration-200`}>
                  {item.angular && <FaAngular />}
                  {item.dotnet && <SiDotnet />}
                  {item.mssql && <SiMicrosoftsqlserver />}
                  {item.next && <SiNextdotjs />}
                  {item.react && <SiReact />}
                  {item.tailwind && <SiTailwindcss/>}
                  {item.mui && <SiMaterialui />}
                  {item.api && <TbApi />}
                  {item.typescript && <SiTypescript />}
                  {item.node && <SiNodedotjs />}
                  {item.puppeteer && <SiPuppeteer />}
                </div>
                <div className="flex flex-row w-full justify-between text-md md:text-xl">
                    {
                    item.project | !item.demo
                        ?
                    <div onClick={item.project ? () => smoothScrollIntro() : null} className={`flex flex-row items-center gap-1 ${ dark ? "hover:text-teal-300" : "hover:text-slate-50" } transition ease-in-out duration-200 `}>
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
