import Link from "next/link"
import { MdOutlineLightMode } from "react-icons/md"
import {useRef} from "react"

const Intro = ({dark, setDark, visDiv,setVisDiv, introRef, aboutOffset}) => {
    const handleDarkMode = () => {
    setDark(!dark)
    console.log(dark)
  }
  const handleVisDiv = () => {
    setVisDiv(true)
    console.log(visDiv)
  }
  
  const smoothScroll = () => {
      window.scrollTo({
          top: aboutOffset, 
          left:0, 
          behavior: "smooth"})
}
  
    return (
        <>
        <div ref={introRef} id="Intro" className="flex flex-col text-center px-10 h-screen items-center justify-center gap-16 z-10">
            <div className={`text-5xl font-bold ${dark ? "text-teal-300": "text-slate-900"}`}>Welcome to my portifolio website</div>
            
                <button onClick={() => smoothScroll()} className={`p-4 rounded-lg hover:bg-opacity-40 transition ease-in-out duration-200 font-black text-lg cursor-none ${dark ? "bg-teal-300 text-slate-900 hover:text-slate-50": "bg-slate-900 text-slate-50 hover:text-slate-900"}`}>Find out more</button>
          
        </div>
        <MdOutlineLightMode onClick={handleDarkMode} className="absolute top-4 right-4 text-xl z-20 hover:fill-teal-300 hover:scale-150 transition duration-200 ease-in-out peer"/>
        <div id="mouse" className="h-8 w-8 rounded-full fixed top-0 left-0 bg-inherit border-8 border-slate-400 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out z-0 peer-hover:opacity-50">
      </div>
      </>
    )
}


export default Intro