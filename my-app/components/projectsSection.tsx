import Image from 'next/image'
import { FaSass, FaWordpress, FaPython } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiMysql, SiVitest,
  SiMongoose } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import Ecommerce from '@/public/images/e-commerce.png'
import Agenda from '@/public/images/agenda-map.png'
import Boulangerie from '@/public/images/boulangerie.png'
import Axis from '@/public/images/institut-axis.png'
import TimeTrack from '@/public/images/time-track.png'
import style from '@/styles/projects.module.scss'

export default function ProjectsSection() {
  return (
    <div id="projects" className={style.project}>
      <h1 className={style.header}>
        Projects
      </h1>

      <div className={style.divproject}>

        <div className={style.subdivproject}>
          <h2 className={style.h2}>
            E-commerce Modern Clothing
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

          <section className={style.section}>
            <article>
              <p className={style.paragraph}>
                Dans ce projet, j'ai voulu rendre l'UX la plus professionnelle possible. 
                Ainsi, les étapes du cheminement de l'achat du produit selectionné est 
                claire pour l'utilisateur. Depuis, le choix du produit jusqu'au paiment.
                <br />
                J'ai utilisé Tailwind comme design system avec le darkmode, et Typescript, 
                NextAuth pour rendre l'application plus sécure.
              </p>
            </article>
          </section>

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

        <div className={style.subdivproject}>
          <h2 className={style.h2}>
            Agenda Map
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

          <section className={style.section}>
            <article>
              <p className={style.paragraph}>
                Cette application web permet d'agender des rendez-vous avec :
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
              <p>
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
            </article>
          </section>
          <span className={style.spanlink}>
            <a href="https://github.com/TLRKiliann/agenda-map" 
              rel="noopener" target="_blank"
              className={style.a}>GitHub</a>
            <a href="https://www.youtube.com/watch?v=1t1nGMXwKM8" 
              rel="noopener" target="_blank"
              className={style.a}>Youtube</a>
          </span>
        </div>

        <div className={style.subdivproject}>
          <h2 className={style.h2}>
            Site de boulangerie
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
          
          <section className={style.section}>
            <article>
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
              <p>
                Bien que le design présente bien et que la cohérence du site soit 
                respectée, je le trouve, dans sa vue d'ensemble, un peu old-school.
              </p>
            </article>
          </section>

          <span className={style.spanlink}>
            <a href="https://github.com/TLRKiliann/vite-et-bien"
              rel="noopener" target="_blank"
              className={style.a}>GitHub</a>
            <a href="https://www.youtube.com/watch?v=8g789tQ2gyY"
              rel="noopener" target="_blank"
              className={style.a}>Youtube</a>
          </span>
        </div>
      </div>

      <div className={style.seconddivproject}>

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

          <section className={style.section}>
            <article>
              <p className={style.paragraph}>
                Le directeur de l'Institut-Axis m'a demandé de lui faire un site 
                avec Wordpress pour son association, sur la gestion de crise.
                La réalisation de ce projet s'est faite à l'aide des librairies 
                Ocean-WP et Elementor (version gratuite). Le site est hébergé chez 
                infomaniak.
                <br />
                Le site de l'Institut-Axis comporte une barre de menu pour naviguer 
                d'une page à l'autre en fonction des thématiques, un login pour 
                accéder au blog.
              </p>
              <p>
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
              <p>
                Le directeur et son associé sont ravis du résultat. Mon impression est 
                que la cohérence de site et le design auraient pu être améliorée.
              </p>
            </article>
          </section>
          <span className={style.spanlinkaxis}>
            <a href="https://www.institut-axis.org/"
              rel="noopener" target="_blank"
              className={style.a}>
              Accéder au site
            </a>
          </span>
        </div>

        <div className={style.subdivproject}>
          <h2 className={style.h2}>
            Webapp Python3 for Nurses
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

          <section className={style.section}>
            <article>
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
            </article>
          </section>

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

      </div>
    </div>
  )
}