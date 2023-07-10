'use client'

import { motion, useInView, useAnimation } from 'framer-motion';
import React, { useRef, useEffect, PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])
  return (
    <>
      <main>
        <div ref={ref}>
          <motion.div initial="hidden" animate={mainControls} variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .4,
                ease: "linear",
                duration: 0.2,
              }
            },
            }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </>
  )
}