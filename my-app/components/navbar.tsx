import React from 'react'
import Link from 'next/link'
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
            <Link href="#linkskills" scroll={false} className={style.link}>
              Skills
            </Link>
          </li>
          <li className={style.li}>
            <Link href="#projects" scroll={false} className={style.link}>
              Projects
            </Link>
          </li>
          <li className={style.li}>
            <Link href="#contact" scroll={false} className={style.link}>
              Contact
            </Link>
          </li>
        </ul>

      </nav>
    </>
  )
}