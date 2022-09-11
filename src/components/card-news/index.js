import React from 'react'
import styled from 'styled-components'
import ImageWithFallback from '../image-with-fallback'
import { dateIndonesia } from '../../utils/helpers'
import { Link } from 'react-router-dom'

const CardNewsContainer = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #e0e0e0;
  &:hover {
    cursor: pointer;
  }
  color: #828282;
`

const CardNewsTitle = styled.p`
  font-size: 18px;
  line-height: 1.2;
  margin: 5px 0;
  padding: 10px;
  font-weight: 500;
  color: #333333;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 75px;
  transition: all 0.2s ease;
  &:hover {
    color: #f2994a;
  }
`

const CardNewsDate = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 10px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export default function CardNews({
  linkTo,
  imageSrc,
  imageHeight,
  title,
  desc,
}) {
  return (
    <Link to={linkTo}>
      <CardNewsContainer>
        <ImageWithFallback
          src={imageSrc}
          alt="card-img"
          imageHeight={imageHeight}
        />
        <CardNewsTitle>{title}</CardNewsTitle>
        <CardNewsDate>{dateIndonesia(desc)}</CardNewsDate>
      </CardNewsContainer>
    </Link>
  )
}
