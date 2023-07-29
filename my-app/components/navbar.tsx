import React from 'react'
import Image from 'next/image'
import style from '@/styles/navbar.module.scss'
import Computer from '@/public/images/computing.png'

export default function Navbar() {
  return (
    <>
      <nav className={style.navbar}>

        <div className={style.image}>
          <Image
            src={Computer}
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
