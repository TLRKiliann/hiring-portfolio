import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '@/styles/navbar.module.scss'
import Comic from '@/public/images/comic.png'

export default function Navbar() {
  return (
    <>
      <nav className={style.navbar}>

        <div className={style.image}>
          <Image
            src={Comic}
            width={80}
            height={80}
            alt="comic of me"
          />
        </div>

        <ul className={style.ul}>
          <li className={style.li}><Link href="/navbar" className={style.link}>Skills</Link></li>
          <li className={style.li}><Link href="/navbar" className={style.link}>Projects</Link></li>
          <li className={style.li}><Link href="/navbar" className={style.link}>Contact</Link></li>
        </ul>

      </nav>
    </>
  )
}