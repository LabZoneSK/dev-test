import {memo} from 'react'

import * as S from './styled'

const Header=()=>(
  <S.Header>
    <S.HeaderText>Flick app</S.HeaderText>
  </S.Header>
)

export default memo(Header)
