import { FaSass, FaReact, FaVuejs, FaWordpress, FaGithub,
  FaPython, FaWindows, FaUbuntu } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiSvelte, SiMysql,
  SiMongoose, SiGimp } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { FcLinux } from 'react-icons/fc'
import style from '@/styles/skills.module.scss'

export default function SkillsSection() {
  return (
    <div className={style.skills}>
      <h1 className={style.header}>
        Skills
      </h1>

      <div id="skills-wrapper" className={style.divskills}>
        <div id="skillscroll" className={style.subdivskills}>
          <h2 className={style.h2}>Design</h2>
          <span className={style.spanskills}>
            <li>
              <FaSass size={32} className={style.logo} style={{color: "hotpink"}} />
              Sass
            </li>
            <li>
              <SiTailwindcss size={32} className={style.logo} style={{color: "deepskyblue"}} />
              Tailwind
            </li>
            <li>
              <FaReact size={32} className={style.logo} style={{color: "cyan"}} />
              React-Icons
            </li>
            <li>
              <SiGimp size={32} className={style.logo} style={{color: "brown"}} />
              Gimp
            </li>
          </span>
        </div>

        <div className={style.subdivskills}>
          <h2 className={style.h2}>Frontend</h2>
          <span className={style.spanskills}>
            <li>
              <FaReact size={32} className={style.logo} style={{color: "cyan"}} />
              React
            </li>
            <li>
              <SiTypescript size={32} className={style.logo} 
                style={{color: "steelblue", background: "#ccc", borderRadius: "5px"}} />
              TypeScript
            </li>
            <li>
              <TbBrandNextjs size={32} className={style.logo} style={{color: "#ccc"}} />
              Next.js
              </li>
            <li>
              <SiSvelte size={32} className={style.logo} 
                style={{color: "orangered"}} />
              Sveltekit
            </li>
            <li>
              <FaVuejs size={32} className={style.logo}
                style={{color: "#00ff80"}} />
              Vue.js
            </li>
            <li>
              <FaWordpress size={32} className={style.logo}
                style={{color: "dodgerblue", background: "#ccc", borderRadius: "100%"}} />
              Wordpress
            </li>
          </span>
        </div>

        <div className={style.subdivskills}>
          <h2 className={style.h2}>Backend</h2>
          <span className={style.spanskills}>
            <li>
              <SiMysql size={32} className={style.logo} style={{color: "cyan"}} />
              MySQL
            </li>
            <li>
              <SiMongoose size={32} className={style.logo} style={{color: "brown"}} />
              Mongoose
            </li>
            <li>
              <FaUbuntu size={32} className={style.logo}
                style={{color: "orangered", background: "#ccc", borderRadius: "100%"}} />
              Lamp
            </li>
          </span>
        </div>

        <div className={style.subdivskills}>
          <h2 className={style.h2}>Other</h2>
          <span className={style.spanskills}>
            <li>
              <FaGithub size={32} className={style.logo} style={{color: "#ccc"}} />
              Git & GitHub
            </li>
            <li>
              <FaPython size={32} className={style.logo} style={{color: "#00ff80"}} />
              Python 3
            </li>
            <li>
              <FcLinux size={32} className={style.logo} />Linux</li>
            <li>
              <FaWindows size={32} className={style.logo} style={{color: "aqua"}} />
              Hyper-V
            </li>
          </span>
        </div>

      </div>
    </div>
  )
}