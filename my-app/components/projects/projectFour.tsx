'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import ButtonHandleCollapse from './buttonHandleCollapse'
import { FaWordpress } from 'react-icons/fa'
import Axis from '@/public/images/institut-axis.png'
import style from '@/styles/projects.module.scss'

export default function ProjectFour() {

  const [ isOpened, setIsOpened ] = useState<boolean>(false);

  const handleCollapse = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={style.subdivproject}>
      <h2 className={style.h2}>
        Institut-axis
      </h2>
      <div className={style.divimg}>
        <Image 
          src={Axis}
          width={380}
          height={200}
          alt="axis img"
          className={style.img}
        />
      </div>
      
      <span className={style.spanlogo}>
        <div className={style.divlogo}>
          <FaWordpress size={24} className={style.logo} />
          <p className={style.titlelogo}>Wordpress</p>
        </div>
      </span>

      <ButtonHandleCollapse handleCollapse={handleCollapse} />

      <div>
          
        <section className={`${isOpened === true ? style.section : style.sectionhidden}`}>
          <p className={style.paragraph}>
            Le directeur de l'Institut-Axis m'a demandé de lui faire un site 
            avec Wordpress pour son association, sur la gestion de crise.
            La réalisation de ce projet s'est faite à l'aide des librairies 
            Ocean-WP et Elementor (version gratuite). Le site est hébergé chez 
            infomaniak.
            <br />
            Le site de l'Institut-Axis comporte une barre de menu pour naviguer 
            d'une page à l'autre, en fonction des thématiques. Ainsi qu'un login pour 
            accéder au blog.
          </p>
          <p className={style.paragraph}>
            Cette expérience m'a appris plusieurs choses :
          </p>

          <ul className={style.ul}>
            <li className={style.li}>Conceptualiser un site en fonction des attentes d'un demandeur.</li>
            <li className={style.li}>Le choix de package chez un hébergeur (prix, taille, etc).</li>
            <li className={style.li}>Le nom de domaine, les backup</li>
            <li className={style.li}>Sécurité et les mises-à-jour</li>
            <li className={style.li}>Les performances</li>
            <li className={style.li}>Le SEO</li>
            <li className={style.li}>Les cookies, politique de confidentialité.</li>
          </ul>
          <p className={style.paragraph}>
            Le directeur et son associé sont ravis du résultat. Mon impression est 
            que la cohérence de site et le design auraient pu être améliorés.
          </p>
        </section>

      </div>

      <span className={style.spanlinkaxis}>
        <a href="https://www.institut-axis.org/"
          rel="noopener" target="_blank"
          className={style.a}>
          Accéder au site
        </a>
      </span>
    </div>
  )
}