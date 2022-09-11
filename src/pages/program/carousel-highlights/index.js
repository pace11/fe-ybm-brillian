import React from 'react'
import Slider from 'react-slick'
import CardProgram from '../../../components/card-program-list'

export default function CarouselHighlights({ data, isMobile }) {
  const settings = {
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className="container-xxl py-5 hero-header wow fadeInUp">
      <div className="container carousel-highlights">
        <Slider {...settings}>
          {data &&
            data.map((item, idx) => (
              <div key={String(idx)}>
                <div className="col-md-12 d-flex align-items-center justify-content-center">
                  <div className="row">
                    <CardProgram
                      imageSrc={item.urlImage}
                      imageHeight={isMobile ? "150px" : "200px"}
                      title={item.title}
                      desc={item.desc}
                      isMobile={isMobile}
                    />
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <style>
        {`
          .carousel-highlights .slick-slider button.slick-prev {
            background: #fff !important;
            box-shadow: 0px 3px 10px rgba(145, 158, 171, 0.1);
            border: 1px solid #f2f2f2;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            z-index: 1;
            left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .carousel-highlights .slick-slider button.slick-prev:before {
            content: "";
            border: solid #00569c;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 5px;
            margin-left: 6px;
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
          }

          .carousel-highlights .slick-slider button.slick-next {
            background: #fff !important;
            box-shadow: 0px 3px 10px rgba(145, 158, 171, 0.1);
            border: 1px solid #f2f2f2;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            z-index: 1;
            right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .carousel-highlights .slick-slider button.slick-next:before {
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
