import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import './Footer.scss'

library.add(fab)

class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Footer FooterScrolled' : 'Footer'}
      >
        <div className="Footer_group">
          <FontAwesomeIcon
            icon={['fab', 'github']}
            className="Footer_group_icon"
          />

          <FontAwesomeIcon
            icon={['fab', 'twitter']}
            className="Footer_group_icon"
          />
          <FontAwesomeIcon
            icon={['fab', 'linkedin-in']}
            className="Footer_group_icon"
          />
          <FontAwesomeIcon
            icon={['fab', 'behance']}
            className="Footer_group_icon"
          />
          <FontAwesomeIcon
            icon={['fab', 'dribbble']}
            className="Footer_group_icon"
          />
        </div>
      </div>
    )
  }
}

export default Footer
