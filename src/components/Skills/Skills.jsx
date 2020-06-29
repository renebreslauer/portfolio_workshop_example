import React from 'react'
import './Skills.scss'
import ScrollAnimation from 'react-animate-on-scroll'
import { SkillsMeter } from '../Snippets/index'

class Home extends React.Component {
  render() {
    return (
      <div id="Skills">
        <div className="Skills_header">
          <div className="Skills_header_wrapper">
            <h1>
              While my passion lies on the front-end, I have experience working
              with back-end languages, as well.
            </h1>
          </div>
        </div>
        <div className="Skills_body">
          <div className="Skills_body_col_1">
            <h2>Skills</h2>
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
