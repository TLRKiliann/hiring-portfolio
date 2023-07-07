import { FaSass, FaWordpress, FaPython } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiMysql, SiVitest,
  SiMongoose } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import style from '@/styles/projects.module.scss'

export default function ProjectsSection() {
  return (
    <div className={style.project}>
      <h1 className={style.header}>
        Projects
      </h1>

      <div className={style.divproject}>

        <div className={style.subdivproject}>
          <h2 className={style.h2}>
            E-commerce Modern Clothing
          </h2>
          <div className={style.divimg}>
            <>
              Image
            </>
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

          <p className={style.paragraph}>
            Text TextTextText TextTextText TextText TextText
          </p>
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
            <>
              Image
            </>
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

          <p className={style.paragraph}>
            Text TextTextText TextTextText TextText TextText
          </p>
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
            Site de Boulangerie
          </h2>
          <div className={style.divimg}>
            <>
              Image
            </>
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

          <p className={style.paragraph}>
            Text TextTextText TextTextText TextText TextText
          </p>
          <span className={style.spanlink}>
            <a href="https://github.com/TLRKiliann/vite-et-bien"
              rel="noopener" target="_blank"
              className={style.a}>GitHub</a>
            <a href="you: https://www.youtube.com/watch?v=8g789tQ2gyY"
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
            <>
              Image
            </>
          </div>
          
          <span className={style.spanlogo}>
            <div className={style.divlogo}>
              <FaWordpress size={24} className={style.logo} />
              <p className={style.titlelogo}>Wordpress</p>
            </div>
          </span>

          <p className={style.paragraph}>
            Text TextTextText TextTextText TextText TextText
          </p>
          <span className={style.spanlink}>
            <a href="https://www.institut-axis.org/"
              rel="noopener" target="_blank"
              className={style.a}>
              Lien vers le site
            </a>
          </span>
        </div>

        <div className={style.subdivproject}>
          <h2 className={style.h2}>
            Webapp Python3 for Nurses
          </h2>
          <div className={style.divimg}>
            <>
              Image
            </>
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

          <p className={style.paragraph}>
            Text TextTextText TextTextText TextText TextText
          </p>
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