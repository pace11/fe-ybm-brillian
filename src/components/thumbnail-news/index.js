import React from 'react'
import styled from 'styled-components'
import ImageWithFallback from '../image-with-fallback'
import { dateIndonesia } from '../../utils/helpers'
import { Link } from 'react-router-dom'

const ThumbnailNewsContainer = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 50px;
`

const ThumbnailNewsTitleContainer = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: auto;
  width: 250px;
  border-radius: 5px;
  background: #fff;
`

const ThumbnailNewsTitle = styled.p`
  font-size: 18px;
  margin: 5px 0;
  padding: 0;
  word-break: break-word;
  text-align: center;
  overflow: hidden;
  color: #828282;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  span {
    font-weight: 600;
  }
`

export default function CardNews({ imageSrc, imageHeight, date, linkTo }) {
  return (
    <Link to={linkTo}>
      <ThumbnailNewsContainer>
        <ImageWithFallback
          src={imageSrc}
          alt="card-img"
          imageHeight={imageHeight}
        />
        <ThumbnailNewsTitleContainer>
          <ThumbnailNewsTitle>
            <span>Admin</span> | {dateIndonesia(date)}
          </ThumbnailNewsTitle>
        </ThumbnailNewsTitleContainer>
      </ThumbnailNewsContainer>
    </Link>
  )
}
