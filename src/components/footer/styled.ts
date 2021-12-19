import styled from "styled-components";

import {flex} from "../../styles/mixin.styled";

export const Footer = styled.header`
  height: 4rem;
  ${flex({justify: 'center', align: 'center'})};
  background: ${({theme}) => theme.colors.secondary};
`

export const FooterText = styled.h1`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: 0;
  color: #fff;
`
