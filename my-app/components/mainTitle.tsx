import Image from 'next/image'
import style from '@/styles/mainTitle.module.scss'
import myPicture from '@/public/images/photo_logo.png'

export default function MainTitle() {
  return (
    <>
      <div className={style.mainSection}>
        
        <div className={style.header}>      
          <h3>
            Hey there !
          </h3>
          <h2>
            My name is Cédric Kuchen
          </h2>
          <h2 style={{color: "whitesmoke"}}>
            Software Engineer. Self-taught & passionated by web development.
          </h2>
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