import React from 'react'
import styled from 'styled-components'
import ImageWithFallback from '../image-with-fallback'

const CardNewsContainer = styled.div`
  width: ${props => props.isMobile ? "300px" : "500px"};
  height: auto;
  color: #828282;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 18%);
  padding: 10px;
  margin: 5px 0;
`

const CardNewsTitle = styled.p`
  display: inline-block;
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
`

export default function CardProgram({ imageSrc, imageHeight, title, desc, isMobile }) {
  return (
    <CardNewsContainer isMobile={isMobile}>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <ImageWithFallback
            src={imageSrc}
            alt="card-img"
            imageHeight={imageHeight}
            fit="contain"
          />
        </div>
        <div className={`col-lg-6 col-md-6 ${isMobile ? "d-flex justity-content-center align-items-center list-group p-5" : ""}`}>
          <CardNewsTitle isMobile={isMobile}>{title}</CardNewsTitle>
          <CardNewsDesc isMobile={isMobile}>{desc}</CardNewsDesc>
        </div>
      </div>
    </CardNewsContainer>
  )
}
