import React from "react"
import styled from "@emotion/styled"
import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle"
import { TwitterWithCircle } from "@styled-icons/entypo-social/TwitterWithCircle"
import { FacebookWithCircle } from "@styled-icons/entypo-social/FacebookWithCircle"

const Container = styled.div`
  background-color: ${props => props.theme.colors.lightbackground};
`

const FooterRow = styled.footer`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0 3em;
  }
`

const SocialList = styled.ul``

const SocialItem = styled.a`
  display: inline-block;
  list-style: none;
  margin: 0 10px;
  color: ${props => props.theme.colors.black};
`
const Footer = () => {
  return (
    <Container>
      <FooterRow>
        <SocialList>
          <SocialItem
            href="https://www.instagram.com/designlablive/"
            target="_blank"
          >
            <InstagramWithCircle size="30" />
          </SocialItem>
          <SocialItem href="https://twitter.com/designlablive" target="_blank">
            <TwitterWithCircle size="30" />
          </SocialItem>
          <SocialItem
            href="https://www.facebook.com/Design-Lab-235200070181237"
            target="_blank"
          >
            <FacebookWithCircle size="30" />
          </SocialItem>
        </SocialList>
      </FooterRow>
      <FooterRow>
        © {new Date().getFullYear()}
        {` `} Design Lab Vancouver
      </FooterRow>
    </Container>
  )
}
export default Footer
