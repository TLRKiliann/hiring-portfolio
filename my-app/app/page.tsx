'use client'

import { useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import MainTitle from '@/components/mainTitle'
import SkillsSection from '@/components/skillsSection'
import ProjectsSection from '@/components/projectsSection'
import ContactSection from '@/components/contactSection'
import style from '@/styles/page.module.scss'
 
export default function Page() {

  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: projectRef, inView: projectsElementSection } = useInView();
  const { ref: contactRef, inView: contactElementSection } = useInView();

  return (
    <>
      <section className={style.sectionMainTitle}>
        <MainTitle />
      </section>
      
      <hr className={style.hr}/>

      <section ref={myRef} className={style.sectionSkillsSection}>
        {myElementIsVisible ? <SkillsSection /> : null}
      </section>
      
      <hr className={style.hr}/>
      
      <section ref={projectRef} className={style.sectionProjectsSection}>
        {projectsElementSection ? <ProjectsSection /> : null}
      </section>
      
      <hr className={style.hr}/>
      
      <section ref={contactRef} className={style.sectionContactSection}>
        {contactElementSection ? <ContactSection /> : null}
      </section>

    </>
  )
}
