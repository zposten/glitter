import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import {Layout} from 'components/layout'
import {Navigation} from 'components'
import {DevelopmentCredit} from 'sections/home'

const Glitter = styled.div`
  font-size: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 50px);
`

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Kierstyn Robbins</title>
        </Head>
        <Navigation />
        <Glitter>Glitter</Glitter>
        <DevelopmentCredit />
      </Layout>
    )
  }
}
