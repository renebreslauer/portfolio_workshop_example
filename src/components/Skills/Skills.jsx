import React from 'react'
import './Skills.scss'

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

export default Home
