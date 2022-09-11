import React from 'react'
import styled from 'styled-components'
import ImageWithFallback from '../image-with-fallback'
import { dateIndonesia } from '../../utils/helpers'
import { Link } from 'react-router-dom'

const CardNewsSidebarContainer = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #e0e0e0;
  &:hover {
    cursor: pointer;
  }
  color: #828282;
`

const CardNewsTitle = styled.p`
  font-size: 30px;
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
  display: flex;
  font-size: 14px;
  margin: 0;
  padding: 10px;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  span {
    font-weight: 600;
  }
`

export default function CardNewsSidebar({
  linkTo,
  imageSrc,
  imageHeight,
  title,
  desc,
}) {
  return (
    <Link to={linkTo}>
      <CardNewsSidebarContainer>
        <ImageWithFallback
          src={imageSrc}
          alt="card-img"
          imageHeight={imageHeight}
        />
        <CardNewsTitle>{title}</CardNewsTitle>
        <CardNewsDate>
          <span>Admin</span> | {dateIndonesia(desc)}
        </CardNewsDate>
      </CardNewsSidebarContainer>
    </Link>
  )
}
