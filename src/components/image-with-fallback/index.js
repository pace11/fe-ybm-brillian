import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { toBase64, shimmerImgLoader } from '../../utils/helpers'

const ImageFb = styled.img`
  width: 100%;
  height: ${(props) => props.imageHeight || '200px'};
  margin: ${(props) => props.margin || '0'};
  object-fit: ${(props) => props.fit || 'cover'};
`

export default function ImageWithFallback({
  margin,
  src,
  alt,
  imageHeight,
  fit,
}) {
  const fallBackSrc = require('../../assets/image/image_not_found.png').default
  const [state, setState] = useState({
    imgUrl: null,
    isLoaded: false,
  })
  const changeImage = () => {
    setState((prevState) => ({
      ...prevState,
      imgUrl: fallBackSrc,
      isLoaded: true,
    }))
  }
  useEffect(() => {
    setState((prevState) => ({ ...prevState, imgUrl: src, isLoaded: true }))
  }, [src])

  return (
    <ImageFb
      src={
        !state.isLoaded
          ? `data:image/svg+xml;base64,${toBase64(shimmerImgLoader(400, 400))}`
          : state.imgUrl
      }
      alt={alt}
      margin={margin}
      onLoad={() => setState((prevState) => ({ ...prevState, isLoaded: true }))}
      onError={() => changeImage()}
      imageHeight={imageHeight}
      fit={fit}
    />
  )
}
