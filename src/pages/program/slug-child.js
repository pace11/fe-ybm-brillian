import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CarouselTestimoni from './carousel-testimoni'
import ImageWithFallback from '../../components/image-with-fallback'
import styled from 'styled-components'
import { mobileVersion } from '../../utils/helpers'
import { program } from '../../__json__'

const TitleAbout = styled.h2`
  color: #00569c;
  padding: 5px 0;
  border-radius: 5px;
  margin: 0;
  span {
    color: #f26624;
  }
  text-align: ${(props) => props.align || 'left'};
`

export default function Slug() {
  const { slug, slugChild } = useParams()
  const { dynamicWidth } = mobileVersion()
  const isMobile = dynamicWidth <= 425 ? true : false
  const [detail, setDetail] = useState()
  const [subDetail, setSubDetail] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (slug) {
      setDetail(program.filter((item) => item.slug === slug)[0])
    }
  }, [slug])

  useEffect(() => {
    if (detail) {
      const get = detail.items
      setSubDetail(get.filter((item) => item.slug === slugChild)[0])
    }
  }, [detail, slugChild])

  if (!subDetail) return null

  return (
    <React.Fragment>
      <div class="py-5 wow fadeInUp" style={{ marginTop: '-100px' }}>
        <ImageWithFallback
          src={subDetail?.banner}
          alt="banner-program-detail"
          imageHeight={isMobile ? '150px' : '500px'}
        />
      </div>
      <div class="container-xxl py-5 wow fadeInUp">
        <div class="container">
          <div
            class="row align-items-center g-5"
            style={{ marginRight: 0, marginLeft: 0 }}
          >
            <div class="col-lg-6 d-flex align-items-center justify-content-center">
              <picture>
                <img
                  src={subDetail?.urlImage}
                  alt=""
                  height={isMobile ? '150px' : '350px'}
                />
              </picture>
            </div>
            <div class="col-lg-6 text-center text-lg-start animated slideInRight">
              <TitleAbout align={isMobile ? 'center' : 'left'}>
                {subDetail?.title}
              </TitleAbout>
              <p>{subDetail?.desc_short}</p>
              <p class="mb-4 pb-2 mt-4">{subDetail?.desc_long}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 wow fadeInUp">
        <TitleAbout align="center">{subDetail?.benefit?.title}</TitleAbout>
        <div class="container mt-5">
          <div class="row align-items-start justify-content-center">
            {subDetail?.benefit?.items.map((item, idx) => (
              <div
                key={String(idx)}
                class="col-lg-3 col-md-3 m-2 service-item rounded p-3"
                data-wow-delay="0.1s"
              >
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 wow fadeInUp">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 d-flex align-items-center justify-content-center">
              <h2>Penerima Manfaat</h2>
              <h2
                style={{
                  textAlign: 'center',
                  color: '#116EC9',
                  marginLeft: '50px',
                }}
              >
                {subDetail?.benefit?.manfaat}
              </h2>
            </div>
          </div>
        </div>
      </div>
      {subDetail?.portofolio?.title !== null &&
        subDetail?.portofolio?.desc !== null &&
        subDetail?.portofolio?.images !== null && (
          <div class="container-xxl py-5 wow fadeInUp">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-md-6 d-flex align-items-start justify-content-center list-group">
                  <h3>{subDetail?.portofolio?.title}</h3>
                  <p>{subDetail?.portofolio?.desc}</p>
                </div>
                <div class="col-lg-6 col-md-6 d-flex align-items-start justify-content-center">
                  <picture>
                    <img className="img-porto" src={subDetail?.portofolio?.images} alt="" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        )}
      {subDetail?.portofolio?.items !== null && (
        <div class="container-xxl py-5 wow fadeInUp">
          <div class="container">
            <div class="row">
              {subDetail?.portofolio?.items.map((item, idx) => (
                <div key={String(idx)} class="col-lg-3 col-md-3 box-porto">
                  <picture>
                    <img src={item?.imgUrl} alt="" height="180" />
                  </picture>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <CarouselTestimoni data={subDetail?.testimoni} isMobile={isMobile} />
      <style>
        {`
          .box-porto {
            margin-bottom: 20px;
          }
          .box-porto picture img {
            width: 100%;
            object-fit: cover;
          }
          .img-porto {
            height: 400px;
          }

          @media(max-width: 425px) {
            .img-porto {
              height: 200px;
            }
          }
        `}
      </style>
    </React.Fragment>
  )
}
