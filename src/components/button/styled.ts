import styled from "styled-components";
import {flex} from "../../styles/mixin.styled";

export const Button = styled.a`
  width: 14.6875rem;
  height: 2.75rem;
  ${flex({justify: 'center', align: 'center'})};
  border: none;
  text-align: center;
  background: #F5F5F5;
  border-radius: .1875rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1875rem;
  color: ${({theme}) => theme.colors.secondary};

  &:hover {
    border: 1px solid ${({theme}) => theme.colors.secondary};
  }
`
/*TODO при наведении "прыгает" текст*/
