import { BsFillArrowDownCircleFill } from "react-icons/bs"

const About = ({projectOffset}) => {
    
    const smoothScroll = () => {
      window.scrollTo({
          top: projectOffset, 
          left:0, 
          behavior: "smooth"})
    }

  return (
    <div id="About" className="relative flex flex-col items-center w-screen h-screen snap-center">
      <div className="flex flex-col text-center h-screen pb-40 w-4/5 lg:w-2/5 justify-center items-center">
        <h3 className="text-3xl py-4 text-teal-300 font-bold">About Me</h3>
        <p className="pb-2">Hi, I am a full stack developer based in London, England.</p>
        <p>My latest <a className="text-teal-300 text-medium hover:text-green-500 transition duration-500" href="https://github.com/AdanAHassan/SMDash" target="_blank">project</a> was a full stack dashboard that has a backend made using a .NET web API that uses a SQL Server database, and a frontend made using Angular, Tailwind and ng-charts</p>
      </div>
      <div onClick={() => smoothScroll()} className="text-3xl absolute p-4 bottom-0 flex flex-row justify-center hover:animate-[bounce_1s_ease-in-out_infinite]" >
        <BsFillArrowDownCircleFill className="hover:fill-teal-300"/>
      </div>
    </div>
  )
}

export default About
