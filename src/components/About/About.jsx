import React from 'react'
import './About.scss'
import Wynstudent from '../../assets/wynstudent.png'

class About extends React.Component {
  render() {
    return (
      <div id="About">
        <div className="About_wrapper">
          <div className="About_header"></div>
          <div className="About_body">
            <div className="About_body_col_1">
              <img src={Wynstudent} class="Wynstudent_image" alt="portrait" />
            </div>
            <div className="About_body_col_2">
              <h1>A bit about me</h1>
              <p>
                Growing up in sunny South Florida, I attended Florida
                International University, where I earned my degree in business
                management. During this time I worked in the hospitality
                industry, where I honed my soft skills and gained the ability to
                make quick decisions in a high pressure environment. Post-grad,
                I accepted a sales role, working my way into a leadership
                position. Throughout this time, I helped my company achieve
                record breaking results and client retention.
              </p>
              <br></br>
              <p>
                Craving a career that allows me to exercise problem solving
                skills and creativity, I transitioned into web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
