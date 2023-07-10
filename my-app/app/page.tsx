import Layout from "@/components/layout"
import MainTitle from '@/components/mainTitle'
import SkillsSection from '@/components/skillsSection'
import ProjectsSection from '@/components/projectsSection'
import ContactSection from '@/components/contactSection'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import style from '@/styles/page.module.scss'
 
export default function Page() {

  return (
    <>
      <Navbar />

      <Layout>
        <section className={style.sectionMainTitle}>
          <MainTitle />
        </section>
      </Layout>

      <hr className={style.hr} />

      <Layout>
        <section className={style.sectionSkillsSection}>
          <SkillsSection /> 
        </section>
      </Layout>

      <hr className={style.hr} />

      <Layout>
        <section className={style.sectionProjectsSection}>
          <ProjectsSection />
        </section>
      </Layout>

      <hr className={style.hr} />

      <Layout>
        <section className={style.sectionContactSection}>
          <ContactSection />
        </section>
      </Layout>

      <Footer />
    </>
  )
}
