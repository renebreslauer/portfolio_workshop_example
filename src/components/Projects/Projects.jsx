import React from 'react'
import './Projects.scss'
import ScrollAnimation from 'react-animate-on-scroll'
import { HeaderText } from '../Snippets/index'
import MissionBooked from '../../assets/missionbooked.gif'
import Furever from '../../assets/furever.gif'

class Projects extends React.Component {
  render() {
    return (
      <div id="Projects">
        <div className="Projects_header">
          <div className="Projects_header_wrapper"></div>
        </div>
        <div className="Projects_body">
          <div className="Projects_body_col_1">
            <div className="Projects_title">
              <ScrollAnimation animateIn="bounceIn">
                <HeaderText text="Projects" />
              </ScrollAnimation>
            </div>

            <p>
              <ScrollAnimation animateIn="fadeInUp">
                <p>These are some of the projects I'm the most proud of.</p>
              </ScrollAnimation>
            </p>
          </div>
          <div className="Projects_body_col_2">
            <ScrollAnimation animateIn="fadeInUp">
              <div className="project_container">
                <img
                  src={MissionBooked}
                  className="project"
                  alt="Mission Booked Project"
                />
                <div className="projects_text">
                  <p>
                    Created while at Wyncode Academy, Mission Booked is a
                    React-Rails app with a PostgreSQL database. It is designed
                    to help people find volunteer opportunities and charitable
                    organizations tailored to their interests.
                  </p>
                </div>
              </div>
              <div className="project_links">
                <a href="#">Live Site</a>
                <a href="#">Source Code</a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp">
              <div className="project_container">
                <img src={Furever} className="project" alt="Furever Project" />
                <div className="projects_text">
                  <p>
                    Created while at Wyncode Academy, Mission Booked is a
                    React-Rails app with a PostgreSQL database. It is designed
                    to help people find volunteer opportunities and charitable
                    organizations tailored to their interests.
                  </p>
                </div>
              </div>
              <div className="project_links">
                <a href="#">Live Site</a>
                <a href="#">Source Code</a>
              </div>{' '}
            </ScrollAnimation>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
