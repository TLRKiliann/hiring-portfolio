import React from 'react'
import Link from 'next/link'
import style from '@/styles/navbar.module.scss'

export default function Navbar() {
  return (
    <>
      <nav class={style.navbar}>
        <h2 class={style.image}>Portfolio</h2>
        <ul class={style.ul}>
          <li class={style.li}><Link href="/navbar" class={style.link}>Skills</Link></li>
          <li class={style.li}><Link href="/navbar" class={style.link}>Projects</Link></li>
          <li class={style.li}><Link href="/navbar" class={style.link}>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}