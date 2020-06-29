import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import smoothscroll from 'smoothscroll-polyfill'
import './Nav.scss'

smoothscroll.polyfill()

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
          <NavLink
            smooth
            exact
            to="/#Home"
            className="Nav_Group_Link"
            activeClassName="Nav_Group_Link_active"
          >
            Home
          </NavLink>
          <NavLink
            smooth
            to="/#About"
            className="Nav_Group_Link"
            activeClassName="Nav_Group_Link_active"
          >
            About
          </NavLink>
          <NavLink
            smooth
            to="/#Skills"
            class="Nav_Group_Link"
            activeClassName="Nav_Group_Link_active"
          >
            Skills
          </NavLink>
          <NavLink
            smooth
            to="/#Projects"
            class="Nav_Group_Link"
            activeClassName="Nav_Group_Link_active"
          >
            Projects
          </NavLink>

          <NavLink
            smooth
            to="/#Contact"
            class="Nav_Group_Link"
            activeClassName="Nav_Group_Link_active"
          >
            Contact
          </NavLink>
        </div>
      </div>
    )
  }
}

export default Nav
