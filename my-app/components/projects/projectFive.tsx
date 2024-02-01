'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import ButtonHandleCollapse from './buttonHandleCollapse'
import { FaPython } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import TimeTrack from '@/public/images/time-track.png'
import style from '@/styles/projects.module.scss'

export default function ProjectFive(){

  const [ isOpened, setIsOpened ] = useState<boolean>(false);

  const handleCollapse = () => {
    setIsOpened(!isOpened);
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

      <ButtonHandleCollapse handleCollapse={handleCollapse} />

      <div>          
        <section className={`${isOpened === true ? style.section : style.sectionhidden}`}>
          <p className={style.paragraph}>
            Ma première webapp avec Python3 et MySQL (LAN). Cette application comprend : 
            <ul className={style.ul}>
              <li className={style.li}>Un tableau récapitulatif des données patients.</li>
              <li className={style.li}>Enregistrement des paramètres vitaux avec rendu graphique.</li>
              <li className={style.li}>Des alarmes programmables en tout temps.</li>
              <li className={style.li}>Des alarmes de rappels pour l'arrêt des traitements et pour l'agenda.</li>
              <li className={style.li}>Un menu pour le relevé des notes (infirmières, médecins, réseau de soin).</li>
              <li className={style.li}>Une table des médicaments à sélectionner pour le dosage des médicaments, 
                avec en plus stix urinaire.</li>
              <li className={style.li}>Un récapitulatif par patient imprimable.</li>
            </ul>
          </p>
        </section>
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