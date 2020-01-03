import React from 'react'
import styled from 'styled-components'

export default function Homepage() {
  return (
    <Intro>
      <IntroDescription>
        <h1>Michael Patterson</h1>
        <a href="https://github.com/Mikepatt38" target="_blank" rel="no-follow"><img src="/static/github.svg" alt="Github Logo Icon" /></a><a href="https://www.linkedin.com/in/michael-j-patterson/" target="_blank" rel="no-follow"><img src="/static/linkedin.svg" alt="LinkedIn Logo Icon" /></a>
        <p>Hey <span role="img" aria-label="Wave Emoji">👋</span>, I'm Michael Patterson, welcome to the site!</p>
        <p>I'm currently a software engineer at Post Acute Analytics, building cool stuff with ReactJS, NodeJS, GraphQL, PostgresSQL, and other fun technologies.</p>
        <p>I'm a disciple of Jesus Christ, lover of the Dallas Cowboys, Apple fan boy, and fitness junkie.</p>
      </IntroDescription>
    </Intro>
  )
}

const Intro = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 414px) {
    margin-top: 0;
  }
`

const IntroDescription = styled.div`
  position: relative;
  width: auto;
  max-width: 720px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.16rem;
    line-height: 1.4;

    @media screen and (max-width: 320px) {
      font-size: 2rem;
    }
  }

  img {
    height: 25px;
    margin: 0 10px;
    transition: all 200ms ease-in-out;

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      transform: translateY(-3px);
      transition: all 250ms ease-in-out;
    }
  }

  p {
    line-height: 1.5;
    font-size: 1.1rem;
  }

  a {
    color: #f1404b;
    line-height: 1.5;
    font-size: 1.1rem;
    text-decoration: none;
  }

`
