import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Event from "../components/event"

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 61.8vh;
  max-height: 400px;
  background: #e1e1e1;
  font-size: 2em;
  overflow: hidden;
`

const Wrapper = styled.div`
  width: calc(100% - 10vmin);
  margin: 0 auto;
  padding: 5vmin 0;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5vmin;
`
class EventIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allContentfulEvent.edges")

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Title>Events</Title>
        <Wrapper>
          <List>
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <Event event={node} />
                </li>
              )
            })}
          </List>
        </Wrapper>
      </Layout>
    )
  }
}

export default EventIndex

export const pageQuery = graphql`
  query EventIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulEvent(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
