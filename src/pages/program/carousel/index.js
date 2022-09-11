import React from 'react'
import Slider from 'react-slick'
import ImageWithFallback from '../../../components/image-with-fallback'

export default function Carousel({ data, isMobile }) {
  const settings = {
    autoplay: true,
    centerMode: isMobile ? false : true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className="py-0 bg-dark hero-header wow fadeInUp">
      <div className="carousel-program">
        <Slider {...settings}>
          {data &&
            data.map((item, idx) => (
              <a key={String(idx)} href={item.path}>
                <div>
                  <div className="col-md-12 container-carousel">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <ImageWithFallback
                          src={item.urlImage}
                          alt={item.img}
                          imageHeight={isMobile ? "180px" : "300px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
        </Slider>
      </div>
      <style>
        {`
            .container-carousel {
              background: #f2f2f2;
            }

            .carousel-title {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            }

            .carousel-title .title {
              background: #EB5757;
              color: #fff;
              padding: 5px;
              border-radius: 5px;
              font-size: 24px;
              font-weight: 400;
            }

            .carousel-title .desc {
              margin: 0;
              padding: 0 0 0 10px;
            }

            .carousel-program .slick-slider button.slick-prev {
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

            .carousel-program .slick-slider button.slick-prev:before {
              content: "";
              border: solid #00569c;
              border-width: 0 2px 2px 0;
              display: inline-block;
              padding: 5px;
              margin-left: 6px;
              transform: rotate(135deg);
              -webkit-transform: rotate(135deg);
            }

            .carousel-program .slick-slider button.slick-next {
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

            .carousel-program .slick-slider button.slick-next:before {
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
