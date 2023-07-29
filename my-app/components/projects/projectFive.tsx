'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import { FaPython } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import TimeTrack from '@/public/images/time-track.png'
import style from '@/styles/projects.module.scss'

export default function ProjectFive() {

  const [ isOpened5, setIsOpened5 ] = useState<boolean>(false);

  const handleCollapse5 = () => {
    setIsOpened5(!isOpened5);
  };

  return (
    <div className={style.subdivproject}>
      <h2 className={style.h2}>
        App de soins infirmiers
      </h2>
      <div className={style.divimg}>
        <Image 
          src={TimeTrack}
          width={380}
          height={200}
          alt="time-track img"
          className={style.img}
        />
      </div>

      <span className={style.spanlogo}>
        <div className={style.divlogo}>
          <FaPython size={24} className={style.logo} />
          <p className={style.titlelogo}>Python3-Tkinter</p>
        </div>

        <div className={style.divlogo}>
          <SiMysql size={24} className={style.logo} />
          <p className={style.titlelogo}>MySQL</p>
        </div>
      </span>

      <div className={style.divbtncoll}>
        <button 
          type="button" 
          onClick={handleCollapse5} 
          className={style.btncollapse}
        >
          Read more
        </button>
      </div>

      <div isOpened5={isOpened5}>
        {isOpened5 === true ? (            
          <section className={style.section}>
            <p className={style.paragraph}>
              Ma première webapp avec Python3 (LAN). Je suis tellement fier de ce projet de 
              par le nombre de fonctionnalités que j'ai intégré, le nombre de problématiques 
              rencontrées et que j'ai pu résoudre, la créativité dont j'ai fait preuve et qui 
              font que cette application est une webapp de soins améliorée.
            </p>
            <p className={style.paragraph}>
              Pour la construire, j'ai utlisé :
            </p>
            <ul className={style.ul}>
              <li className={style.li}>tkinter pour la GUI.</li>
              <li className={style.li}>matplotlib pour le rendu des paramètres vitaux.</li>
              <li className={style.li}>multi-processing pour ouvrir 
                des nouvelles fenêtre et rendre l'UX plus agréable.</li>
              <li className={style.li}>multi-threading pour les alarmes programmables.</li>
              <li className={style.li}>MySQL pour le tableau récapitulatif des données patients.</li>
            </ul>
          </section>
          ) : null
        }
      </div>

      <span className={style.spanlink}>
        <a href="https://github.com/TLRKiliann/timetrack" 
          rel="noopener" target="_blank"
          className={style.a}>
          GitHub
        </a>
        <a href="https://www.youtube.com/watch?v=aV-X16sxRoI&list=PLVqrrQlbJDKOem4RhHMXvVJJbq6BOY0Fl&index=3"
          rel="noopener" target="_blank"
          className={style.a}>
          Youtube
        </a>
      </span>
    </div>
  )
}