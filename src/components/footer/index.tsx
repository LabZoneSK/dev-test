import {memo} from 'react'

import * as S from './styled'

const Footer=()=>(
  <S.Footer>
    <S.FooterText> Images are from Flickr.</S.FooterText>
  </S.Footer>
)

export default memo(Footer)
