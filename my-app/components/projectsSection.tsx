import React from 'react';
import ProjectOne from './projects/projectOne'
import ProjectTwo from './projects/projectTwo'
import ProjectThree from './projects/projectThree'
import ProjectFour from './projects/projectFour'
import ProjectFive from './projects/projectFive'
import VerticalText from './projects/verticalText'
import style from '@/styles/projects.module.scss'

export default function ProjectsSection() {
  return (
    <div id="projects" className={style.project}>
      <h1 className={style.header}>
        Projects
      </h1>

      <div className={style.divproject}>

        <ProjectOne />

        <ProjectTwo />

        <ProjectThree />

      </div>

      <div className={style.seconddivproject}>

        <ProjectFour />

        <ProjectFive />

      </div>

      <VerticalText />

    </div>
  )
}