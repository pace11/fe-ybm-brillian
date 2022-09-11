import React from 'react'
import styled from 'styled-components'
import ImageWithFallback from '../image-with-fallback'
import { dateIndonesia } from '../../utils/helpers'
import { Link } from 'react-router-dom'

const CardNewsContainer = styled.div`
  width: 100%;
  height: auto;
  &:hover {
    cursor: pointer;
  }
  color: #828282;
`

const CardNewsTitle = styled.p`
  font-size: 18px;
  line-height: 1.2;
  padding: 10px;
  font-weight: 500;
  color: #333333;
`

const CardNewsDesc = styled.p`
  font-size: 14px;
  padding: 0 10px;
  font-weight: 400;
  color: #333333;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  min-height: auto;
  max-height: 60px;
`

const CardNewsLabel = styled.p`
  font-size: 12px;
  padding: 10px;
  font-weight: 400;
  color: #828282;
`

export default function CardNewsList({
  linkTo,
  imageSrc,
  imageHeight,
  title,
  desc,
  date,
}) {
  return (
    <Link to={linkTo}>
      <CardNewsContainer>
        <div className="row">
          <div className="col-md-5 col-lg-5">
            <ImageWithFallback
              src={imageSrc}
              alt="card-img"
              imageHeight={imageHeight}
            />
          </div>
          <div className="col-md-7 col-lg-7 d-flex list-group">
            <CardNewsTitle>{title}</CardNewsTitle>
            <CardNewsDesc>{desc}</CardNewsDesc>
            <CardNewsLabel>Admin | {dateIndonesia(date)}</CardNewsLabel>
          </div>
        </div>
      </CardNewsContainer>
    </Link>
  )
}
