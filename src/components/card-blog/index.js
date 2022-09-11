import React from 'react'
import styled from 'styled-components'
import ImageWithFallback from '../image-with-fallback'
import { Link } from 'react-router-dom'

const CardNewsContainer = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #e0e0e0;
  &:hover {
    cursor: pointer;
  }
  padding: 15px;
  color: #828282;
`

const CardNewsTitle = styled.p`
  display: inline-block;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  color: #000;
  border-radius: 4px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 35px;
`

const CardNewsLabel = styled.p`
  font-size: 12px;
  margin: 10px 0;
  text-transform: capitalize;
`

export default function CardBlog({
  linkTo,
  imageSrc,
  imageHeight,
  title,
  label,
}) {
  return (
    <Link to={linkTo}>
      <CardNewsContainer>
        <ImageWithFallback
          src={imageSrc}
          alt="card-img"
          imageHeight={imageHeight}
        />
        <CardNewsLabel>{label}</CardNewsLabel>
        <CardNewsTitle>{title}</CardNewsTitle>
      </CardNewsContainer>
    </Link>
  )
}
