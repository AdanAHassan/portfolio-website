import {AiFillGithub, AiOutlineTwitter} from "react-icons/ai"
import { BsFillArrowDownCircleFill } from "react-icons/bs"
import Link from "next/link"

const About = ({projectOffset}) => {
    
    const smoothScroll = () => {
      window.scrollTo({
          top: projectOffset, 
          left:0, 
          behavior: "smooth"})
    }

  return (
    <div id="About" className="relative flex flex-col items-center w-screen h-screen snap-center">
        <div className="flex flex-col text-center h-screen pb-40 w-80 justify-center">
            <div className="text-3xl py-4 text-teal-300 font-bold">About Me</div>
            <div>I am an aspiring web developer based in London.</div>
        </div>
        <div onClick={() => smoothScroll()} className="text-3xl absolute w-full bottom-4 flex flex-row justify-center" >
            <BsFillArrowDownCircleFill className="hover:fill-teal-300"/>
        </div>
      </div>
  )
}

export default About
