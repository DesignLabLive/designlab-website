import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  display: table;
  width: 100%;
  height: 100%;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0;
    grid-column: 1 / -1;
    display: grid;
  }
`
const Banner = styled.img`
  position: relative;
  top: 0%;
  left: -19%;
  width: 65%;
  transform: rotate(-10deg);
  display: table;
  text-align: center;
  animation: banner-in 2s;
`

const Illustration = styled.div`
  background-color: ${props => props.theme.colors.lightbackground};
  min-height: 200px;
  margin-top: -15%;
`

const Featured = styled.div`
  text-align: center;

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0;
    grid-column: 1 / -1;
    display: grid;
  }
`

export default ({ data }) => (
  <Container>
    <Banner src="https://raw.githubusercontent.com/Azmarie/Test/master/icon.png?token=AG6H4EAOSOYEZQAIDB5MEIC6QKI22" />
    <Illustration />
    <Featured>
      <h3>{data.title}</h3>
      <p>{data.shortBio.shortBio}</p>
    </Featured>
  </Container>
)
