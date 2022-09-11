import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const TitleAbout = styled.h2`
  color: #00569c;
  padding: 0 5px;
  border-radius: 5px;
  span {
    color: #f26624;
  }
  text-align: ${(props) => props.align || 'left'};
`

export default function CarouselTestimoni({ data, isMobile }) {
  const settings = {
    // autoplay: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  }

  return (
    <div className="py-0 mb-5 bg-dark hero-header wow fadeInUp">
      <TitleAbout align="center">
        Testimoni Penerima <span>Manfaat</span>
      </TitleAbout>
      <div className="Testimoni-testimoni">
        <Slider {...settings}>
          {data &&
            data.map((item, idx) => (
              <div key={String(idx)}>
                <div className="col-md-12">
                  <div className="box-testimoni">
                    <p className="desc">{`"${item.desc}"`}</p>
                    <p className="name">{item.name}</p>
                    <p className="as">{item.as}</p>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <style>
        {`
          .box-testimoni {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            background: #F1FCFF;
            margin: 15px;
            padding: 15px;
            border-radius: 5px;
            height: ${isMobile ? '550px' : '300px'};
          }

          .box-testimoni p.name {
            color: #000;
            font-weight: 500;
            margin: 15px 0;
            padding: 0;
          }

          .box-testimoni p.desc {
            margin: 0;
            padding: 0;
          }

          .box-testimoni p.as {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  )
}
