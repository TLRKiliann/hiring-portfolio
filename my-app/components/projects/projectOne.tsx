'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import ButtonHandleCollapse from './buttonHandleCollapse'
import { SiTailwindcss, SiMongoose } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import Ecommerce from '@/public/images/e-commerce.png'
import style from '@/styles/projects.module.scss'


export default function ProjectOne() {

  const [ isOpened, setIsOpened ] = useState<boolean>(false);
  
  const handleCollapse = () => {
    setIsOpened(!isOpened);
  }

  return (
    <div className={style.subdivproject}>
      <h2 className={style.h2}>
        Site e-commerce
      </h2>
      <div className={style.divimg}>
        <Image 
          src={Ecommerce}
          alt="e-commerce img"
          layout="responsive"
          className={style.img}
        />
      </div>
      
      <span className={style.spanlogo}>
        <div className={style.divlogo}>
          <TbBrandNextjs size={24} className={style.logo} />
          <p className={style.titlelogo}>Next.js</p>
        </div>

        <div className={style.divlogo}>
          <SiTailwindcss size={24} className={style.logo} />
          <p className={style.titlelogo}>Tailwind</p>
        </div>

        <div className={style.divlogo}>
          <SiMongoose size={24} className={style.logo} />
          <p className={style.titlelogo}>Mongoose</p>
        </div>
      </span>

      <ButtonHandleCollapse handleCollapse={handleCollapse} />

      <div>
        <section className={`${isOpened === true ? style.section : style.sectionhidden}`}>
          <p className={style.paragraph}>
            Dans ce projet, j'ai rendu l'UX la plus professionnelle possible. 
            
            Rendre clair les étapes du cheminement de l'achat du produit selectionné, 
            depuis le choix du produit jusqu'au paiment.
          </p>
          <p className={style.paragraph}>La réalisation de ce projet m'a appris à :</p>
          <ul className={style.ul}>
            <li className={style.li}>combiner des hooks tel que useReducer avec useContext.</li>
            <li className={style.li}>comprendre comment gérer les données avec MongoDB.</li>
            <li className={style.li}>sécuriser un site web avec TypeScript et NextAuth.</li>
            <li className={style.li}>utiliser Tailwind avec le darkmode.</li>
          </ul>
        </section>
      </div>

      <span className={style.spanlink}>
        <a href="https://github.com/TLRKiliann/nextjs-tailwind-mongodb" 
          rel="noopener" target="_blank"
          className={style.a}>
          GitHub
        </a>
        <a href="https://www.youtube.com/watch?v=po74SHEI9HI"
          rel="noopener" target="_blank"
          className={style.a}>
          Youtube
        </a>
      </span>
    </div>
  )
}