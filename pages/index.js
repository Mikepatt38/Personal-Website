import React from 'react'
import styled from 'styled-components'

export default function Homepage() {
  return (
    <Intro>
      <IntroDescription>
        <h1>Michael Patterson</h1>
        <a href="https://github.com/Mikepatt38" target="_blank" rel="no-follow"><img src="/static/github.svg" alt="Github Logo Icon" /></a><a href="https://www.linkedin.com/in/michael-j-patterson/" target="_blank" rel="no-follow"><img src="/static/linkedin.svg" alt="LinkedIn Logo Icon" /></a>
        <p>Hey <span role="img" aria-label="Wave Emoji">👋</span>, I'm a software developer that primarily focuses on front end development using javascript and cool libraries like React with over 3 years experience.</p>
        <p>I'm currently looking <span role="img" aria-label="Eyes Looking Emoji"> 👀</span>to join a team as a software developer working with javascript, if you think you know a position that would be a good fit, <a href="mailto:mjpatt381@gmail.com">send me a quick message.</a></p>
        <p>I'm a disciple of Jesus Christ, lover of the Dallas Cowboys, Apple fan boy, and fitness junkie.</p>
        <p>Recently I've built <a href="https://prep2wrapjobs.com" target="_blank" rel="no_follow">Prep2Wrap</a>, a SaaS product for a startup in Los Angeles, and multiple react websites.</p>
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
    color: #4A90E2;
    line-height: 1.5;
    font-size: 1.1rem;
    text-decoration: none;
  }

`
