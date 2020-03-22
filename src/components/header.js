import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/">{siteTitle}</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
