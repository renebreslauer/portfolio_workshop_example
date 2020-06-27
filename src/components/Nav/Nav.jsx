import React from 'react'
import './Nav.scss'

class Nav extends React.Component {
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
      <div className={this.state.hasScrolled ? 'Nav NavScrolled' : 'Nav'}>
        <div className="Nav_Group">
          <a
            href="#Home"
            class="Nav_Group_Link"
            activeClassName="Nav_Group_Link_active"
          >
            Home
          </a>
          <a
            href="#Skills"
            class="Nav_Group_Link"
            activeClassName="Nav_Group_Link_active"
          >
            Skills
          </a>
          <a
            href="#Projects"
            class="Nav_Group_Link"
            activeClassName="Nav_Group_Link_active"
          >
            Projects
          </a>
          <a
            href="#About"
            class="Nav_Group_Link"
            activeClassName="Nav_Group_Link_active"
          >
            About
          </a>
          <a
            href="#Contact"
            class="Nav_Group_Link"
            activeClassName="Nav_Group_Link_active"
          >
            Contact
          </a>
        </div>
      </div>
    )
  }
}

export default Nav
