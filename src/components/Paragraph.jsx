"use client"
import React, { useRef } from "react"
import { useScroll, motion } from "framer-motion"

const Paragraph = ({ value }) => {
  const element = useRef(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  })

  return (
    <motion.p
      ref={element}
      className="max-w-[1280px] text-5xl p-10"
      style={{ opacity: scrollYProgress }}
    >
      {value}
    </motion.p>
  )
}

export default Paragraph
