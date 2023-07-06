import { Metadata } from 'next'
import MainTitle from '@/components/mainTitle'
import SkillsSection from '@/components/skillsSection'
import ProjectsSection from '@/components/projectsSection'
import ContactSection from '@/components/contactSection'
import style from '@/styles/page.module.scss'

export const metadata: Metadata = {
  title: 'Portfolio',
}
 
export default function Page() {
  return (
    <>
      <section className={style.sectionMainTitle}>
        <MainTitle />
      </section>
      <section className={style.sectionSkillsSection}>
        <SkillsSection />
      </section>
      <section className={style.sectionProjectsSection}>
        <ProjectsSection />
      </section>
      <section className={style.sectionContactSection}>
        <ContactSection />
      </section>

    </>
  )
}
