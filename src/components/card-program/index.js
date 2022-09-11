import React from 'react'
import styled from 'styled-components'
import ImageWithFallback from '../image-with-fallback'

const CardNewsContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  color: #828282;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 18%);
  padding: 10px;
`

const CardNewsTitle = styled.p`
  font-size: 20px;
  line-height: 1.2;
  margin: 15px 0 0 0;
  font-weight: 600;
  color: #116ec9;
`

const CardNewsDesc = styled.p`
  font-size: 16px;
  margin: 15px 0;
  color: #000;
  height: 120px;
`

export default function CardProgram({ imageSrc, imageHeight, title, desc, linkTo }) {
  return (
    <CardNewsContainer>
      <ImageWithFallback
        src={imageSrc}
        alt="card-img"
        imageHeight={imageHeight}
      />
      <CardNewsTitle>{title}</CardNewsTitle>
      <CardNewsDesc>{desc}</CardNewsDesc>
      <a href={linkTo} class="btn btn-primary" style={{ width: "100%" }}>Selengkapnya</a>
    </CardNewsContainer>
  )
}
