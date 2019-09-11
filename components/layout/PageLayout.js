import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {Layout} from './'
import {Navigation} from 'components'

const Wrapper = styled.div`
  position: relative;
  font-family: Roboto, Arial;
`

export function PageLayout(props) {
  return (
    <Layout>
      <Navigation />
      <Wrapper>{props.children}</Wrapper>
    </Layout>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node,
}
