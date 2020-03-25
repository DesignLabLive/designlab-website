import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"
import Img from "gatsby-image"
import Layout from "../components/layout"

import styled from "@emotion/styled"

const Hero = styled.div`
  position: relative;
  color: ${props => props.theme.colors.white};
  text-align: center;
`

class EventTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulEvent")
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <Hero>
            <Img
              style={{ height: " 61.8vh", maxHeight: "400px" }}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </Hero>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: "block",
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default EventTemplate

export const pageQuery = graphql`
  query EventBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulEvent(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
