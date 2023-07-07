import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import style from '@/styles/contact.module.scss'

export default function ContactSection() {
  return (
    <div className={style.contact}>
      <h1 className={style.header}>
        Contact
      </h1>
      <div className={style.divcontact}>
        <div className={style.divlogocontact}>
          <MdEmail size={24} style={{color: "deepskyblue"}} />
          <h3 className={style.h3}>cedric.kuchen@protonmail.com</h3>
        </div>
        <div className={style.divlogocontact}>
          <FaPhone size={24} style={{color: "deepskyblue"}} />
          <h3 className={style.h3}>079 210 32 30</h3>
        </div>
      </div>
    </div>
  )
}