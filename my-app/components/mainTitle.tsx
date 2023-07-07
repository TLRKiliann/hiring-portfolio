import Image from 'next/image'
import { FaGithub, FaYoutube, FaCodepen, FaLinkedin } from 'react-icons/fa'
import style from '@/styles/mainTitle.module.scss'
import myPicture from '@/public/images/photo_logo.png'

export default function MainTitle() {
  return (
    <>
      <div className={style.mainSection}>
        
        <div className={style.header}>
          <h3 className={style.h3}>
            Hey there !
          </h3>
          <h1 className={style.h1}>
            I'm Cédric Kuchen
          </h1>
          <h2 className={style.h2}>
            Software Engineer.&nbsp;
          </h2>
          <p className={style.paragraph}>
            Self-taught & passionated by web development.
          </p>



          <div className={style.divlogo}>
            <span className={style.span}>
              <FaGithub
                size={32}
                style={{marginRight: "5px", padding: "4px", color: "#ccc"}}
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
                style={{marginRight: "5px", padding: "4px", color: "#ccc"}}
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
                style={{marginRight: "5px", padding: "4px", color: "#ccc"}}
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
                style={{marginRight: "5px", padding: "4px", color: "#ccc"}}
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




        </div>

        <div className={style.myPhoto}>
          <Image
            src={myPicture}
            width={200}
            height={200}
            alt="picture of me"
            className={style.photo}
          />
        </div>

      </div>
    </>
  )
}