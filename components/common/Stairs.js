"use client";
import {useGSAP} from "@gsap/react";
import { useRef } from 'react';
import gsap from "gsap";
import { usePathname } from "next/navigation";

function Stairs() {
    const stairParentRef = useRef(null);
    const pathname = usePathname();
    console.log(pathname);

    useGSAP(function() {
    const tl = gsap.timeline();

    tl.to(stairParentRef.current,{
        display:'block',
    })
    
    tl.from(".stair", {
      height:0,
      duration:0.5,
      stagger: {
        amount:-0.25
      }
    })
    tl.to(".stair", {
      y:'100%',
      stagger:{
        amount:-0.25
      }
    })
    tl.to(stairParentRef.current,{
        display:'none',
    })
    tl.to('.stair',{
        y:'0%',
    })
  },[pathname])

  return (
        <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0">
        <div className="h-screen w-full flex fixed z-20 top-0">
          <div className="stair h-full w-1/6 bg-[#e1ca96] "></div>
          <div className="stair h-full w-1/6 bg-[#e1ca96] "></div>
          <div className="stair h-full w-1/6 bg-[#e1ca96] "></div>
          <div className="stair h-full w-1/6 bg-[#e1ca96] "></div>
          <div className="stair h-full w-1/6 bg-[#e1ca96] "></div>
          <div className="stair h-full w-1/6 bg-[#e1ca96] "></div>
        </div>
      </div>
  )
}

export default Stairs