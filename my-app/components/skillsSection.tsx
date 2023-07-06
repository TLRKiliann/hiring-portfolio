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

      <div className={style.divskills}>
        <div className={style.subdivskills}>
          <h2>Design</h2>
          <span className={style.spanskills}>

            <li><FaSass size={32} className={style.logo} />Sass</li>
            <li><SiTailwindcss size={32} className={style.logo} />Tailwind</li>
            <li><FaReact size={32} className={style.logo} />React-Icons</li>
            <li><SiGimp size={32} className={style.logo} />Gimp</li>

          </span>
        </div>

        <div className={style.subdivskills}>
          <h2>Frontend</h2>
          <span className={style.spanskills}>

            <li><FaReact size={32} className={style.logo} />React</li>
            <li><SiTypescript size={32} className={style.logo} />TypeScript</li>
            <li><TbBrandNextjs size={32} className={style.logo} />Next.js</li>
            <li><SiSvelte size={32} className={style.logo} />Sveltekit</li>
            <li><FaVuejs size={32} className={style.logo} />Vue.js</li>
            <li><FaWordpress size={32} className={style.logo} />Wordpress</li>

          </span>
        </div>

        <div className={style.subdivskills}>
          <h2>Backend</h2>
          <span className={style.spanskills}>

            <li><SiMysql size={32} className={style.logo} />MySQL</li>
            <li><SiMongoose size={32} className={style.logo} />Mongoose</li>
            <li><FaUbuntu size={32} className={style.logo} />Lamp</li>

          </span>
        </div>

        <div className={style.subdivskills}>
          <h2>Other</h2>
          <span className={style.spanskills}>

            <li><FaGithub size={32} className={style.logo} />Git & GitHub</li>
            <li><FaPython size={32} className={style.logo} />Python 3</li>
            <li><FcLinux size={32} className={style.logo} />Linux</li>
            <li><FaWindows size={32} className={style.logo} />Hyper-V</li>

          </span>
        </div>

      </div>
    </div>
  )
}