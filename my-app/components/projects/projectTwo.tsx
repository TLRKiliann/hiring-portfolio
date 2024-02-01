'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import ButtonHandleCollapse from './buttonHandleCollapse'
import { FaSass } from 'react-icons/fa'
import { SiMysql, SiVitest } from 'react-icons/si'
import Agenda from '@/public/images/agenda-map.png'
import style from '@/styles/projects.module.scss'

export default function ProjectTwo() {

  const [ isOpened, setIsOpened ] = useState<boolean>(false);

  const handleCollapse = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={style.subdivproject}>
      <h2 className={style.h2}>
        Rendez-vous géolocalisables
      </h2>
      <div className={style.divimg}>
        <Image 
          src={Agenda}
          width={380}
          height={200}
          alt="agenda img"
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

        <div className={style.divlogo}>
          <SiMysql size={24} className={style.logo} />
          <p className={style.titlelogo}>MySQL</p>
        </div>
      </span>

      <ButtonHandleCollapse handleCollapse={handleCollapse} />

      <div>
        <section className={`${isOpened === true ? style.section : style.sectionhidden}`}>
          <p className={style.paragraph}>
            Cette application web permet d'agender des rendez-vous et de les géolocaliser
            avec :
          </p>
          <ul className={style.ul}>
            <li className={style.li}>
              date et heure
            </li>
            <li className={style.li}>
              localisation du lieu
            </li>
            <li className={style.li}>
              nom, prénom, téléphone, e-mail
            </li>
            <li className={style.li}>
              une note pour écrire en quoi consiste le rendez-vous
            </li>
          </ul>
          <p className={style.paragraph}>
            La géolocalisation du rendez-vous se fait à l'aide du site: 
            "wego.here.com". 
            <br />
            Dans cette application, j'ai appris à manipuler les données 
            à l'aide des requêtes HTTP (CRUD). J'ai utilisé AXIOS sur la 
            partie frontend, ainsi qu'avec Node.js avec Express sur la partie 
            backend, avec MariaDB.
            Une base de données MySQL utilisée est sur mon server Raspberry (LAN).
            <br />
            Une fois les données entrées, l'utilisateur peut les modifier 
            et les enregistrer. Lorsque le rendez-vous est terminé l'utilisateur
            peut l'enrigistrer (sur une autre table) pour qu'il soit transférer sur 
            une autre page, afin de ne pas perdre l'historique.
            <br />
            Les points d'amélioration sont la refactorisation du code 
            et le style (trop sombre, trop bleu).
          </p>
        </section>
      </div>

      <span className={style.spanlink}>
        <a href="https://github.com/TLRKiliann/agenda-map" 
          rel="noopener" target="_blank"
          className={style.a}>GitHub</a>
        <a href="https://www.youtube.com/watch?v=1t1nGMXwKM8" 
          rel="noopener" target="_blank"
          className={style.a}>Youtube</a>
      </span>
    </div>
  )
}