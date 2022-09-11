import React from 'react'
import Slider from 'react-slick'
// import ImageWithFallback from "../../components/image-with-fallback"

export default function Carousel({ data }) {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className="py-5 bg-dark hero-header wow fadeIn">
      <div
        className="container carousel-homepage"
        style={{
          backgroundImage: `url(${
            require('../../assets/image/main-banner.svg').default
          })`,
          // backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '900px',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          marginTop: '-50px',
          // marginRight: 0,
          // marginLeft: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Slider
          {...settings}
          style={{ width: '100%', boxSizing: 'border-box' }}
        >
          <div>
            <div className="col-md-12 col-lg-12">
              <div
                className="row"
                style={{ marginRight: 0, marginLeft: 0, height: '700px' }}
              >
                <div className="col-md-6 col-lg-6 d-flex align-items-center justify-content-center list-group wow fadeInLeft main-banner">
                  <h1>Tetaplah asik dalam berbuat baik</h1>
                  <p>
                    Yuk berbuat baik supaya kerjaan lancar dan hidup makin
                    berkah
                  </p>
                  <a
                    className="btn-donation"
                    href={process.env.REACT_APP_DONASI_URL}
                  >
                    Ayo Donasi!
                  </a>
                </div>
                <div className="col-md-6 col-lg-6 d-flex align-items-center justify-content-center wow fadeInRight">
                  <img
                    className="img-carousel"
                    src={require('../../assets/image/volunter.svg').default}
                    alt="volunter"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-md-12 col-lg-12">
              <div
                className="row"
                style={{ marginRight: 0, marginLeft: 0, height: '700px' }}
              >
                <div className="col-md-6 col-lg-6 d-flex align-items-center justify-content-center list-group wow fadeInLeft main-banner">
                  <h1>
                    Tiada rugi untuk berbagi ambil manfaat suatu saat nanti
                  </h1>
                  <p>Yuk, berbagi terhadap sesama sekarang juga!</p>
                  <a
                    className="btn-donation"
                    href={process.env.REACT_APP_DONASI_URL}
                  >
                    Ayo Donasi!
                  </a>
                </div>
                <div className="col-md-6 col-lg-6 d-flex align-items-center justify-content-center wow fadeInRight">
                  <img
                    className="img-carousel"
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
                <div className="col-md-12 col-lg-12">
                  <div
                    className="row"
                    style={{ marginRight: 0, marginLeft: 0, height: '500px' }}
                  >
                    <div className="col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                      <p
                        style={{
                          background: '#F26624',
                          fontSize: '24px',
                          padding: '5px 10px',
                          margin: 0,
                          textAlign: 'center',
                          color: '#fff',
                          borderRadius: '10px',
                        }}
                      >
                        {item.title}
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                      <img
                        className="img-carousel mt-5"
                        src={`${process.env.REACT_APP_IMAGE_BANNER}/${item.img}`}
                        alt="volunter"
                        width="600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <style>
        {`
            .container-carousel {
              background: #f2f2f2;
            }

            .main-banner h1 {
              font-size: 30px;
              margin: -40px 0 0 0;
              text-align: center;
              color: #fff;
            }

            .main-banner p {
              color: #fff;
              text-align: center;
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

            .carousel-homepage .slick-slider button.slick-prev {
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

            .carousel-homepage .slick-slider button.slick-prev:before {
              content: "";
              border: solid #00569c;
              border-width: 0 2px 2px 0;
              display: inline-block;
              padding: 5px;
              margin-left: 6px;
              transform: rotate(135deg);
              -webkit-transform: rotate(135deg);
            }

            .carousel-homepage .slick-slider button.slick-next {
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

            .carousel-homepage .slick-slider button.slick-next:before {
              content: "";
              border: solid #00569c;
              border-width: 0 2px 2px 0;
              display: inline-block;
              padding: 5px;
              margin-right: 6px;
              transform: rotate(-45deg);
              -webkit-transform: rotate(-45deg);
            }

            @media(min-width: 320px) {
              .img-carousel {
                width: 0px;
                margin-top: -250px;
              }
            }

            @media(min-width: 375px) {
              .img-carousel {
                width: 300px;
                margin-top: -250px;
              }
            }

            @media(min-width: 425px) {
              .img-carousel {
                width: 350px;
                margin-top: -250px;
              }
              .main-banner h1 {
                font-size: 56px;
              }
            }

            @media(min-width: 1024px) {
              .img-carousel {
                width: 550px;
              }
            }

          `}
      </style>
    </div>
  )
}
