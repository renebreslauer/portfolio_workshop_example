import React from 'react'
import './SkillsMeter.scss'
import ScrollAnimation from 'react-animate-on-scroll'

function SkillsMeter(props) {
  return (
    <>
      <ScrollAnimation animateIn="fadeInUp" delay={500}>
        <h2>{props.language_title}</h2>

        <div className="Skills_group">
          <div className="Skills_meter">
            <ScrollAnimation animateIn="slideInLeft" delay={1000}>
              <div className={props.language_title}></div>
            </ScrollAnimation>
          </div>
          <p>{props.percentage}</p>
        </div>
      </ScrollAnimation>
    </>
  )
}

export default SkillsMeter
