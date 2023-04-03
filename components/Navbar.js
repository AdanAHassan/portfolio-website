import { MdOutlineLightMode } from "react-icons/md"
import {AiFillGithub, AiFillPlayCircle, AiFillHome} from "react-icons/ai"
import { useState, useEffect } from "react"

const Navbar = ({dark, setDark, visDiv, aboutOffset, projectOffset, contactOffset}) => {
    const handleDarkMode = () => {
    setDark(!dark)
    console.log(dark)
  }
  
    const smoothScrollHome = () => {
      window.scrollTo({
          top: 0, 
          left:0, 
          behavior: "smooth"})
    }
    
    const smoothScrollAbout = () => {
      window.scrollTo({
          top: aboutOffset, 
          left:0, 
          behavior: "smooth"})
    }
    
    const smoothScrollProject = () => {
      window.scrollTo({
          top: projectOffset, 
          left:0, 
          behavior: "smooth"})
    }
    
    const smoothScrollContact = () => {
      window.scrollTo({
          top: contactOffset, 
          left:0, 
          behavior: "smooth"})
    }
    
    
    const [withinIntroBool, setWithinIntroBool] = useState(false)
    const [withinAboutBool, setWithinAboutBool] = useState(false)
    const [withinProjectBool, setWithinProjectBool] = useState(false)
    const [withinContactBool, setWithinContactBool] = useState(false)
    
    if (typeof window !== "undefined") {
            const navChange = () => {
                setWithinIntroBool(window.scrollY >= 0 && window.scrollY < aboutOffset*0.85)
                setWithinAboutBool(window.scrollY >= aboutOffset*0.85 && window.scrollY < projectOffset*0.85)
                setWithinProjectBool(window.scrollY >= projectOffset*0.85 && window.scrollY < contactOffset*0.85)
                setWithinContactBool(window.scrollY >= contactOffset*0.85)
                console.log(withinAboutBool, window.scrollY, aboutOffset, projectOffset, contactOffset)
            }
            window.addEventListener("scroll", navChange)
  }
    
  return (
    <div className={`p-4 border-b-2 fixed w-full backdrop-blur-xl z-50 ${visDiv ? "visible" : "invisible"}`}>
      <div className="flex flex-row justify-between items-center" >
        <div onClick={() => smoothScrollHome()} className={`text-xl hover:text-teal-300 hover:scale-150 transition duration-200 ease-in-out cursor-none ${ withinIntroBool ? "text-teal-300" : "hover:text-teal-400"}`} >
          <AiFillHome/>
        </div>
        <div className="flex flex-row items-center font-medium text-lg md:text-xl gap-4 ">
          <div onClick={() => smoothScrollAbout()} className={` cursor-none ${ withinAboutBool ? "text-teal-300" : "hover:text-teal-400"  }`}>About</div>
          <div onClick={() => smoothScrollProject()} className={` cursor-none ${ withinProjectBool ? "text-teal-300" : "hover:text-teal-400"  }`}>Projects</div>
          <div onClick={() => smoothScrollContact()}  className={` cursor-none ${ withinContactBool ? "text-teal-300" : "hover:text-teal-400"  }`}>Contact</div>
          <MdOutlineLightMode className="hover:fill-teal-300 hover:scale-150 transition duration-200 ease-in-out animate-[pulse_2s_ease-in-out_infinite]" onClick={handleDarkMode} />
        </div>
      </div>
    </div>
  )
}

export default Navbar