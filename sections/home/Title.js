import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {green, pink, purple} from 'general/theme'

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  margin-top: 50px;
  height: 450px;
  width: 575px;
`

const Squares = styled.div`
  width: calc(100% - 100px);
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`

const squareSize = '400px'
const Square = styled.div`
  position: absolute;
  width: ${squareSize};
  height: ${squareSize};
  background: ${p => p.color};
  bottom: 0;
  right: 0;
  opacity: 0.3;

  &:last-child {
    top: 0;
    left: 0;
    bottom: auto;
    right: auto;
    opacity: 1;
  }
`

const postItSize = 250
const PostIt = styled.div`
  width: ${postItSize}px;
  height: ${postItSize}px;
  background: ${p => p.color};
  display: flex;
  align-items: center;
  z-index: 3;
  position: absolute;
  right: 0;
  top: calc(50% - ${postItSize / 2}px);
  padding: 0 30px;
  box-sizing: border-box;
  font-size: 24px;
  box-shadow: 5px 7px 10px 1px #00000022;
`

export function Title({src, backColor, postItColor}) {
  return (
    <Wrapper>
      <Squares>
        <Square color={backColor} />
        <Square color={green} />
      </Squares>
      <PostIt color={postItColor}>
        Hi,
        <br /> My name is Kierstyn
      </PostIt>
    </Wrapper>
  )
}

Title.propTypes = {
  src: PropTypes.string,
  backColor: PropTypes.string,
  postItColor: PropTypes.string,
}

Title.defaultProps = {
  backColor: purple,
  postItColor: pink,
}
