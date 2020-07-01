import React from 'react'
import './Projects.scss'

class Projects extends React.Component {
  render() {
    return (
      <div id="Projects">
        <div className="Projects_header">
          <div className="Projects_header_wrapper"></div>
        </div>
        <div className="Projects_body">
          <div className="Projects_body_col_1">
            <h1>Projects</h1>
          </div>
          <div className="Projects_body_col_2">
            <div className="Project_container"></div>
            <div className="Project_container"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
