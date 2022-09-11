import React from 'react'
import Slider from 'react-slick'
import { mobileVersion } from '../../utils/helpers'
// import ImageWithFallback from "../../components/image-with-fallback"

export default function Carousel({ data }) {
  const { dynamicHeight } = mobileVersion()
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <React.Fragment>
      <Slider
        {...settings}
        style={{ width: '100%', boxSizing: 'border-box' }}
        className="bg-dark hero-header wow fadeIn carousel-homepage"
      >
        <div>
          <div className="main-banner">
            <div className="row" style={{ height: `${dynamicHeight}px` }}>
              <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center list-group wow fadeInLeft">
                <p className="main-text">Tetaplah asik dalam berbuat baik</p>
                <p className="mid-text">
                  Yuk berbuat baik supaya kerjaan lancar dan hidup makin berkah
                </p>
                <a
                  className="btn-donation"
                  href={process.env.REACT_APP_DONASI_URL}
                >
                  Ayo Donasi!
                </a>
              </div>
              <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center wow fadeInRight">
                <img
                  className="img-main-banner"
                  src={require('../../assets/image/volunter.svg').default}
                  alt="volunter"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="main-banner">
            <div className="row" style={{ height: `${dynamicHeight}px` }}>
              <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center list-group wow fadeInLeft">
                <p className="main-text">
                  Tiada rugi untuk berbagi ambil manfaat suatu saat nanti
                </p>
                <p className="mid-text">
                  Yuk berbagi terhadap sesama sekarang juga!
                </p>
                <a
                  className="btn-donation"
                  href={process.env.REACT_APP_DONASI_URL}
                >
                  Ayo Donasi!
                </a>
              </div>
              <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center wow fadeInRight">
                <img
                  className="img-main-banner"
                  src={require('../../assets/image/volunter2.svg').default}
                  alt="volunter"
                />
              </div>
            </div>
          </div>
        </div>
        {data &&
          data.map((item, idx) => (
            <div key={String(idx)}>
              <div
                className="main-banner-loop"
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_IMAGE_BANNER}/${item.img})`,
                  backgroundSize: 'cover',
                  height: 'auto',
                  width: '100%',
                  position: 'relative',
                }}
              >
                <div
                  className="row"
                  style={{
                    height: `${dynamicHeight}px`,
                    background: 'rgb(0, 86, 156, 0.9)',
                  }}
                >
                  <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center list-group">
                    <div className="box-banner-loop">
                      <p className="title">{item.title}</p>
                      <p className="desc">{item.banner_desc}</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                    <picture>
                      <img
                        className="img-banner-loop"
                        src={`${process.env.REACT_APP_IMAGE_BANNER}/${item.img}`}
                        alt={`img-banner-${idx}`}
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
      <style>
        {`
          .main-banner {
            background-image: url(${
              require('../../assets/image/main-banner.svg').default
            });
            background-size: cover;
            height: auto;
            width: 100%;
          }

          .img-main-banner {
            height: 450px;
          }

          .main-text {
            font-size: 45px;
            font-weight: 700;
            font-style: italic;
            text-align: center;
            color: #fff;
          }

          .mid-text {
            font-size: 16px;
            text-align: center;
            color: #fff;
          }

          .btn-donation {
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url(${
              require('../../assets/image/btn-donation.svg').default
            });
            background-position:;
            background-repeat: no-repeat;
            background-size: contain;
            width: 170px;
            height: 60px;
            font-size: 16px;
            font-weight: 400;
            color: #fff;
          }

          .btn-donation:hover {
            color: #fff;
            font-weight: 600;
          }

          .box-banner-loop {
            width: 100%;
            text-align: center;
            padding: 0 0 0 100px;
          }

          .box-banner-loop .title {
            font-size: 45px;
            font-weight: 700;
            font-style: italic;
            text-align: center;
            color: #fff;
          }

          .box-banner-loop .desc {
            font-size: 16px;
            text-align: center;
            color: #fff;
          }

          .img-banner-loop {
            position: relative;
            height: 350px;
            border-radius: 20px;
            box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);
          }

          @media(max-width: 426px) {
            .img-main-banner {
              height: 200px;
            }

            .main-text {
              font-size: 20px;
              font-weight: 700;
            }
  
            .mid-text {
              font-size: 14px;
              text-align: center;
            }

            .img-banner-loop {
              height: 200px;
            }

            .box-banner-loop .title {
              font-size: 20px;
            }
  
            .box-banner-loop .desc {
              font-size: 14px;
              text-align: center;
            }

            .box-banner-loop {
              padding: 0 20px;
            }
          }

          .carousel-homepage button.slick-prev {
            background: rgba(255, 255, 255, 0.3) !important;
            box-shadow: 0px 3px 10px rgba(145, 158, 171, 0.1);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            z-index: 1;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .carousel-homepage button.slick-prev:before {
            content: "";
            border: solid #00569c;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 5px;
            margin-left: 6px;
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
          }

          .carousel-homepage button.slick-next {
            background: rgba(255, 255, 255, 0.3) !important;
            box-shadow: 0px 3px 10px rgba(145, 158, 171, 0.1);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            z-index: 1;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .carousel-homepage button.slick-next:before {
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
    </React.Fragment>
  )
}
