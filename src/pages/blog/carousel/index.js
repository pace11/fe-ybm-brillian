import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import ImageWithFallback from '../../../components/image-with-fallback'

const TitleCarousel = styled.a`
  display: inline-block;
  font-size: 45px;
  font-weight: 700;
  color: #000;
  padding: 10px;
  text-align: left;
  width: 100%;
  margin: 20px 0 0 0;
  padding: 0;
  &:hover {
    cursor: pointer;
    color: #fea116;
  }
`

const DescCarousel = styled.p`
  font-size: 18px;
  margin: 5px 0;
  // padding: 10px;
  font-weight: 400;
  color: #333333;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  height: 160px;
  transition: all 0.2s ease;
`

export default function Carousel({ data }) {
  const settings = {
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  }

  if (data && data.length === 0) return null

  return (
    <div className="container-xxl py-0 hero-header wow fadeInUp">
      <div className="container my-5 py-5 carousel-blog">
        <Slider {...settings}>
          {data &&
            data.map((item, idx) => (
              <div key={String(idx)}>
                <div className="col-md-12">
                  <div className="row box-carousel">
                    <div className="col-lg-6 col-md-6">
                      <ImageWithFallback
                        src={`${process.env.REACT_APP_IMAGE_BLOG}/${item.image}`}
                        alt={item.image}
                        imageHeight="500px"
                      />
                      {/* <div className="box-label">
                        <TitleCarousel>{item.name}</TitleCarousel>
                        <LabelCarousel>
                          <span>
                            {new Date(item.created_at).toDateString()},
                          </span>
                          <span>
                            <i class="fa fa-paperclip"></i>{' '}
                            {item?.blog_type?.name}
                          </span>
                        </LabelCarousel>
                      </div> */}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <TitleCarousel href={`/blog/${item.id}`}>
                        {item.name}
                      </TitleCarousel>
                      <DescCarousel>{item.deck}</DescCarousel>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <style>
        {`
          .carousel-blog .slick-slider ul.slick-dots {
            text-align: left;
            margin: 0 0 0 -10px;
            bottom: -20px;
          }

          .carousel-blog .slick-slider ul.slick-dots li {
            width: 10px;
            height: 10px;
          }

          .carousel-blog .slick-slider ul.slick-dots li button:before {
            font-size: 12px;
          }

          .box-carousel {
            position: relative;
            padding: 0;
          }

          .box-carousel .box-label {
            background-color: rgba(0,0,0,0.2);
            position: absolute;
            z-index: 1;
            bottom: 0;
            width: 100%;
            box-sizing: border-box;
            padding: 0 15px;
          }
        `}
      </style>
    </div>
  )
}
