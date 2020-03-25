import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const PreviewTitle = styled.h3`
  background-image: linear-gradient(to bottom, transparent 65%, #fcf113 0);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  text-decoration: none;
  transition: background-size 0.4s ease;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
`

const Tag = styled.p`
  color: #a0a0a0;
  text-decoration: none;
  display: inline-block;
  padding: 0.33333rem 0.5rem;
  line-height: 1;
  border-radius: 2px;
  border: 1px solid #a0a0a0;
  margin-right: 0.5em;
`

export default ({ event }) => (
  <div>
    <Img alt="" fluid={event.heroImage.fluid} />
    <PreviewTitle>
      <StyledLink to={`/events/${event.slug}`}>{event.title}</StyledLink>
    </PreviewTitle>
    <small>{event.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: event.description.childMarkdownRemark.html,
      }}
    />
    {event.tags && event.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
  </div>
)
