import styled from "styled-components";

import {flex} from "../../styles/mixin.styled";

export const CardContainer = styled.section`
  ${flex({justify: 'space-between', align: 'flex-start'})};
  flex-wrap: wrap;
  background: #EFEFEF;
  padding: 5rem 4.75rem;
  @media (max-width: 64em) {
    justify-content: center;
    align-items: center;
  }
`
