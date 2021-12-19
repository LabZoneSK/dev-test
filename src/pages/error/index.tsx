import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import * as S from './styled'

const Error = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <S.Error>
      <S.ErrorText>Oops Something went wrong!</S.ErrorText>
    </S.Error>
  )
}


export default Error
