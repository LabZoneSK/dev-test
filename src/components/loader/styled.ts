import styled, {keyframes} from "styled-components";

import {flex} from "../../styles/mixin.styled";

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loader = styled.section`
  margin: 0 auto;
  border: 16px solid ${({theme}) => theme.colors.lighterGrayColor};
  border-top: 16px solid ${({theme}) => theme.colors.blueColor};
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  animation: ${Spin} 2s linear infinite;
`

export const LoaderContainer = styled.article`
  width: 100vw;
  height: 100vh;
  ${flex({justify: 'center', align: 'center'})}
`
