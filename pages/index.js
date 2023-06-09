        // include loading page that has an animation that lasts a minimum time of like 2s after which the thing goes to the portifolio page where it starts with a transition onto the about me page. Once on the about me page there is a boutton that looks like an arrow that scrolls it down to the portifolio page. During the transition the individual project divs load one by one. On hover the project expands by a scale of 2x and shows hidden divs that contain information about the project. There is another arrow that takes you to the contact me page that shows the footer or a button that takes you to another page called contact.
        
        //change of mind it is better to keep it as one page and fade in the sections on scroll or click
import Head from 'next/head'
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Router from "next/router"
import Image from "next/image"
import Project from "../components/Project.js"
import Intro from "../components/Intro.js"
import Contact from "../components/Contact.js"
import About from "../components/About.js"
import Navbar from "../components/Navbar.js"


export default function Home() {
  const [dark, setDark] = useState(true)
  
  const [visDiv, setVisDiv] = useState(false)

  if (typeof window !== "undefined") {
      useEffect(() => {
        const navChange = () => setVisDiv(window.scrollY >= aboutOffset*0.75);
        window.addEventListener("scroll", navChange);
        return () => window.removeEventListener("scroll", navChange);
    }, [])
  }
  
  if (typeof window !== "undefined") {
  const mouse = document.getElementById("mouse")
  }
  if (typeof window !== "undefined") {
  window.onmousemove = (e) => {
      const x = e.clientX - mouse.offsetWidth/2,
            y = e.clientY - mouse.offsetHeight/2;
      
    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }
    mouse.animate(keyframes, {
        duration:100,
        fill: "forwards"
    })
  }}
  
  const pageRef = useRef()
  const introRef = useRef()
  const aboutRef = useRef()
  const projectRef = useRef()
  const contactRef = useRef()
//   scrollHeight, offsetHeight, clientHeight



const [aboutOffset, setAboutOffset] = useState(0)
const [projectOffset, setProjectOffset] = useState(0)
const [contactOffset, setContactOffset] = useState(0)

      useEffect(() => {
        const handleScrollValues = () => {
            const screenHeight = introRef.current.parentNode.parentNode.parentNode.parentNode.scrollTopMax
            const normalHeight = introRef.current.scrollHeight
            const projectHeight = projectRef.current.scrollHeight
            setAboutOffset(normalHeight)
            setProjectOffset(normalHeight *2)
            setContactOffset(normalHeight*2 + projectHeight)
        }
        handleScrollValues()
        return () => window.addEventListener("resize", handleScrollValues);
    }, [])



  return (
    <div ref={pageRef} className={` ${dark ? "bg-slate-900 text-slate-200" : "bg-slate-100 text-slate-900"} text-slate-50 flex flex-col justify-between h-fit transition ease-in-out duration-1000 group cursor-none`}>
      <Head>
        <title>Adan's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro 
        dark={dark}
        setDark={setDark}
        introRef={introRef}
        aboutOffset={aboutOffset}
      />
      <Navbar
        visDiv={visDiv}
        dark={dark}
        setDark={setDark}
        aboutOffset={aboutOffset}
        projectOffset={projectOffset}
        contactOffset={contactOffset}
      />
      <About 
        projectOffset={projectOffset}
      />
      <Project 
        dark={dark}
        projectRef={projectRef}
        contactOffset={contactOffset}
      />
      <Contact 
        dark={dark}
      />
    </div>
  )
}
