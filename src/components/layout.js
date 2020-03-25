import React from "react"
import styled from "@emotion/styled"

import Header from "./header"
import Footer from "./footer"

const Global = styled.body`
  @font-face {
    font-family: "Avenir";
    font-weight: 400;
    font-style: normal;
    src: url("/avenir-400.woff2") format("woff2");
    font-display: swap;
  }

  font-family: "Avenir", Tahoma, Arial, Helvetica, sans-serif;
  font-size: 1em;
  line-height: 1.65;
  margin: 0;
`
class Layout extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <Global>
        <Header />
        {children}
        <Footer />
      </Global>
    )
  }
}

export default Layout
