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
                Dans ce projet, j'ai voulu rendre l'UX la plus attractive
                et la plus professionnelle possible. Ainsi, les étapes du
                cheminement de l'achat du produit selectionné est claire
                pour l'utilisateur.
                <br />
                J'ai utiliser Tailwind pour le design avec le theme (darkmode).
                Pour la sécurité, j'ai utiliser Typescript et NextAuth.
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
                Cette webapp permet d'agender un rendez-vous avec
                les coordonnées d'une personne, ainsi que la localisation
                du lieu de rendez-vous avec le site de "wego.here.com".
                Les données sont modifiables après les avoir entrées et 
                l'utilisateur peut également enregistrer le rendez-vous
                sur une autre page une fois terminé.
                <br />
                Mon point d'amélioration est la refactorisation du code et 
                le style (design peu soigné).
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
                J'ai fait ce site de boulangerie, pour m'entraîner à la manipulation 
                le css, le html et les images.
                <br/>
                J'ai insérer un formulaire pour commander des produits.
                <br />
                Bien que le design présente bien et que la cohérence du site soit
                respectée, je trouve qu'il est d'apparence un peu old-school.
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
                Christophe Bonamy, directeur de l'Institut-Axis m'a 
                demandé de lui faire un site avec Wordpress.
                <br />
                La construction s'est faite avec son associé, Bruno Ceparro. 
                Nous avons oeuvré ensemble pour ce projet à l'aide des librairies
                Ocean-WP et Elementor (version gratuite). 
                <br />
                Bruno s'est occupé de la conception du site sur mes conseils
                et moi j'ai développé. 
                <br />
                Le directeur et son Bras-droit sont ravis du résultat, malgré
                ma remise en question quant à la cohérence du site.
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
                Ma première webapp avec Python3. Je suis tellement fier de ce projet de par
                le nombre de fonctionnalité que j'ai intégré, le nombre de problème rencontré
                et que j'ai résolu, la créativité dont j'ai fait preuve et qui font que cette
                application est une webapp de soins améliorée.
              </p>
              <p className={style.paragraph}>
                Pour la construire, j'ai utlisé :
              </p>
              <ul className={style.ul}>
                <li className={style.li}>
                  tkinter pour la GUI.
                </li>
                <li className={style.li}>
                  matplotlib pour le rendu des paramètres vitaux.
                </li>
                <li className={style.li}>
                  multi-processing pour ouvrir 
                  des nouvelles fenêtre et rendre l'UX plus agréable.
                </li>
                <li className={style.li}>
                  multi-threading pour les alarmes 
                  programmables.
                </li>
                <li className={style.li}>
                  MySQL pour le tableau récapitulatif des données patients.
                </li>
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