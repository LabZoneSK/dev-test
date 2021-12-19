import React, {FC} from 'react';

import {Button} from '../'

import * as S from './styled'
import DOMPurify from "dompurify";

type TProps = {
  image: string
  title: string
  description: string
  link: string
}

const ImageCard:FC<TProps> = ({image, title, description, link}) => {
  const descriptionIMGLess = description.replace(/<img.*?>/gi,'')
  const createMarkup = () => ({ __html: DOMPurify.sanitize(descriptionIMGLess) })
  return (
    <S.Container>
      <S.Image src={image} alt={title}/>
      <S.Description>
        <S.Title>{title}</S.Title>
        <S.Text dangerouslySetInnerHTML={createMarkup()} />
        <Button link={link}/>
      </S.Description>
    </S.Container>
  )
}

export default ImageCard;
