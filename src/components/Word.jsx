"use client"
import React, { useRef } from "react"
import { useScroll, motion, useTransform } from "framer-motion"

const Word = ({ value }) => {
  const element = useRef(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  })

  const words = value.split(" ")
  return (
    <p
      ref={element}
      className="max-w-[1280px] text-5xl p-10 flex flex-wrap leading-none"
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <MyWord
            key={i}
            range={[start, end]}
            progress={scrollYProgress}
          >
            {word}
          </MyWord>
        )
      })}
    </p>
  )
}

const MyWord = ({ children, range, progress }) => {
  //HOW TO READ
  //when progress is/enters range-start, opacity is 0
  //when progress is/hits range-end, opacity is 1
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="mr-3 mt-3 relative">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}

export default Word
