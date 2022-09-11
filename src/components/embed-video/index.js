import React from 'react'
import styled from 'styled-components'

const ThumbnailNewsContainer = styled.div`
  width: 100%;
  position: relative;
  height: 500px;
  &:hover {
    cursor: pointer;
  }
`

export default function EmbedVideo({ id }) {
  return (
    <ThumbnailNewsContainer>
      <iframe
        auto
        src={`https://www.youtube.com/embed/${id}?controls=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height="100%"
      ></iframe>
    </ThumbnailNewsContainer>
  )
}
