import React from "react"
import Navbar from "./Navbar/Navbar"
import PropTypes from "prop-types"
import "../styles/layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Navbar/>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
