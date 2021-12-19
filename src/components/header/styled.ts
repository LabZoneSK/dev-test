import styled from "styled-components";

import {flex} from "../../styles/mixin.styled";

export const Header = styled.header`
  ${flex({justify: 'flex-start', align: 'center'})};
  height: 4rem;
  padding-left: 1.5rem;
  background: #2C2C2C;
`

export const HeaderText = styled.h1`
  font-size: 1.175rem;
  font-weight: 400;
  line-height: 2.125rem;
  letter-spacing: 0;
  color: #fff;
`
