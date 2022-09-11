import React from 'react'
import Slider from 'react-slick'

export default function Carousel({ data, isMobile }) {
  const settings = {
    // dots: true,
    autoplay: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className="py-5 bg-dark hero-header wow fadeInUp">
      <div className="carousel-about-us">
        <Slider {...settings}>
          {data &&
            data.map((item, idx) => (
              <div key={String(idx)}>
                <div className="col-md-12 d-flex align-items-start justify-content-center">
                  <div className="card-award">
                    <img
                      src={item.urlImage}
                      alt={`img-penghargaan-${idx}`}
                      height="250px"
                    />
                    <p className="title">{item.title}</p>
                    <p className="year">{item.year}</p>
                    <p className="desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <style>
        {`
          .carousel-about-us .slick-slider ul.slick-dots li button:before {
            font-size: 14px;
          }

          .card-award {
            border: 1px solid #f2f2f2;
            border-radius: 4px;
            width: 280px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          .card-award .title {
            font-size: 36px;
            font-weight: 700;
            color: #F26624;
            margin: 0;
            padding: 0;
          }

          .card-award .year {
            font-size: 16px;
            font-weight: 700;
            color: #000;
            margin: 0;
            padding: 0;
          }

          .card-award .desc {
            font-size: 14px;
            font-weight: 400;
            color: #4F4F4F;
            margin: 0 10px 10px 10px;
            padding: 0;
            text-align: center;
          }

          .carousel-about-us .slick-slider button.slick-prev {
            background: #fff !important;
            box-shadow: 0px 3px 10px rgba(145, 158, 171, 0.1);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            z-index: 1;
            left: -10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .carousel-about-us .slick-slider button.slick-prev:before {
            content: "";
            border: solid #00569c;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 5px;
            margin-left: 6px;
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
          }
          .carousel-about-us .slick-slider button.slick-next {
            background: #fff !important;
            box-shadow: 0px 3px 10px rgba(145, 158, 171, 0.1);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            z-index: 1;
            right: -10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .carousel-about-us .slick-slider button.slick-next:before {
            content: "";
            border: solid #00569c;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 5px;
            margin-right: 6px;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
          }
        `}
      </style>
    </div>
  )
}
