import Image from 'next/image'
import { FaGithub, FaYoutube, FaCodepen, FaLinkedin } from 'react-icons/fa'
import style from '@/styles/mainTitle.module.scss'
import myPicture from '@/public/images/photo_logo2.png'

export default function MainTitle() {
  return (
    <>
      <div className={style.mainSection}>
        <div className={style.container}>

          <div className={style.grid}>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
            <div className={style.griditem}></div>
          </div>

          <h3 className={style.h3}>
            Hello ! Welcome to my portfolio. My name's -
          </h3>
          <h1 className={style.h1}>
            Cédric Kuchen
          </h1>
          <h2 className={style.h2}>
            Software Engineer.&nbsp;
          </h2>
          <p className={style.paragraph}>
            Self-taught & passionate about web development.
          </p>

          <div className={style.divlogo}>
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

        </div>

        <div className={style.myPhoto}>
          <Image
            src={myPicture}
            width={100}
            height={100}
            alt="picture of me"
            className={style.photo}
          />
        </div>

      </div>
    </>
  )
}