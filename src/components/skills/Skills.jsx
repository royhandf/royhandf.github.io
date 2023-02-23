import React from "react"
import Backend from "./Backend"
import Frontend from "./Frontend"
import "./skills.css"

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Level</span>

      <div className="skills-container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills
