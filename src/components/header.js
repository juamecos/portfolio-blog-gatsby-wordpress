import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { GrHome, GrUser, GrServicePlay, GrMailOption } from "react-icons/gr"
import Logo from "./Logo"
import Menu from "./Menu"
import SocialMenu from "./SocialMenu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ebebeb`,
      marginBottom: `1.45rem`,
    }}
  >
    <Logo />
    <Menu />
    <SocialMenu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
