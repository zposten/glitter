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

const Squares = styled.div`
  width: 500px;
  height: 450px;
  position: relative;
  margin: auto;
  margin-top: 50px;
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

export default class Index extends React.Component {
  render() {
    return (
      <PageLayout>
        <Head>
          <title>Kierstyn Robbins</title>
        </Head>
        <Glitter />
        <Squares>
          <Square color={green} isTop />
          <Square color={pink} />
        </Squares>
        <DevelopmentCredit />
      </PageLayout>
    )
  }
}
