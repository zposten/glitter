import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import {Layout, PageLayout} from 'components/layout'
import {Navigation} from 'components'
import {DevelopmentCredit} from 'sections/home'
import {green, pink, purple} from 'general/theme'

const Glitter = styled.div`
  font-size: 72px;
  height: 300px;
  background: linear-gradient(${pink}, white);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

const Header = styled.div`
  position: relative;
  margin: auto;
  margin-top: 50px;
  height: 450px;
  width: 575px;
`

const Squares = styled.div`
  width: 500px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`

const squareSize = '400px'
const Square = styled.div`
  width: ${squareSize};
  height: ${squareSize};
  background: ${p => p.color};
  ${p => (p.isTop ? {top: 0, left: 0} : {bottom: 0, right: 0})}
  ${p => p.isTop && {zIndex: 2}}
  position: absolute;
`

const postItSize = 250
const PostIt = styled.div`
  width: ${postItSize}px;
  height: ${postItSize}px;
  background: ${purple};
  display: flex;
  align-items: center;
  z-index: 3;
  position: absolute;
  right: 0;
  top: calc(50% - ${postItSize / 2}px);
  padding: 0 30px;
  box-sizing: border-box;
  font-size: 24px;
`

export default class Index extends React.Component {
  render() {
    return (
      <PageLayout>
        <Head>
          <title>Kierstyn Robbins</title>
        </Head>
        <Glitter />
        <Header>
          <Squares>
            <Square color={green} isTop />
            <Square color={pink} />
          </Squares>
          <PostIt>Hi, My name is Kierstyn</PostIt>
        </Header>
        <DevelopmentCredit />
      </PageLayout>
    )
  }
}
