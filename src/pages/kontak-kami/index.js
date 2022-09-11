import React, { useEffect } from 'react'
import styled from 'styled-components'
import { mobileVersion } from '../../utils/helpers'

const Title = styled.h2`
  color: #00569c;
  padding: 0 5px;
  border-radius: 5px;
  span {
    color: #f26624;
  }
  text-align: ${(props) => props.align || 'left'};
`

export default function ContactUs() {
  const { dynamicWidth } = mobileVersion()
  const isMobile = dynamicWidth <= 425 ? true : false

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <React.Fragment>
      <div class="container-xxl py-5">
        <Title>
          Media Sosial & Kontak <span>YBM BRILiaN</span>
        </Title>
        <div class="container">
          <div class="row wow fadeInUp">
            <div class="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
              <div class="row">
                <div class="col-md-6">
                  <p className="text-link">
                    <span className="fab fa-youtube ic-circle yt"></span>
                    <a
                      className="link-socmed"
                      href="https://www.youtube.com/results?search_query=ybm+brilian+tv"
                      target="_blank"
                      rel="noreferrer"
                    >
                      YBM BRILiaN TV
                    </a>
                  </p>
                </div>
                <div class="col-md-6">
                  <p className="text-link">
                    <span className="fab fa-instagram ic-circle ig"></span>
                    <a
                      className="link-socmed"
                      href="https://www.instagram.com/ybmbrilian/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @ybmbrilian
                    </a>
                  </p>
                </div>
                <div class="col-md-6">
                  <p className="text-link">
                    <span className="fa fa-envelope ic-circle email"></span>
                    <a
                      className="link-socmed"
                      href="mailto:donasibrilian@gmail.com"
                    >
                      donasibrilian@gmail.com
                    </a>
                  </p>
                </div>
                <div class="col-md-6">
                  <p className="text-link">
                    <span className="fa fa-phone ic-circle phone"></span>
                    <a className="link-socmed" href="tel:+62811808412">
                      +62811808412
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {!isMobile && (
              <div class="col-lg-6 col-md-6">
                <img
                  className="img-surat"
                  src={require('../../assets/image/gedung-2.svg').default}
                  alt="gedung-2"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row wow fadeInUp">
            {!isMobile && (
              <div class="col-lg-6 col-md-6">
                <img
                  className="img-surat"
                  src={require('../../assets/image/surat.svg').default}
                  alt="surat"
                />
              </div>
            )}
            <div class="col-lg-6 col-md-6 col-xs-12">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12">
                  <input
                    class="form-control"
                    placeholder="Nama depan"
                    type="text"
                  />
                </div>
                <div
                  class={`col-lg-6 col-md-6 col-xs-12 ${
                    isMobile ? 'mt-4' : ''
                  }`}
                >
                  <input
                    class="form-control"
                    placeholder="Nama belakang"
                    type="text"
                  />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg-12 col-md-12">
                  <input
                    class="form-control"
                    placeholder="Email"
                    type="email"
                  />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg-12 col-md-12">
                  <textarea class="form-control" placeholder="Pesan" />
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg-12 col-md-12 d-flex justify-content-end">
                  <button class="btn btn-primary">Kirim</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5">
        <Title>
          Kantor Wilayah <span>YBM BRILiaN</span>
        </Title>
        <a href="/kontak-kami/kantor-wilayah" class="btn btn-primary">
          Daftar kantor wilayah
        </a>
        <div class="container">
          <div class="row wow fadeInUp">
            <picture>
              <img
                src={require('../../assets/image/peta.webp').default}
                alt="peta-wilayah"
                width="100%"
              />
            </picture>
          </div>
        </div>
      </div>
      <style>
        {`

          .img-surat {
            height: 450px;
          }

          .ic-circle {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: #fff;
            margin: 0 5px 0 0;
          }

          .ic-circle.yt {
            background: red;
          }

          .ic-circle.ig {
            background: #833AB4;
          }

          .ic-circle.email {
            background: #FCAF45;
          }

          .ic-circle.phone {
            background: #F56040;
          }

          .text-link {
            display: flex;
            align-items: center;
          }

          .text-link .link-socmed {
            font-size: 18px;
            color: #000;
            font-weight: 700;
          }

          .text-link .link-socmed:hover {
            color: #00569c;
          }

          @media(max-width: 425px) {
            .img-surat {
              width: 300px;
            }
          }
        
        `}
      </style>
    </React.Fragment>
  )
}
