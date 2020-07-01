import React from 'react'
import './Skills.scss'
import ScrollAnimation from 'react-animate-on-scroll'
import { SkillsMeter, HeaderText, Lightbulb } from '../Snippets/index'

class Home extends React.Component {
  render() {
    return (
      <div id="Skills">
        <div className="Skills_header">
          <div className="Skills_header_wrapper"></div>
        </div>
        <div className="Skills_body">
          <div className="Skills_body_col_1">
            <div className="Lightbulb_container">
              <Lightbulb />
            </div>
            <div className="Skills_title">
              <ScrollAnimation animateIn="bounceIn">
                <HeaderText text="Skills" />
              </ScrollAnimation>
            </div>

            <ScrollAnimation animateIn="fadeInUp">
              <div className="Skills_body_text">
                <p>
                  While my passion lies on the front-end, I have experience
                  working with back-end languages and building full-stack
                  applications from scratch utilizing the following
                  technologies:
                </p>
                <ul>
                  <li>Bootstrap</li>
                  <li>PostgreSQL</li>
                  <li>Ruby on Rails</li>
                  <li>JQuery</li>
                </ul>
                <p>
                  I am a quick learner and always striving to pick up new
                  skills.
                </p>
              </div>
            </ScrollAnimation>
          </div>
          <div className="Skills_body_col_2">
            <SkillsMeter language_title="HTML" percentage="95%" />
            <SkillsMeter language_title="CSS" percentage="80%" />
            <SkillsMeter language_title="JavaScript" percentage="75%" />
            <SkillsMeter language_title="React" percentage="60%" />
            <SkillsMeter language_title="Node" percentage="50%" />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
