import React from 'react'
import styled from 'styled-components'

interface LoaderProps {
  text?: string
}

const Loader: React.FC<LoaderProps> = (props) => {
  const { text } = props

  return (
    <BaseLoader>
      <StyledLoader>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </StyledLoader>
      <p>{text ? text : 'Loading...'}</p>
    </BaseLoader>
  )
}

const BaseLoader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80vh;

  p {
    font-size: 20px;
    padding-top: 15px;
  }
`
const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 84px;
    height: 84px;
    margin: 8px;
    border: 8px solid #222222;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #222222 transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  p {
    text-align: center;
  }
`

export default Loader
