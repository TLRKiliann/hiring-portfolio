'use client'

import React, { useState } from 'react';
import Image from 'next/image'
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

      <div className={style.divbtncoll}>
        <button 
          type="button" 
          onClick={handleCollapse} 
          className={style.btncollapse}
        >
          Read more
        </button>
      </div>
      <div isOpened={isOpened}>
        {isOpened === true ? (
          <section className={style.section}>
            <p className={style.paragraph}>
              Dans ce projet, j'ai voulu rendre l'UX la plus professionnelle possible. 
              Ainsi, les étapes du cheminement de l'achat du produit selectionné est 
              claire pour l'utilisateur. Depuis, le choix du produit jusqu'au paiment.
              <br />
              J'ai utilisé Tailwind comme design system avec le darkmode, et Typescript, 
              NextAuth pour rendre l'application plus sécure.
            </p>
          </section>
          ) : null
        }
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