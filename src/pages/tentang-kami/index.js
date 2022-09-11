import React, { useEffect } from 'react'
import styled from 'styled-components'
import Carousel from './carousel'
import Organization from './organization'
import { mobileVersion } from '../../utils/helpers'
import {
  image_mitra,
  nilai_nilai,
  milestone,
  penghargaan,
} from '../../__json__'

const TitleAbout = styled.h2`
  color: #00569c;
  // display: inline;
  padding: 0 5px;
  border-radius: 5px;
  span {
    color: #f26624;
  }
  text-align: ${(props) => props.align || 'left'};
`

const TitleVision = styled.h3`
  display: inline;
  position: relative;
  color: #fff;
  &:before {
    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    position: absolute;
    bottom: 0;
    right: -30px;
    width: 50px;
    height: 50px;
    z-index: -1;
    opacity: 0.4;
  }
`

export default function AboutUs() {
  const { dynamicWidth } = mobileVersion()
  const isMobile = dynamicWidth <= 425 ? true : false

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <React.Fragment>
      <div class="container-xxl">
        <div class="container">
          <div
            class="row align-items-center g-5"
            style={{ marginRight: 0, marginLeft: 0 }}
          >
            <div class="col-lg-6 text-center text-lg-start animated slideInRight">
              <TitleAbout>
                Yayasan Baitul Mal <br />
                <span>BRILiaN</span>
              </TitleAbout>
              <p class="mb-4 pb-2 mt-4">
                YBM BRILiaN merupakan Lembaga Filantropi Islam pengelola Dana
                Zakat, Infak, Sedekah, dan Wakaf yang dilaksanakan secara
                professional, sesuai dengan aturan dan ketentuan dalam syariat
                islam. YBM BRILiaN berkomitmen meningkatkan kualitas hidup dan
                mobilitas vertikal keluarga dhuafa melalui serangkaian program
                Pendidikan inklusif, pemberdayaan ekonomi, serta program sosial
                kemanusiaan sehingga terwujud masyarakat berdaya.
              </p>
            </div>
            <div class="col-lg-6 text-center text-lg-end overflow-hidden animated fadeIn">
              <img
                className="img-about-desc"
                src={require('../../assets/image/sumbangan.png').default}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-xxl py-5 animated slideInLeft visi-misi-box"
        style={{ backgroundColor: '#F26624' }}
      >
        <div class="container">
          <div class="row g-5" style={{ marginRight: 0, marginLeft: 0 }}>
            <div class="col-lg-12">
              <TitleVision
                image={require('../../assets/image/crosshair.svg').default}
              >
                Visi
              </TitleVision>
              <p class="mb-4 pb-2 mt-4 text-light">
                Terwujudnya masyarakat berdaya melalui pengelolaan filantropi
                islam yang adaptif, inspiratif, dan berkarakter
              </p>
            </div>
            <div class="col-lg-12">
              <TitleVision
                image={require('../../assets/image/rocket.svg').default}
              >
                Misi
              </TitleVision>
              <ul class="list-misi">
                <li>
                  <p>
                    Mewujudkan transformasi organisasi melalui penguatan SDM dan
                    sistem yang unggul, agile, inovatif, dan berbasis teknologi
                    informasi.
                  </p>
                </li>
                <li>
                  <p>
                    Mewujudkan layanan prima dalam rangka intermediasi peran
                    muzaki dan mustahik melalui penghimpunan dan pemanfaatan
                    filantropi Islam di lingkungan BRI dan masyarakat pada
                    umumnya
                  </p>
                </li>
                <li>
                  <p>
                    Menyelenggarakan program pemberdayaan yang sinergis,
                    berdampak, berorientasi pada kemandirian dan partisipasi
                    guna mewujudkan masyarakat berdaya
                  </p>
                </li>
                <li>
                  <p>
                    Memajukan kesejahteraan umum dan mencerdaskan kehidupan
                    bangsa melalui terwujudnya peradaban zakat
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 animated slideInRight">
        <div class="container">
          <TitleAbout margin="0" align="center">
            6 Nilai <span>YBM Brillian</span>
          </TitleAbout>
          <div class="row g-5 mt-2" style={{ marginRight: 0, marginLeft: 0 }}>
            {nilai_nilai &&
              nilai_nilai.map((item, idx) => (
                <div
                  key={String(idx)}
                  class="col-lg-4 col-md-4"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <img src={item.img} alt={`img-nilai-${idx}`} />
                  <h3 style={{ color: '#F26624' }}>{item.title}</h3>
                  <p style={{ margin: 0, padding: 0 }}>{item.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div class="container-xxl">
        <TitleAbout margin="0" align="center">
          Penghargaan
        </TitleAbout>
        <Carousel data={penghargaan} isMobile={isMobile} />
      </div>
      <div className="container-filosofi-logo">
        <img
          src={require('../../assets/image/filosofi-logo.svg').default}
          alt="filosofi-logo"
        />
      </div>
      <div class="container-xxl py-5 animated slideInRight">
        <div class="container">
          <TitleAbout margin="0" align="center">
            Milestone <span>YBM Brillian</span>
          </TitleAbout>
          <div class="row g-5 mt-3" style={{ marginRight: 0, marginLeft: 0 }}>
            {milestone &&
              milestone.map((item, idx) => (
                <div
                  key={String(idx)}
                  class="col-lg-3 col-md-3"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${item.url})`,
                      backgroundPosition: 'center right',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      width: '270px',
                      height: '350px',
                      boxShadow: '0px 0px 3px 0px rgb(0 0 0 / 18%)',
                      borderRadius: '5px',
                    }}
                  >
                    <h2 style={{ padding: '10px 10px 0 10px' }}>{item.year}</h2>
                    <p
                      style={{
                        textAlign: 'justify',
                        padding: '0 10px',
                        lineHeight: '1.2',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div class="container-xxl">
        <TitleAbout margin="0" align="center">
          Organization
        </TitleAbout>
        <Organization />
      </div>
      <div class="container-xxl py-5 animated slideInRight">
        <div class="container">
          <TitleAbout margin="0" align="center">
            Mitra <span>YBM Brillian</span>
          </TitleAbout>
          <p class="mb-4 pb-2 mt-4">
            Beberapa mitra yang ikut mendukung dalam upaya dedikasi penyaluran
            zakat, infak, sedekah dan wakaf.
          </p>
          <div class="row g-5" style={{ marginRight: 0, marginLeft: 0 }}>
            {image_mitra &&
              image_mitra.map((item, idx) => (
                <div
                  key={String(idx)}
                  class="col-lg-3 col-md-3"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <img src={item.url} alt={item.alt} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <style>
        {`
          .visi-misi-box {
            position: relative;
            width: 100%;
            box-sizing: border-box;
          }

          .img-about-desc {
            width: 250px;
          }

          .container-filosofi-logo img {
            width: 100%;
          }

          ul.list-misi {
            color: #fff;
            margin: 15px 0;
            list-style: none;
          }

          ul.list-misi li p {
            position: relative;
          }

          ul.list-misi li p::before {
            position: absolute;
            content: "";
            background-image: url(${require("../../assets/image/circle-check-solid.svg").default});
            background-repeat: no-repeat;
            background-size: contain;
            z-index: 1;
            top: 0;
            left: -25px;
            width: 20px;
            height: 20px;
          }

          @media(min-width: 1024px) {
            .img-about-desc {
              width: 500px;
            }

            .visi-misi-box::before {
              background-image: url(${
                require('../../assets/image/rocket.svg').default
              });
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
              content: '';
              position: absolute;
              top: 0px;
              right: 0px;
              width: 350px;
              height: 350px;
              z-index: 1;
              opacity: 0.1;
              transform: rotate(60deg);
            }
          }
        `}
      </style>
    </React.Fragment>
  )
}
