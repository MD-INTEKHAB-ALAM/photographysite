import React from "react";
import Image from "next/image";

function ProjectCard({ image1, image2 }) {
  return (
    <>
      {/* First Image */}
      <div className="w-1/2 group transition-all relative rounded-none cursor-pointer hover:rounded-[70px] overflow-hidden h-full">
        <Image
          src={image1}
          alt="Project image 1"
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </div>

      {/* Second Image */}
      <div className="w-1/2 group transition-all relative cursor-pointer rounded-none hover:rounded-[70px] overflow-hidden h-full">
        <Image
          src={image2}
          alt="Project image 2"
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </div>
    </>
  );
}

export default ProjectCard;
