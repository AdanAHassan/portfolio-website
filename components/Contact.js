import {BsFillArrowUpCircleFill} from "react-icons/bs"

const Contact = ({dark}) => {

    const smoothScroll = () => {
      window.scrollTo({
          top: 0, 
          left:0, 
          behavior: "smooth"})
}
// <div className="mt-2 bg-teal-300 px-4 py-2 rounded-md hover:bg-opacity-40"><FiMail className="text-3xl text-slate-800"/></div>
    
  return (
    <div id="Contact" className="relative flex flex-col self-center w-80 sm:w-[60vh] items-center text-center justify-center h-screen">
        <div className="text-3xl pb-4 text-teal-300 font-bold">Contact me</div>
        <div className="pb-8">I am currently looking for new opportunities to learn and develop within the industry. Feel free to get in touch with me via email</div>
        <button  onClick={(e) => {window.location.href ='mailto:adan-a-hassan@hotmail.com';}}  className={`p-4 rounded-lg hover:bg-opacity-40 transition ease-in-out duration-200 font-black text-lg cursor-none hover:animate-[pulse_5s_ease-in-out_infinite] ${dark ? "bg-teal-300 text-teal-900 hover:text-slate-50": "bg-teal-300 text-slate-50 hover:text-slate-900"}`}>Reach out</button>
        <div onClick={() => smoothScroll()} className="text-3xl absolute p-4 bottom-0 flex flex-row justify-center hover:animate-[bounce_1s_ease-in-out_infinite]" >
            <BsFillArrowUpCircleFill className="hover:fill-teal-300"/>
        </div>
    </div>
  )
}

export default Contact
