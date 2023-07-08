import { FaGithub, FaYoutube, FaCodepen, FaLinkedin } from 'react-icons/fa'
import style from '@/styles/footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer>
        <div className={style.divfooterlogo}>

          <a href="https://github.com/TLRKiliann"
              target="_blank"
              rel="noopener noreferrer"
              className={style.a}>
            <FaGithub
              size={32}
              style={{marginRight: "5px", padding: "4px"}}
            />
              GitHub
          </a>

          <a href="https://www.youtube.com/@estebancatanea"
              target="_blank"
              rel="noopener noreferrer"
              className={style.a}>
            <FaYoutube
              size={32}
              style={{marginRight: "5px", padding: "4px"}}
            />
              Youtube
          </a>

          <a href="https://codepen.io/koalatr33"
              target="_blank"
              rel="noopener noreferrer"
              className={style.a}>
            <FaCodepen
              size={32}
              style={{marginRight: "5px", padding: "4px"}}
            />
              codepen.io
          </a>

          <a href="https://www.linkedin.com/in/cedric-kuchen-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={style.a}>
            <FaLinkedin
              size={32}
              style={{marginRight: "5px", padding: "4px"}}
            />
              LinkedIn
          </a>

        </div>
      </footer>
    </>
  )
}
