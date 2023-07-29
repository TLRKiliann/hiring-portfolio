import React from 'react'
//import Link from 'next/link'
import Image from 'next/image'
import style from '@/styles/navbar.module.scss'
import Comic from '@/public/images/photo_logo.png'

export default function Navbar() {
  return (
    <>
      <nav className={style.navbar}>

        <div className={style.image}>
          <Image
            src={Comic}
            width={60}
            height={60}
            alt="small photo"
            className={style.img}
          />
        </div>

        <ul className={style.ul}>
          <li className={style.li}>
            <a href="#linkskills" className={style.link}>
              Skills
            </a>
          </li>
          <li className={style.li}>
            <a href="#projects" className={style.link}>
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

/*
          <li className={style.li}>
            <a href="#contact" className={style.link}>
              Contact
            </a>
          </li>
*/