"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroBanner from "@/assets/images/Herobanner.jpg";
import Link from "next/link";
import Stairs from "@/components/common/Stairs";


export default function Home() {
  const introText = "Banu Prakash".split("");
  const descriptionText =
    "A passionate photographer capturing timeless moments with creativity and depth.".split(
      ""
  );

  return (
    <main className="relative h-screen w-screen">
      {/* Background Image */}
      <Stairs/>
      <Image
        src={heroBanner}
        alt="Hero background"
        fill
        className="object-cover object-top-10 brightness-75"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-between text-center text-[#e1ca96]">
        {/* Intro Section */}
        <div className="flex flex-col items-center justify-center flex-grow px-4">
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-wide flex flex-wrap justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {introText.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: -80, rotateX: 90 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 12,
                    },
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 text-lg md:text-2xl max-w-3xl flex flex-wrap justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { delayChildren: 1.5, staggerChildren: 0.03 },
              },
            }}
          >
            {descriptionText.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: -60, rotateX: 90 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: {
                      type: "spring",
                      stiffness: 120,
                      damping: 14,
                    },
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Buttons Section */}
        <motion.div
          className="flex justify-center gap-6 pb-12"
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 3, type: "spring", stiffness: 100, damping: 12 }}
        >
          <Link
            href="/projects"
            className="px-12 py-6 bg-transparent border-2 hover:border-[#10b981] hover:text-[#10b981] uppercase border-[#e1ca96] backdrop-blur-xs text-[#e1ca96] rounded-full text-2xl font-medium shadow-lg hover:scale-105 transition"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="px-12 py-6 bg-transparent border-2 uppercase hover:border-[#10b981] hover:text-[#10b981] border-[#e1ca96] backdrop-blur-xs text-[#e1ca96] rounded-full text-2xl font-medium shadow-lg hover:scale-105 transition"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
