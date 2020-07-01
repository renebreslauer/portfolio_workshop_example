import React from 'react'
import './About.scss'
import Wynstudent from '../../assets/wynstudent.png'
import Paw from '../../assets/dog.png'
import Code from '../../assets/code.png'
import Sun from '../../assets/sun.png'
import ScrollAnimation from 'react-animate-on-scroll'

class About extends React.Component {
  render() {
    return (
      <div id="About">
        <div className="About_wrapper">
          <div className="About_header"></div>
          <div className="About_body">
            <div className="About_body_col_1">
              <ScrollAnimation animateIn="fadeInUp">
                <img
                  src={Wynstudent}
                  className="Wynstudent_image"
                  alt="portrait"
                />
              </ScrollAnimation>
            </div>
            <div className="About_body_col_2">
              <ScrollAnimation animateIn="fadeInUp">
                <h1>A bit about me</h1>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <p>
                  Growing up in sunny South Florida, I attended Florida
                  International University, where I earned my degree in business
                  management. Post-grad, I worked my way up the ladder to a
                  leadership position. Throughout this time, I helped my company
                  achieve record breaking results and client retention.
                </p>
              </ScrollAnimation>
              <br></br>
              <ScrollAnimation animateIn="fadeInUp">
                <p>
                  Craving a career that would allow me to exercise my problem
                  solving skills and creativity, I transitioned into web
                  development. When I'm not building (or debugging) meaningful
                  apps, I'm probably hanging out with my dog or at the beach.
                </p>
              </ScrollAnimation>
              <div className="About_bubbles">
                <ScrollAnimation animateIn="bounceInRight">
                  <div className="Bubbles">
                    <img src={Code} alt="code icon" className="About_icon" />
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="bounceInRight" delay={100}>
                  <div className="Bubbles">
                    <img src={Paw} alt="code icon" className="About_icon" />
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="bounceInRight" delay={200}>
                  <div className="Bubbles">
                    <img src={Sun} alt="sun icon" className="About_icon" />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
