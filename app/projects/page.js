"use client";
import ProjectCard from '@/components/common/ProjectCard'
import Stairs from '@/components/common/Stairs'
import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"; // 👈 import ScrollTrigger
function Page() {
  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(function() {
    gsap.from(".hero", {
      height:0,
      stagger:{
        amount:0.5
      },
      scrollTrigger:{
        trigger:".lol",
        markers:true,
        start:'top 100%',
        end:'top -150%',
        scrub:true,
      }
    })
  })
  const projects = [
  {
    img1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    img2: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
  },
  {
    img1: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    img2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
  },
  {
    img1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    img2: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
  },
  {
    img1: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    img2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
  },
  {
    img1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    img2: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
  },
  {
    img1: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    img2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
  },
  {
    img1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    img2: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
  },
  {
    img1: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    img2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
  },
];

  return (
    <>
      <Stairs color="#000000"/>
      <div className="p-4 mb-[10px]">
        <div className="pt-[45vh]">
          <h2 className="font-sans text-[9.5vw] uppercase text-black">Work &apos;s</h2>
        </div>
        <div className="-mt-20">
          {projects.map((elm,idx)=> (
            <div key={idx+1} className="hero w-full h-[500px] mb-4 flex gap-4">
              <ProjectCard key={idx} image1={elm.img1} image2={elm.img2}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Page; 