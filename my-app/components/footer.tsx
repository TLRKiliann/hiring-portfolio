import { FaGithub, FaYoutube, FaCodepen, FaLinkedin } from 'react-icons/fa'
import style from '@/styles/footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer>
        <div className={style.divfooterlogo}>

          <span className={style.span}>
            <FaGithub
              size={32}
              style={{marginRight: "5px", padding: "4px", color: "whitesmoke"}}
            />

            <a href="https://github.com/TLRKiliann"
              target="_blank"
              rel="noopener noreferrer"
              className={style.a}
            >
              GitHub
            </a>
          </span>


          <span className={style.span}>
            <FaYoutube
              size={32}
              style={{marginRight: "5px", padding: "4px", color: "whitesmoke"}}
            />


            <a href="https://www.youtube.com/@estebancatanea"
              target="_blank"
              rel="noopener noreferrer"
              className={style.a}
            >
              Youtube
            </a>
          </span>


          <span className={style.span}>
            <FaCodepen
              size={32}
              style={{marginRight: "5px", padding: "4px", color: "whitesmoke"}}
            />

            <a href="https://codepen.io/koalatr33"
              target="_blank"
              rel="noopener noreferrer"
              className={style.a}
            >
              codepen.io
            </a>
          </span>


          <span className={style.span}>

            <FaLinkedin
              size={32}
              style={{marginRight: "5px", padding: "4px", color: "whitesmoke"}}
            />

            <a href="https://www.linkedin.com/in/cedric-kuchen-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={style.a}
            >
              LinkedIn
            </a>
          </span>

        </div>
      </footer>
    </>
  )
}

/*
              style={{marginRight: "5px", padding: "4px"}}
*/