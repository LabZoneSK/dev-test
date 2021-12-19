import {FC} from "react";

import * as S from './styled';

type TProps = {
  link: string
}

const Button: FC<TProps> = ({link}) => (
  <S.Button href={link} target="_blank">
    Explore ➔
  </S.Button>
);

export default Button;
