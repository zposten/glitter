import React from 'react'
import styled from 'styled-components'
import {secondary} from 'general/theme'

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background: ${secondary};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  opacity: 0.8;
`

const Link = styled.a`
  margin-left: 5px;
`

export function DevelopmentCredit() {
  return (
    <Wrapper>
      This site's beautiful design was programmed by
      <Link href="https://posten.io" target="_blank">
        Zach Posten
      </Link>
    </Wrapper>
  )
}
