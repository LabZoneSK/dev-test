import styled from "styled-components";
import {flex} from "../../styles/mixin.styled";

export const Container = styled.figure`
  ${flex({justify: 'center', align: 'flex-start'})};
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0 .6px .9rem rgba(0, 0, 0, 0.08);
  width: 17.875rem;
  transition: all .6s ease-in;
  opacity: .8;
  margin-bottom: 1rem;
  &:hover{
    transform: scale(1.05);
    opacity: 1;
  }
  @media (max-width: 64em) {
    margin: 1rem;
  }
`
export const Description = styled.div`
  ${flex({justify: 'center', align: 'flex-start'})};
  flex-direction: column;
  padding: 1.375rem 1.5rem 1.25rem 1.6875rem;
  background: #FFFFFF;
`
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 9.625rem;
`
export const Title = styled.h2`
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0;
`
export const Text = styled.p`
  padding: 1.1875rem 0 1.3125rem;
  max-width: 12.875rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1875rem;
  letter-spacing: 0;
`
