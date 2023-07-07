import Image from 'next/image'
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