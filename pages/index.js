import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import {Layout, PageLayout} from 'components/layout'
import {Navigation} from 'components'
import {DevelopmentCredit} from 'sections/home'
import {green, pink, purple} from 'general/theme'
import {Title} from 'sections/home'

const Gradient = styled.div`
  font-size: 72px;
  height: 300px;
  background: linear-gradient(${pink}, white);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

export default class Index extends React.Component {
  render() {
    return (
      <PageLayout>
        <Head>
          <title>Kierstyn Robbins</title>
        </Head>
        <Gradient />
        <Title />
        <DevelopmentCredit />
      </PageLayout>
    )
  }
}
