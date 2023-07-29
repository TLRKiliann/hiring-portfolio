'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import { FaSass } from 'react-icons/fa'
import { SiVitest } from 'react-icons/si'
import Boulangerie from '@/public/images/boulangerie.png'
import style from '@/styles/projects.module.scss'

export default function ProjectThree() {

  const [ isOpened3, setIsOpened3 ] = useState<boolean>(false);

  const handleCollapse3 = () => {
    setIsOpened3(!isOpened3);
  };

  return (

    <div className={style.subdivproject}>
      <h2 className={style.h2}>
        Site vitrine
      </h2>
      <div className={style.divimg}>
        <Image 
          src={Boulangerie}
          width={380}
          height={200}
          alt="boulangerie img"
          className={style.img}
        />
      </div>
      
      <span className={style.spanlogo}>
        <div className={style.divlogo}>
          <SiVitest size={24} className={style.logo} />
          <p className={style.titlelogo}>Vite.js</p>
        </div>
        <div className={style.divlogo}>
          <FaSass size={24} className={style.logo} />
          <p className={style.titlelogo}>Sass</p>
        </div>
      </span>
      
      <div className={style.divbtncoll}>
        <button 
          type="button" 
          onClick={handleCollapse3} 
          className={style.btncollapse}
        >
          Read more
        </button>
      </div>
      <div isOpened3={isOpened3}>
        {isOpened3 === true ? (            
          <section className={style.section}>
            <p className={style.paragraph}>
              J'ai fait ce site de boulangerie, pour m'entraîner au code css, html, 
              et à la manipulation des images.
              <br />
              Ce site comprend :
              <br/>
            </p>
              <ul className={style.ul}>
                <li className={style.li}>la page principale</li>
                <li className={style.li}>un formulaire pour commander des produits</li>
                <li className={style.li}>une page pour la présentation des produits</li>
                <li className={style.li}>une page de contact et une page pour les allergies</li>
              </ul>
            <p className={style.paragraph}>
              Bien que le design présente bien et que la cohérence du site soit 
              respectée, je le trouve, dans sa vue d'ensemble, un peu old-school.
            </p>
          </section>
          ) : null
        }
      </div>

      <span className={style.spanlink}>
        <a href="https://github.com/TLRKiliann/vite-et-bien"
          rel="noopener" target="_blank"
          className={style.a}>GitHub</a>
        <a href="https://www.youtube.com/watch?v=8g789tQ2gyY"
          rel="noopener" target="_blank"
          className={style.a}>Youtube</a>
      </span>
    </div>
  )
}