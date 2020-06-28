import React from 'react'
import './Projects.scss'

class Projects extends React.Component {
  render() {
    return (
      <div id="Projects">
        <div className="Projects_header">
          <div className="Projects_header_wrapper">
            <h1>
              While my passion lies on the front-end, I have experience working
              with back-end languges, as well.
            </h1>
          </div>
        </div>
        <div className="Projects_body">
          <div className="Projects_body_col_1">
            <h2>Projects</h2>
          </div>
          <div className="Projects_body_col_2">
            <h2>HTML</h2>
            <h2>CSS</h2>
            <h2>JavaScript</h2>
            <h2>React</h2>
            <h2>Node</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
